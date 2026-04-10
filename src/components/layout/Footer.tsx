import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 bg-[#050505] border-t border-primary/5 pb-24 md:pb-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 max-w-7xl mx-auto">
        <p className="font-label text-[8px] tracking-[0.2em] uppercase text-on-surface/30">
          © 2026 DUCS ROBO CLUB // THE ALIVE ROBOTS
        </p>
        <div className="flex gap-8">
          <Link to="/" className="font-label text-[8px] tracking-[0.2em] uppercase text-on-surface/30 hover:text-primary transition-colors">RULES</Link>
          <Link to="/" className="font-label text-[8px] tracking-[0.2em] uppercase text-on-surface/30 hover:text-primary transition-colors">PIT_ACCESS</Link>
          <Link to="/" className="font-label text-[8px] tracking-[0.2em] uppercase text-on-surface/30 hover:text-primary transition-colors">TELEMETRY</Link>
          <Link to="/join" className="font-label text-[8px] tracking-[0.2em] uppercase text-on-surface/30 hover:text-primary transition-colors">CONTACT</Link>
        </div>
      </div>
    </footer>
  );
}
