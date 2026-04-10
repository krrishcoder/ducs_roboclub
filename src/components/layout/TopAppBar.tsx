import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';

export default function TopAppBar() {
  const { pathname } = useLocation();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Immediately try to play (works after first ever visit or if browser allows)
    const tryPlay = () => {
      audio.play().then(() => {
        setIsPlaying(true);
        sessionStorage.setItem('musicActive', 'true');
      }).catch(() => {
        // Browser blocked - wait for first interaction
        const startOnInteraction = () => {
          audio.play().then(() => {
            setIsPlaying(true);
            sessionStorage.setItem('musicActive', 'true');
          }).catch(() => {});
          document.removeEventListener('click', startOnInteraction);
          document.removeEventListener('keydown', startOnInteraction);
          document.removeEventListener('touchstart', startOnInteraction);
          document.removeEventListener('scroll', startOnInteraction);
        };
        document.addEventListener('click', startOnInteraction);
        document.addEventListener('keydown', startOnInteraction);
        document.addEventListener('touchstart', startOnInteraction);
        document.addEventListener('scroll', startOnInteraction);
      });
    };

    tryPlay();

    // If music stops for any reason, restart it
    const handleEnded = () => audio.play().catch(() => {});
    const handlePause = () => {
      // Only auto-resume if user didn't manually pause
      if (sessionStorage.getItem('musicActive') === 'true') {
        audio.play().catch(() => {});
      }
    };

    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('pause', handlePause);
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      sessionStorage.setItem('musicActive', 'false');
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      sessionStorage.setItem('musicActive', 'true');
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

      <audio ref={audioRef} autoPlay loop src="/cod_music.mp3"></audio>
    </header>
  );
}
