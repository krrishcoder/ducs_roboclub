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
              <span className="font-body text-on-surface text-lg">April 24, 2026</span>
              <span className="font-body text-on-surface-variant">Line Follower Arena</span>
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
              <span className="font-headline text-xl text-on-surface">1.5 KG</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Rules */}
      <div className="mb-16">
        <h3 className="text-3xl font-headline font-bold uppercase tracking-tight text-on-surface mb-8 border-b border-primary/20 pb-4 flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">gavel</span> OFFICIAL RULEBOOK
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Robot Specifications */}
          <div className="glass-card p-8 rounded-lg flex flex-col h-full hover:border-primary/30 transition-colors">
            <h4 className="font-headline text-xl uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
               <span className="material-symbols-outlined">memory</span> Robot Specs
            </h4>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-on-surface-variant">Max dimension</span><span className="text-white font-mono">25 x 25 cm</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-on-surface-variant">Tolerance</span><span className="text-white font-mono">± 5%</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-on-surface-variant">Max weight</span><span className="text-white font-mono">1.5 Kg</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-on-surface-variant">Power supply</span><span className="text-white font-mono">Battery Only, Max 20 V</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-on-surface-variant">Drive type</span><span className="text-white font-mono">Differential / skid</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-on-surface-variant">Remote control</span><span className="text-red-400 font-mono">Not allowed</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-on-surface-variant">Pre-built kits</span><span className="text-red-400 font-mono">Not allowed</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-on-surface-variant">Track memorisation</span><span className="text-red-400 font-mono">Not allowed</span></li>
              <li className="flex justify-between pt-1"><span className="text-on-surface-variant">Single robot rule</span><span className="text-white font-mono text-right max-w-[180px]">One robot per team (no swapping)</span></li>
            </ul>
          </div>

          {/* Track & Course Rules */}
          <div className="glass-card p-8 rounded-lg flex flex-col h-full hover:border-primary/30 transition-colors">
            <h4 className="font-headline text-xl uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
               <span className="material-symbols-outlined">route</span> Track & Course
            </h4>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-on-surface-variant">Line color</span><span className="text-white font-mono">Black on white surface</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-on-surface-variant">Line width</span><span className="text-white font-mono">2 - 3 cm</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-on-surface-variant">Track features</span><span className="text-white font-mono text-right max-w-[180px]">Curves, 90° turns, 120° curves</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-on-surface-variant">Intersections</span><span className="text-white font-mono">None</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-on-surface-variant">Surface</span><span className="text-white font-mono">Flex sheet</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-on-surface-variant">Timing</span><span className="text-white font-mono">Fastest</span></li>
              <li className="flex justify-between pt-1"><span className="text-on-surface-variant">Test Track</span><span className="text-primary font-mono">Yes</span></li>
            </ul>
          </div>

          {/* Competition Rules */}
          <div className="glass-card p-8 rounded-lg flex flex-col h-full hover:border-primary/30 transition-colors">
             <h4 className="font-headline text-xl uppercase tracking-widest text-primary mb-6 flex items-center gap-2">
               <span className="material-symbols-outlined">sports_score</span> Competition Rules
            </h4>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-on-surface-variant">Team size</span><span className="text-white font-mono">1-5 members</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-on-surface-variant">Scoring</span><span className="text-white font-mono">Fastest completion time wins</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-on-surface-variant">Timing</span><span className="text-white font-mono text-right max-w-[180px]">Starts at start line, stops at finish line</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-on-surface-variant">Restart</span><span className="text-white font-mono text-right max-w-[180px]">1 restart per attempt (time continues)</span></li>
              <li className="flex justify-between border-b border-white/5 pb-2"><span className="text-on-surface-variant">Tiebreaker</span><span className="text-white font-mono">Fewer restarts wins</span></li>
              <li className="flex justify-between pt-1"><span className="text-on-surface-variant">Human assistance</span><span className="text-red-400 font-mono">Not allowed during run</span></li>
            </ul>
          </div>

          {/* DNF & Constraints */}
          <div className="glass-card p-8 rounded-lg flex flex-col h-full border-l-[3px] border-l-red-500/50 hover:border-l-red-500 transition-colors">
             <h4 className="font-headline text-xl uppercase tracking-widest text-red-500 mb-6 flex items-center gap-2">
               <span className="material-symbols-outlined">warning</span> DNF & Constraints
            </h4>
            <ul className="space-y-4 font-body text-sm">
               <li className="flex flex-col border-b border-white/5 pb-3">
                <span className="text-white font-bold mb-1">Max Time Limit</span>
                <span className="text-on-surface-variant leading-relaxed">Each attempt has a max duration of 5 mins. Not finishing within 5 min = DNF. 3 attempts per team, best time counts.</span>
              </li>
              <li className="flex flex-col border-b border-white/5 pb-3">
                <span className="text-white font-bold mb-1">Off-Tracking & Void</span>
                <span className="text-on-surface-variant leading-relaxed">Off-track when no part is over the black line for &gt;3s. Run void after 3 off-track events (back to last checkpoint). 6 off-track events = DNF. DNF ranks below all timed finishes.</span>
              </li>
              <li className="flex flex-col pt-1">
                <span className="text-white font-bold mb-1">Measurements & Weight Check</span>
                <span className="text-on-surface-variant leading-relaxed">Dimensions measured at widest point (incl. sensors). Must fit inside 26.5 x 26.5 cm box jig. Weighed with battery before every run.</span>
              </li>
            </ul>
          </div>

           {/* Prizes */}
          <div className="md:col-span-2 glass-card p-8 rounded-lg bg-primary/5 hover:bg-primary/10 border border-primary/20 transition-all flex flex-col sm:flex-row items-center justify-between gap-6">
             <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center border border-primary/50">
                   <span className="material-symbols-outlined text-4xl text-primary">emoji_events</span>
                </div>
                <div>
                  <h4 className="font-headline text-2xl uppercase tracking-widest text-primary">Prizes & Perks</h4>
                  <p className="font-label text-xs tracking-[0.2em] text-on-surface-variant uppercase">Claim your victory</p>
                </div>
             </div>
             <div className="flex gap-4 w-full sm:w-auto">
                <div className="flex-1 sm:flex-none py-3 px-6 bg-black/40 rounded border border-white/5 text-center">
                  <div className="text-primary font-bold mb-1 uppercase tracking-widest text-sm">1ST PRIZE</div>
                  <div className="font-mono text-sm text-white/50">TBA</div>
                </div>
                <div className="flex-1 sm:flex-none py-3 px-6 bg-black/40 rounded border border-white/5 text-center">
                  <div className="text-white font-bold mb-1 uppercase tracking-widest text-sm">2ND PRIZE</div>
                  <div className="font-mono text-sm text-white/50">TBA</div>
                </div>
                 <div className="flex-1 sm:flex-none py-3 px-6 bg-black/40 rounded border border-white/5 text-center">
                  <div className="text-white font-bold mb-1 uppercase tracking-widest text-sm">PERKS</div>
                  <div className="font-mono text-sm text-white/80">E-Certificate</div>
                </div>
             </div>
          </div>
        </div>
      </div>

    </main>
  );
}
