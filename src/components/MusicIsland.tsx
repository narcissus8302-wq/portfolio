import { useCallback, useEffect, useRef, useState } from 'react';
import previewAudio from '../assets/honorable-preview.mp3';

const PREVIEW_SECONDS = 4;

type Phase = 'idle' | 'playing' | 'paused' | 'blocked';

function Equalizer({ active }: { active: boolean }) {
  return (
    <span aria-hidden="true" className="flex h-4 items-end gap-[3px]">
      {[0, 0.18, 0.36, 0.1].map((delay, index) => (
        <span
          key={index}
          className="eq-bar w-[3px] rounded-full bg-sage"
          style={{ animationDelay: `${delay}s`, animationPlayState: active ? 'running' : 'paused' }}
        />
      ))}
    </span>
  );
}

export function MusicIsland() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const stopTimerRef = useRef<number | null>(null);
  const [phase, setPhase] = useState<Phase>('idle');
  const [progress, setProgress] = useState(0);
  const [isMini, setIsMini] = useState(false);

  const clearStopTimer = useCallback(() => {
    if (stopTimerRef.current !== null) {
      window.clearTimeout(stopTimerRef.current);
      stopTimerRef.current = null;
    }
  }, []);

  const scheduleStop = useCallback(
    (audio: HTMLAudioElement) => {
      clearStopTimer();
      const remainingMs = Math.max(0, PREVIEW_SECONDS - audio.currentTime) * 1000;
      stopTimerRef.current = window.setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
        setProgress(0);
        setPhase('idle');
        setIsMini(true);
      }, remainingMs);
    },
    [clearStopTimer],
  );

  const playPreview = useCallback(
    (restart: boolean) => {
      const audio = audioRef.current;
      if (!audio) return;
      setIsMini(false);
      if (restart) audio.currentTime = 0;
      void audio.play().catch(() => setPhase('blocked'));
    },
    [],
  );

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => {
      setPhase('playing');
      scheduleStop(audio);
    };

    const handlePause = () => {
      clearStopTimer();
      setPhase((current) => (current === 'playing' ? 'paused' : current));
    };

    const handleTimeUpdate = () => {
      setProgress(Math.min(1, audio.currentTime / PREVIEW_SECONDS));
    };

    const handleEnded = () => {
      clearStopTimer();
      audio.currentTime = 0;
      setProgress(0);
      setPhase('idle');
      setIsMini(true);
    };

    const removeGestureListeners = () => {
      window.removeEventListener('pointerdown', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };

    function handleFirstGesture() {
      removeGestureListeners();
      if (audio && audio.paused) {
        void audio.play().catch(() => setPhase('blocked'));
      }
    }

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    void audio.play().catch(() => {
      setPhase('blocked');
      window.addEventListener('pointerdown', handleFirstGesture);
      window.addEventListener('keydown', handleFirstGesture);
    });

    return () => {
      removeGestureListeners();
      clearStopTimer();
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, [clearStopTimer, scheduleStop]);

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (phase === 'playing') {
      audio.pause();
      return;
    }
    playPreview(false);
  };

  const caption =
    phase === 'playing'
      ? 'Playing · 4s preview'
      : phase === 'paused'
        ? 'Paused · tap to resume'
        : phase === 'blocked'
          ? 'Tap to play · 4s preview'
          : '4s preview';

  return (
    <>
      <audio ref={audioRef} src={previewAudio} preload="auto" aria-hidden="true" />
      <p className="sr-only" role="status" aria-live="polite">
        {phase === 'playing'
          ? 'Playing a four second preview of honorable.flac.'
          : phase === 'paused'
            ? 'The preview is paused.'
            : phase === 'blocked'
              ? 'Autoplay was blocked. Activate the play control to hear the four second preview.'
              : ''}
      </p>

      <div className="music-island-enter pointer-events-none fixed inset-x-0 bottom-5 z-[60] flex justify-center px-4">
        <div className="pointer-events-auto">
          {isMini ? (
            <button
              type="button"
              onClick={() => playPreview(true)}
              aria-label="Replay the four second preview of honorable.flac"
              className="music-island-pop group relative grid size-12 place-items-center rounded-full border border-bone/10 bg-obsidian/30 text-bone shadow-[0_12px_36px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-transform duration-300 hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sage"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[18px] text-sage" fill="currentColor">
                <path d="M9 18.5a2.5 2.5 0 1 1-2-2.45V5.6a1 1 0 0 1 .77-.97l9-2.25A1 1 0 0 1 18 3.35v11.7a2.5 2.5 0 1 1-2-2.45V6.42l-7 1.75v10.33Z" />
              </svg>
              <span className="absolute right-0.5 top-0.5 size-2.5 rounded-full border border-obsidian/60 bg-sage" />
            </button>
          ) : (
            <div className="relative flex min-w-[248px] items-center gap-3 overflow-hidden rounded-full border border-bone/10 bg-obsidian/30 py-2 pl-3 pr-2 shadow-[0_12px_36px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
              <span className="grid size-9 shrink-0 place-items-center rounded-full border border-sage/20 bg-sage/10">
                <Equalizer active={phase === 'playing'} />
              </span>

              <span className="mr-auto flex min-w-0 flex-col gap-1">
                <span className="truncate text-[13px] font-medium leading-none text-bone">
                  honorable.flac
                </span>
                <span className="label text-[9px] leading-none text-stone">{caption}</span>
              </span>

              <button
                type="button"
                onClick={togglePlayback}
                aria-label={phase === 'playing' ? 'Pause the preview' : 'Play the four second preview'}
                className="grid size-8 shrink-0 place-items-center rounded-full bg-bone/10 text-bone transition-colors duration-200 hover:bg-bone/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
              >
                {phase === 'playing' ? (
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[13px]" fill="currentColor">
                    <path d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z" />
                  </svg>
                ) : (
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-[13px] translate-x-px" fill="currentColor">
                    <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.1-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
                  </svg>
                )}
              </button>

              <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[2px] bg-bone/10">
                <span
                  className="block h-full rounded-full bg-sage transition-[width] duration-200 ease-linear"
                  style={{ width: `${progress * 100}%` }}
                />
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
