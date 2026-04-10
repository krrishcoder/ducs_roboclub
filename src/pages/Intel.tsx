export default function Intel() {
  return (
    <main className="pt-32 px-6 max-w-7xl mx-auto pb-20">
      <section className="mb-16 relative">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="relative z-10">
          <div className="flex items-baseline gap-4 mb-2">
            <span className="text-primary font-label text-[10px] tracking-[0.3em] uppercase">SYSTEM_STATUS: OPTIMIZED</span>
            <div className="h-[1px] flex-grow bg-primary/10"></div>
          </div>
          <h2 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter uppercase text-on-surface mb-4 neon-text-primary">MISSION INTEL</h2>
          <p className="text-on-surface-variant max-w-2xl font-body leading-relaxed text-lg border-l-2 border-primary/30 pl-6">
            The ultimate robotic challenge by The Alive Robots. Calibrate your sensors and prepare for high-velocity engagement. 
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-24">
        {/* Eligibility Card */}
        <div className="md:col-span-5 glass-card rounded-lg overflow-hidden flex flex-col">
          <div className="p-8 relative h-full">
            <div className="flex justify-between items-start mb-12">
              <span className="material-symbols-outlined text-primary text-4xl neon-text-primary" data-icon="groups">groups</span>
              <div className="text-right">
                <span className="font-label text-[10px] text-primary/50 tracking-widest block">CODE: ELG_01</span>
              </div>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4 uppercase tracking-tight text-on-surface">Eligibility</h3>
            <p className="text-on-surface-variant font-body leading-relaxed text-lg mb-8">
              Open to all <span className="text-primary font-bold">UG &amp; PG students</span> from any discipline. Cross-functional squads are highly encouraged to optimize technical versatility.
            </p>
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/30"></div>
          </div>
        </div>

        {/* The Challenge Card */}
        <div className="md:col-span-7 glass-card rounded-lg overflow-hidden">
          <div className="h-full p-8 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded border border-primary/20">
                  <span className="material-symbols-outlined text-primary neon-text-primary" data-icon="bolt">bolt</span>
                </div>
                <h3 className="font-headline text-3xl font-bold uppercase tracking-tight text-on-surface">The Challenge</h3>
              </div>
              <p className="text-on-surface text-xl font-light leading-relaxed mb-6">
                Race to victory at the <span className="italic text-primary">Arena</span>. The fastest robot wins. Survival is not guaranteed; efficiency is mandatory.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 border-t border-primary/10 pt-8 mt-4">
              <div className="text-center group">
                <span className="block font-headline text-2xl text-primary neon-text-primary transition-all group-hover:scale-110">0.02s</span>
                <span className="font-label text-[8px] text-on-surface-variant tracking-widest uppercase">Latency Max</span>
              </div>
              <div className="text-center group">
                <span className="block font-headline text-2xl text-primary neon-text-primary transition-all group-hover:scale-110">500KG</span>
                <span className="font-label text-[8px] text-on-surface-variant tracking-widest uppercase">Class Weight</span>
              </div>
              <div className="text-center group">
                <span className="block font-headline text-2xl text-primary neon-text-primary transition-all group-hover:scale-110">MAX</span>
                <span className="font-label text-[8px] text-on-surface-variant tracking-widest uppercase">Torque limit</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/30"></div>
          </div>
        </div>

        {/* Rulebook CTA Card */}
        <div className="md:col-span-12 glass-card rounded-lg p-10 flex flex-col md:flex-row items-center justify-between gap-8 border-l-4 border-l-primary shadow-[0_0_20px_rgba(0,255,65,0.05)]">
          <div className="flex items-center gap-8">
            <div className="w-16 h-16 rounded bg-primary/5 flex items-center justify-center border border-primary/20">
              <span className="material-symbols-outlined text-primary text-4xl neon-text-primary" data-icon="menu_book">menu_book</span>
            </div>
            <div>
              <h4 className="font-headline text-2xl font-bold uppercase tracking-tight mb-2 text-on-surface">Technical Specifications &amp; Protocol</h4>
              <p className="text-on-surface-variant text-sm max-w-xl">
                Ensure your machine adheres to the kinetic safety guidelines and structural requirements outlined in the official documentation.
              </p>
            </div>
          </div>
          <button className="btn-3d px-10 py-5 rounded-sm font-label font-black text-xs uppercase tracking-[0.25em] flex items-center gap-4 group">
            Download Rulebook
            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-y-1" data-icon="download">download</span>
          </button>
        </div>

        {/* Visual Asset - Robot Component */}
        <div className="md:col-span-8 h-80 glass-card relative rounded-lg overflow-hidden group">
          <img className="w-full h-full object-cover grayscale brightness-50 opacity-40 transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABDUz5JOLla84haYr5vvv1g3pobPD0ll4ZVfyqQCHyZMxRF8J39BPO5_UYWWR1jHVlk3C4Oe6W0sssOBa3Txht5bCcilZgTM7S-72POPZrjhgmrR8wCWRqlwiZN8N1DgVT_idDXB9IfpNK2fYgkFl8JKHiUDYShBFR64DU34PLMzZQgDThLVGBmH5DYwVSsxOEnVBwIyinNX6knlnHWBN1BTBBagOQkSWm0t_YxSDuU36KgrwPhBAoBnxld0pV-hIhDbAG3Rz5n-hQ"/>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute top-6 left-6 p-4 bg-background/80 backdrop-blur-md border border-primary/20">
            <span className="block font-label text-[10px] text-primary tracking-widest uppercase animate-pulse">Telemetry Stream</span>
            <span className="block font-headline text-sm font-bold text-on-surface">X-RAY_SCAN: ACTIVE</span>
          </div>
          <div className="absolute inset-0 border-[20px] border-transparent group-hover:border-primary/5 transition-all pointer-events-none"></div>
        </div>

        {/* Small Utility Stats */}
        <div className="md:col-span-4 glass-card p-8 rounded-lg flex flex-col justify-center">
          <div className="space-y-6">
            <div className="flex justify-between items-center group">
              <span className="font-label text-xs text-on-surface-variant group-hover:text-primary transition-colors">PRIZE POOL</span>
              <span className="font-headline text-2xl text-primary neon-text-primary">$50,000</span>
            </div>
            <div className="h-px bg-primary/10"></div>
            <div className="flex justify-between items-center group">
              <span className="font-label text-xs text-on-surface-variant group-hover:text-primary transition-colors">REGISTRATIONS</span>
              <span className="font-headline text-2xl text-primary neon-text-primary">128/256</span>
            </div>
            <div className="h-px bg-primary/10"></div>
            <div className="flex justify-between items-center group">
              <span className="font-label text-xs text-on-surface-variant group-hover:text-primary transition-colors">DEADLINE</span>
              <span className="font-headline text-2xl text-primary neon-text-primary">NOV 24</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
