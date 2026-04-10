import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

export default function TopAppBar() {
  const { pathname } = useLocation();
  const [isPlaying, setIsPlaying] = useState(() => localStorage.getItem('bgmEnabled') !== 'false');
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const events = ['click', 'keydown', 'touchstart', 'scroll', 'mousemove', 'wheel', 'pointerdown'];

    audio.loop = true;

    const isEnabled = localStorage.getItem('bgmEnabled') !== 'false';
    if (!isEnabled) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    const tryPlay = async () => {
      try {
        audio.muted = false;
        await audio.play();
        setIsPlaying(true);
      } catch (err) {
        // Autoplay blocked by browser. Wait for interaction to play.
        setIsPlaying(false);
        const startOnInteraction = async () => {
          // Remove listeners immediately so we don't trigger multiple times
          events.forEach(e => document.removeEventListener(e, startOnInteraction));
          if (localStorage.getItem('bgmEnabled') !== 'false') {
            try {
              audio.muted = false;
              await audio.play();
              setIsPlaying(true);
            } catch (e) {
              console.error("Audio playback still blocked:", e);
            }
          }
        };
        events.forEach(e => document.addEventListener(e, startOnInteraction, { once: true }));
      }
    };

    tryPlay();

    const handleEnded = () => audio.play().catch(() => {});
    const handleVisibilityChange = () => {
      if (!document.hidden && localStorage.getItem('bgmEnabled') !== 'false') {
        audio.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };

    const handleResumeTriggers = () => {
      if (localStorage.getItem('bgmEnabled') !== 'false' && audio.paused) {
        audio.play().then(() => setIsPlaying(true)).catch(() => {});
      }
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('canplay', handleResumeTriggers);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('focus', handleResumeTriggers);
    window.addEventListener('pageshow', handleResumeTriggers);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('canplay', handleResumeTriggers);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('focus', handleResumeTriggers);
      window.removeEventListener('pageshow', handleResumeTriggers);
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      localStorage.setItem('bgmEnabled', 'false');
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      localStorage.setItem('bgmEnabled', 'true');
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "font-label text-[10px] uppercase tracking-[0.1em] font-bold text-primary border-b border-primary pb-1"
      : "font-label text-[10px] uppercase tracking-[0.1em] font-bold text-on-surface/60 hover:text-primary transition-all duration-300";
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-[#050505]/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.5)] h-20 border-b border-primary/10">
      <div className="flex justify-between items-center px-6 h-full w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img src="/ducs_logo.png" alt="DUCS Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_8px_rgba(0,255,65,0.6)]" />
          <Link to="/" className="text-2xl font-black italic tracking-tighter text-primary drop-shadow-[0_0_8px_rgba(0,255,65,0.6)] font-headline uppercase">DUCS ROBO CLUB</Link>
        </div>
        
        <nav className="hidden md:flex gap-8 items-center">
          <button 
            onClick={toggleMusic} 
            className={`flex items-center justify-center w-8 h-8 rounded-full border border-primary/20 transition-all duration-300 ${isPlaying ? 'bg-primary/20 text-primary shadow-[0_0_10px_rgba(0,255,65,0.4)]' : 'bg-transparent text-primary/50 hover:text-primary'}`}
            title="Toggle BGM"
          >
            <span className={`material-symbols-outlined text-[16px] ${isPlaying ? 'animate-pulse' : ''}`}>
              {isPlaying ? 'music_note' : 'music_off'}
            </span>
          </button>

          <Link to="/" className={getLinkClass('/')}>ARENA</Link>
          <Link to="/intel" className={getLinkClass('/intel')}>INTEL</Link>
          <Link to="/logs" className={getLinkClass('/logs')}>LOGS</Link>
          <Link to="/join" className={getLinkClass('/join')}>JOIN</Link>
        </nav>
      </div>

      <audio ref={audioRef} autoPlay loop preload="auto" playsInline src="/cod_music.mp3"></audio>
    </header>
  );
}
