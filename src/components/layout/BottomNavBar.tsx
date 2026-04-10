import { Link, useLocation } from 'react-router-dom';

export default function BottomNavBar() {
  const { pathname } = useLocation();

  const getButtonClass = (path: string) => {
    return pathname === path
      ? "flex flex-col items-center justify-center text-primary p-2 relative"
      : "flex flex-col items-center justify-center text-on-surface/40 p-2 transition-colors";
  };

  const getIndicator = (path: string) => {
    return pathname === path ? (
      <div className="absolute -top-1 w-12 h-[2px] bg-primary shadow-[0_0_10px_rgba(0,255,65,1)]"></div>
    ) : null;
  };

  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 pb-[env(safe-area-inset-bottom)] bg-[#050505]/95 backdrop-blur-xl border-t border-primary/20">
      <Link to="/" className={getButtonClass('/')}>
        {getIndicator('/')}
        <span className={`material-symbols-outlined ${pathname === '/' ? 'neon-text-primary' : ''}`} data-icon="sports_esports">sports_esports</span>
        <span className="font-label text-[10px] uppercase font-bold mt-1">ARENA</span>
      </Link>
      
      <Link to="/intel" className={getButtonClass('/intel')}>
        {getIndicator('/intel')}
        <span className={`material-symbols-outlined ${pathname === '/intel' ? 'neon-text-primary' : ''}`} data-icon="terminal">terminal</span>
        <span className="font-label text-[10px] uppercase font-bold mt-1">INTEL</span>
      </Link>
      
      <Link to="/logs" className={getButtonClass('/logs')}>
        {getIndicator('/logs')}
        <span className={`material-symbols-outlined ${pathname === '/logs' ? 'neon-text-primary' : ''}`} data-icon="calendar_view_day">calendar_view_day</span>
        <span className="font-label text-[10px] uppercase font-bold mt-1">LOGS</span>
      </Link>
      
      <Link to="/join" className={getButtonClass('/join')}>
        {getIndicator('/join')}
        <span className={`material-symbols-outlined ${pathname === '/join' ? 'neon-text-primary' : ''}`} data-icon="sensors">sensors</span>
        <span className="font-label text-[10px] uppercase font-bold mt-1">JOIN</span>
      </Link>
    </nav>
  );
}
