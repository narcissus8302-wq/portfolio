import { useRef, useEffect } from 'react';

const chars = ['@', '#', '%', '*', '+', '=', '-', ':', '.', ' '];
const fov = 250;
const maxZ = 1000;

export interface Config {
  repelRadius: number;
  repelForce: number;
  starDensity: number;
  driftSpeed: number;
  theme: string;
  photonGlow: boolean;
}

interface CanvasBackgroundProps {
  config: Config;
}

export default function CanvasBackground({ config }: CanvasBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Array<{
    update: (speed: number) => void;
    calculateRenderData: (w: number, h: number, r: number, f: number) => { screenX: number, screenY: number, opacity: number, fontSize: number, char: string } | null;
  }>>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number | null>(null);
  const themeColorRef = useRef<string>('252, 163, 17'); // Default RGB

  useEffect(() => {
    const root = document.documentElement;
    // Apply classes to root element for correct Tailwind v4 variable propagation
    root.classList.remove('theme-fire', 'theme-matrix', 'theme-cyberpunk', 'theme-terminal', 'glow-enabled');

    if (config.theme !== 'fire') {
      root.classList.add(`theme-${config.theme}`);
    }

    const body = document.body;
    body.className = ''; // Keep for legacy specific glow overrides if needed
    if (config.photonGlow) {
      body.classList.add('glow-enabled');
    }

    // Pre-calculate theme color RGB to avoid getComputedStyle in animation loop
    const computeThemeColor = () => {
      const hex = getComputedStyle(root).getPropertyValue('--text-color').trim();
      themeColorRef.current = hexToRgb(hex || '#fca311');
    };

    // Give browser a tick to apply classes before reading computed style
    setTimeout(computeThemeColor, 0);

  }, [config.theme, config.photonGlow]);

  function hexToRgb(hex: string) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    if (isNaN(r)) return '252, 163, 17';
    return `${r}, ${g}, ${b}`;
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    class Particle {
      x: number;
      y: number;
      z: number;
      char: string;
      vz: number;
      offsetX: number;
      offsetY: number;
      vx: number;
      vy: number;

      constructor(initial = false) {
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.char = '';
        this.vz = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.vx = 0;
        this.vy = 0;
        this.reset(initial);
      }

      reset(initial = false) {
        this.x = (Math.random() - 0.5) * width * 3;
        this.y = (Math.random() - 0.5) * height * 3;
        this.z = initial ? Math.random() * maxZ : maxZ;
        this.char = chars[Math.floor(Math.random() * chars.length)];
        this.vz = (Math.random() * 2 + 1);
        this.offsetX = 0;
        this.offsetY = 0;
        this.vx = 0;
        this.vy = 0;
      }

      update(driftSpeed: number) {
        this.z -= this.vz * driftSpeed;
        if (this.z <= 0) {
          this.reset();
        }
        this.vx *= 0.9;
        this.vy *= 0.9;
        this.offsetX += (0 - this.offsetX) * 0.1;
        this.offsetY += (0 - this.offsetY) * 0.1;
        this.offsetX += this.vx;
        this.offsetY += this.vy;
      }

      // Separate update physics from draw to allow batching
      calculateRenderData(width: number, height: number, repelRadius: number, repelForce: number) {
        if (this.z <= 0) return null;

        const scale = fov / (fov + this.z);
        const screenX = (this.x * scale) + (width / 2) + this.offsetX;
        const screenY = (this.y * scale) + (height / 2) + this.offsetY;

        if (screenX < -50 || screenX > width + 50 || screenY < -50 || screenY > height + 50) return null;

        const mouse = mouseRef.current;
        const dx = screenX - mouse.x;
        const dy = screenY - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < repelRadius) {
          const force = (repelRadius - distance) / repelRadius;
          const angle = Math.atan2(dy, dx);
          this.vx += Math.cos(angle) * force * repelForce;
          this.vy += Math.sin(angle) * force * repelForce;
        }

        const opacity = Math.max(0.1, 1 - (this.z / maxZ));
        const fontSize = Math.floor(Math.max(8, 30 * scale));

        return { screenX, screenY, opacity, fontSize, char: this.char };
      }
    }

    // Adjust particle count
    const currentLen = particlesRef.current.length;
    if (config.starDensity > currentLen) {
      for (let i = 0; i < config.starDensity - currentLen; i++) {
        particlesRef.current.push(new Particle(true));
      }
    } else if (config.starDensity < currentLen) {
      particlesRef.current.splice(config.starDensity);
    }

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      const themeRgb = themeColorRef.current;

      // We batch rendering by fontSize to minimize ctx.font changes
      // Font changes are extremely expensive in 2D canvas API
      const fontBatches: Record<number, Array<{x: number, y: number, opacity: number, char: string}>> = {};

      for (const p of particlesRef.current) {
        p.update(config.driftSpeed);
        const renderData = p.calculateRenderData(width, height, config.repelRadius, config.repelForce);

        if (renderData) {
          if (!fontBatches[renderData.fontSize]) fontBatches[renderData.fontSize] = [];
          fontBatches[renderData.fontSize].push({
            x: renderData.screenX,
            y: renderData.screenY,
            opacity: renderData.opacity,
            char: renderData.char
          });
        }
      }

      ctx.fillStyle = `rgb(${themeRgb})`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Render batches
      for (const sizeStr in fontBatches) {
        const size = parseInt(sizeStr);
        ctx.font = `${size}px 'JetBrains Mono', 'Fira Code', monospace`;

        const batch = fontBatches[sizeStr];
        for (const item of batch) {
          ctx.globalAlpha = item.opacity;
          ctx.fillText(item.char, item.x, item.y);
        }
      }

      // Reset alpha
      ctx.globalAlpha = 1.0;

      animationRef.current = requestAnimationFrame(animate);
    };

    let lastTime = 0;
    const throttleDelay = 16; // roughly 60fps

    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastTime >= throttleDelay) {
        mouseRef.current.x = e.clientX;
        mouseRef.current.y = e.clientY;
        lastTime = now;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      const now = Date.now();
      if (now - lastTime >= throttleDelay) {
        mouseRef.current.x = e.touches[0].clientX;
        mouseRef.current.y = e.touches[0].clientY;
        lastTime = now;
      }
    };

    const handleMouseOut = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('mouseout', handleMouseOut);

    // Cancel previous animation frame to avoid multiple loops
    if (animationRef.current) cancelAnimationFrame(animationRef.current);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('mouseout', handleMouseOut);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [config.starDensity, config.driftSpeed, config.repelRadius, config.repelForce]);

  return <canvas ref={canvasRef} id="bg-canvas" className="fixed top-0 left-0 w-full h-full z-0" />;
}
