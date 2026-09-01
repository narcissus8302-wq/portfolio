import type { Config } from './CanvasBackground';

interface ControlsPanelProps {
  config: Config;
  setConfig: React.Dispatch<React.SetStateAction<Config>>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ControlsPanel({ config, setConfig, isOpen, setIsOpen }: ControlsPanelProps) {
  if (!isOpen) return null;

  const handleChange = (key: keyof Config, value: string | number | boolean) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  const getDensityLabel = (val: number) => {
    if (val < 400) return "Low";
    if (val > 1200) return "High";
    return "Normal";
  };

  return (
    <aside className="w-full lg:w-[350px] bg-[var(--panel-bg)] border border-[var(--border-color)] rounded-lg backdrop-blur shadow-2xl flex flex-col pointer-events-auto self-start z-50 fixed right-8 top-24 lg:fixed lg:right-8 lg:top-24">
      <div className="border-b border-[var(--border-color-dim)] p-4 flex justify-between items-center">
        <h3 className="text-base tracking-wide font-label-code text-[var(--text-color)]">SIMULATION CONTROLS</h3>
        <button onClick={() => setIsOpen(false)} className="bg-transparent border-none text-xl text-[var(--text-color)] cursor-pointer">✕</button>
      </div>
      <div className="p-4 overflow-y-auto max-h-[calc(100vh-250px)] flex flex-col gap-6 font-body-sm">

        <div>
          <label className="flex justify-between text-sm text-[var(--text-color-muted)] mb-2">
            Repel Radius: <span className="text-[var(--text-color)]">{config.repelRadius}px</span>
          </label>
          <input
            type="range" min="50" max="500" value={config.repelRadius}
            onChange={(e) => handleChange('repelRadius', parseInt(e.target.value))}
          />
        </div>

        <div>
          <label className="flex justify-between text-sm text-[var(--text-color-muted)] mb-2">
            Repel Force: <span className="text-[var(--text-color)]">{config.repelForce.toFixed(1)}x</span>
          </label>
          <input
            type="range" min="0" max="5" step="0.1" value={config.repelForce}
            onChange={(e) => handleChange('repelForce', parseFloat(e.target.value))}
          />
        </div>

        <div>
          <label className="flex justify-between text-sm text-[var(--text-color-muted)] mb-2">
            Star Density: <span className="text-[var(--text-color)]">{getDensityLabel(config.starDensity)} ({config.starDensity})</span>
          </label>
          <input
            type="range" min="100" max="2000" step="100" value={config.starDensity}
            onChange={(e) => handleChange('starDensity', parseInt(e.target.value))}
          />
        </div>

        <div>
          <label className="flex justify-between text-sm text-[var(--text-color-muted)] mb-2">
            Drift Speed: <span className="text-[var(--text-color)]">{config.driftSpeed.toFixed(1)}x</span>
          </label>
          <input
            type="range" min="0" max="5" step="0.1" value={config.driftSpeed}
            onChange={(e) => handleChange('driftSpeed', parseFloat(e.target.value))}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm text-[var(--text-color-muted)]">Theme Palette:</label>
          <select
            className="w-full bg-[var(--bg-color)] text-[var(--text-color)] border border-[var(--border-color-dim)] p-2 rounded outline-none font-body-sm"
            value={config.theme}
            onChange={(e) => handleChange('theme', e.target.value)}
          >
            <option value="terminal">Terminal Green</option>
            <option value="fire">Fire Photon</option>
            <option value="matrix">Matrix Green</option>
            <option value="cyberpunk">Cyberpunk Blue</option>
          </select>
        </div>

        <div className="flex justify-between items-center">
          <label className="text-sm text-[var(--text-color-muted)]">CRT Scanlines:</label>
          <input
            type="checkbox" checked={config.crtScanlines}
            onChange={(e) => handleChange('crtScanlines', e.target.checked)}
          />
        </div>

        <button
          onClick={() => setConfig({
            repelRadius: 200, repelForce: 1.5, starDensity: 700, driftSpeed: 1.0, theme: 'fire', crtScanlines: true, photonGlow: false
          })}
          className="w-full bg-transparent text-[var(--text-color-muted)] border border-[var(--border-color-dim)] p-3 mt-4 hover:text-[var(--text-color)] hover:border-[var(--border-color)] transition-colors cursor-pointer font-label-code"
        >
          Reset Defaults
        </button>

      </div>
    </aside>
  );
}
