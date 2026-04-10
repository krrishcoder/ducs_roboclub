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
            The 2026 Challenge is here. Design and deploy an autonomous machine capable of high-speed optical navigation. Precision and velocity will determine the victor.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
        {/* Core Details Stats Card */}
        <div className="md:col-span-8 glass-card rounded-lg overflow-hidden flex flex-col p-8 relative">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-3xl neon-text-primary" data-icon="route">route</span>
              <h3 className="font-headline text-2xl font-bold uppercase tracking-tight text-on-surface">Line Follower - 2026</h3>
            </div>
            <span className="font-label text-[10px] text-primary/50 tracking-widest block">CURR_OPS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="flex flex-col gap-2">
              <span className="font-label text-xs text-primary/70 uppercase tracking-widest">Venue</span>
              <a href="https://maps.app.goo.gl/A2ofjeLv3ZwY7ewP8" target="_blank" rel="noreferrer" className="font-body text-on-surface text-lg hover:text-primary transition-colors flex items-start gap-2 group">
                <span className="group-hover:underline">Department of Computer Science,<br />University of Delhi</span>
                <span className="material-symbols-outlined text-[14px] mt-1">open_in_new</span>
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-label text-xs text-primary/70 uppercase tracking-widest">Time &amp; Date</span>
              <span className="font-body text-on-surface text-lg">TBA - 2026</span>
              <span className="font-body text-on-surface-variant">Stay tuned for schedule</span>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-primary/10 hover:bg-primary/20 border border-primary/30 text-primary font-label text-xs uppercase tracking-widest px-6 py-3 rounded transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] animate-pulse">app_registration</span>
              Register (Coming Soon)
            </button>
          </div>
          
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/30"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-tl-full blur-xl pointer-events-none"></div>
        </div>

        {/* Requirements Card */}
        <div className="md:col-span-4 glass-card p-8 rounded-lg flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-primary text-xl">sensors</span>
              <h3 className="font-label text-xs tracking-[0.2em] text-primary uppercase font-bold">Tech Specs</h3>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="font-body text-sm text-on-surface-variant">AUTONOMY</span>
              <span className="font-headline text-3xl text-primary neon-text-primary">100%</span>
            </div>
            <div className="h-px bg-primary/10"></div>
            <div className="flex justify-between items-center">
              <span className="font-body text-sm text-on-surface-variant">SENSOR PKG</span>
              <span className="font-headline text-2xl text-on-surface">IR/OPTICAL</span>
            </div>
            <div className="h-px bg-primary/10"></div>
            <div className="flex justify-between items-center">
              <span className="font-body text-sm text-on-surface-variant">MAX WEIGHT</span>
              <span className="font-headline text-xl text-on-surface">TBD</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rules and Specs Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        
        {/* Core Task */}
        <div className="glass-card p-8 rounded-lg border-l-[3px] border-primary/50 hover:border-primary transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary">crisis_alert</span>
            <h3 className="font-headline text-xl uppercase tracking-widest text-on-surface">Core Task</h3>
          </div>
          <ul className="space-y-4 font-body text-on-surface-variant text-sm leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[16px] text-primary mt-1">arrow_right</span>
              <span><strong>Objective:</strong> Build an autonomous robot capable of tracing a high-contrast path (e.g., black line on a white background) from start to finish.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[16px] text-primary mt-1">arrow_right</span>
              <span><strong>Navigation:</strong> The bot must successfully negotiate various challenging path elements, which may include curves, sharp angles, and crossovers.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-[16px] text-primary mt-1">arrow_right</span>
              <span><strong>Scoring:</strong> The final metric will be based on the time taken to complete the track, with penalties applied for losing the line or requiring manual intervention.</span>
            </li>
          </ul>
        </div>

        {/* Note on Rules */}
        <div className="glass-card p-8 rounded-lg border-l-[3px] border-primary/50 hover:border-primary transition-colors">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary">update</span>
            <h3 className="font-headline text-xl uppercase tracking-widest text-on-surface">Full Rulebook Update Pending</h3>
          </div>
          <p className="font-body text-on-surface-variant text-sm leading-relaxed mb-4">
            The full comprehensive rulebook containing precise dimensions, weight restrictions, voltage limits, and detailed gameplay mechanics for the 2026 Line Follower event is currently being finalized by the organizing committee.
          </p>
          <div className="p-4 bg-primary/10 border border-primary/20 flex gap-4 items-center">
            <span className="material-symbols-outlined text-primary animate-spin" style={{ animationDuration: '3s' }}>sync</span>
            <span className="font-mono text-xs text-primary/80">AWAITING_TELEMETRY_FROM_HQ...</span>
          </div>
        </div>
      </div>

    </main>
  );
}
