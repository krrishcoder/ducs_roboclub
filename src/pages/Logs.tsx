export default function Logs() {
  return (
    <main className="pt-28 px-6 max-w-7xl mx-auto flex flex-col gap-12 pb-24">
      {/* Page Headline */}
      <section className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <div className="h-[1px] w-12 bg-primary"></div>
          <span className="font-label text-[10px] tracking-[0.3em] text-primary uppercase font-bold">SYSTEM_TELEMETRY // LIVE</span>
        </div>
        <h2 className="font-headline text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none italic">
          ARENA <span className="text-transparent stroke-primary" style={{ WebkitTextStroke: '1px #00FF41' }}>&amp;</span> <span className="text-primary glow-text">TIMELINE</span>
        </h2>
      </section>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Venue Section */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="kinetic-border bg-surface-container-low/40 p-8 backdrop-blur-sm">
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-start justify-between border-b border-primary/10 pb-4">
                <div className="flex flex-col">
                  <span className="font-label text-[9px] text-primary/60 uppercase tracking-widest mb-1">STRATEGIC_SECTOR_ID</span>
                  <h3 className="font-headline text-2xl font-bold text-primary leading-tight uppercase">DU_COMP_SCI_FACILITY</h3>
                </div>
                <div className="bg-primary/5 p-3 border border-primary/20">
                  <span className="material-symbols-outlined text-primary text-3xl" data-icon="location_on" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
              </div>

              {/* 3D Map Visualization */}
              <div className="aspect-square w-full bg-black border border-primary/20 relative group overflow-hidden">
                <img alt="Arena Map" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtpublOVLw6J8hsFe7TzmqalU2FZY0y2oTtT53DGemhmHFcuYjAZ7cDaRu-IbGKTsu05kV16B-ffBiOilMLzfGYyaMTVJQRTL9Cq8TEmRXDntUJX8OGdS3A0zUzZ_9-appUowUpz-Qylu4HMXFMFAF0RBe9KW09wszD3KWNlqNrzEH8kR5mov5MWi1nq1kxM-xFjgjgbqLQFU9oThK02VTye_zh66pG2wNjg_2HHUwhYWc7jm2nzgGBxieWmMQoSfsrlM9Q2LV9hWG"/>
                
                {/* 3D Marker Overlays */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="relative">
                    <div className="w-32 h-32 border-2 border-primary/30 rounded-full animate-ping absolute -left-16 -top-16 opacity-20"></div>
                    <div className="w-8 h-8 bg-primary marker-3d animate-bounce shadow-[0_0_20px_rgba(0,255,65,1)]"></div>
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
                
                {/* Tactical Overlay */}
                <div className="absolute top-4 left-4 flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_8px_#00FF41]"></span>
                    <span className="font-label text-[8px] font-bold tracking-[0.2em] text-primary">SCANNING_DATA...</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-4">
                  <div className="flex justify-between items-end">
                    <div className="flex flex-col">
                      <span className="font-headline text-lg font-bold text-primary italic">SECTOR 07-DU</span>
                      <span className="font-label text-[9px] text-primary/60 uppercase tracking-tighter">28.6892° N, 77.2104° E</span>
                    </div>
                    <a href="https://maps.app.goo.gl/A2ofjeLv3ZwY7ewP8" target="_blank" rel="noreferrer" className="bg-primary text-black font-label text-[10px] font-black px-6 py-2 uppercase tracking-widest hover:bg-white transition-all transform hover:-translate-y-1 active:translate-y-0 text-center">
                      ACTIVATE_NAV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secondary Info Card */}
          <div className="bg-surface-container-high/20 p-6 border-l-[1px] border-primary/40 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-20">
              <span className="material-symbols-outlined text-4xl" data-icon="terminal">terminal</span>
            </div>
            <p className="font-body text-xs text-primary/80 leading-relaxed font-mono">
              &gt; STATUS: ARENA_LOCKED<br/>
              &gt; ENV: MULTI_LEVEL_COMPLEX<br/>
              &gt; SENSORS: MANDATORY_CALIBRATION_REQUIRED<br/>
              &gt; NOTICE: HIGH_TORQUE_ZONES_DETECTED
            </p>
          </div>
        </div>

        {/* Schedule Section */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <h3 className="font-headline text-3xl font-black tracking-tighter italic text-primary uppercase">MISSION_LOG</h3>
              <div className="h-0.5 w-full bg-gradient-to-r from-primary to-transparent"></div>
            </div>
            <div className="bg-black/50 px-4 py-1 border border-primary/30 flex items-center gap-2">
              <span className="material-symbols-outlined text-[10px] text-primary animate-spin" data-icon="sync" style={{ animationDuration: '3s' }}>sync</span>
              <span className="font-label text-[9px] font-bold text-primary tracking-widest uppercase">SYNCED: 04:00_UTC</span>
            </div>
          </div>

          {/* Dashboard Timeline */}
          <div className="relative flex flex-col gap-6 pl-4">
            {/* Vertical Progress Line */}
            <div className="absolute left-0 top-0 bottom-0 w-[1px] timeline-line opacity-30"></div>

            {/* April 19th History entry */}
            <div className="relative group opacity-60 hover:opacity-100 transition-opacity">
              <div className="absolute -left-[20px] top-6 w-3 h-3 bg-black border border-primary/50 group-hover:border-primary transition-all duration-300 z-10 rotate-45"></div>
              <div className="kinetic-border bg-surface-container-low/10 p-6 backdrop-blur-sm group-hover:bg-primary/5 transition-colors border-primary/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-label text-[10px] text-primary/70 font-black tracking-[0.2em] flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary/70"></span> APRIL 10, 2026
                    </span>
                    <h4 className="font-headline text-xl font-bold tracking-tight uppercase text-primary/80 italic">SYSTEM_INIT</h4>
                    <p className="font-body text-[13px] text-on-surface-variant font-medium leading-relaxed">Line Follower registration portal officially online.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="border border-primary/30 text-primary/70 text-[9px] font-black px-3 py-1 uppercase tracking-widest bg-primary/5">HIST_LOG</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 10:30 AM entry */}
            <div className="relative group">
              <div className="absolute -left-[20px] top-6 w-3 h-3 bg-black border border-primary group-hover:bg-primary transition-all duration-300 z-10 rotate-45"></div>
              <div className="kinetic-border bg-surface-container-low/30 p-6 backdrop-blur-sm group-hover:bg-primary/5 transition-colors border-primary/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-label text-[10px] text-primary font-black tracking-[0.2em] flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary"></span> APR 24, 2026 // 10:00 AM
                    </span>
                    <h4 className="font-headline text-xl font-bold tracking-tight uppercase text-primary italic">KICKOFF_INIT</h4>
                    <p className="font-body text-[13px] text-on-surface-variant font-medium leading-relaxed">Opening briefing and hardware verification sequence.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="border border-primary/30 text-primary text-[9px] font-black px-3 py-1 uppercase tracking-widest bg-primary/5">P_01</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 11:00 AM entry */}
            <div className="relative group">
              <div className="absolute -left-[20px] top-6 w-3 h-3 bg-black border border-primary group-hover:bg-primary transition-all duration-300 z-10 rotate-45"></div>
              <div className="kinetic-border bg-surface-container-low/30 p-6 backdrop-blur-sm group-hover:bg-primary/5 transition-colors border-primary/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-label text-[10px] text-primary font-black tracking-[0.2em] flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary"></span> APR 24, 2026 // 11:00 AM
                    </span>
                    <h4 className="font-headline text-xl font-bold tracking-tight uppercase text-primary italic">TRIAL_RUNS</h4>
                    <p className="font-body text-[13px] text-on-surface-variant font-medium leading-relaxed">Qualifying runs on the technical obstacle course.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="border border-primary/30 text-primary text-[9px] font-black px-3 py-1 uppercase tracking-widest bg-primary/5">COMMS_L</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 02:00 PM entry (Main Event) */}
            <div className="relative group">
              <div className="absolute -left-[20px] top-6 w-3 h-3 bg-primary z-10 rotate-45 animate-pulse shadow-[0_0_10px_#00FF41]"></div>
              <div className="kinetic-border bg-primary/10 p-6 backdrop-blur-xl border-primary/40 glow-box relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent h-20 -top-20 animate-[scan_4s_linear_infinite] pointer-events-none"></div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-label text-[10px] text-primary font-black tracking-[0.2em] flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary"></span> APR 24, 2026 // 12:00 PM
                      </span>
                      <span className="bg-primary text-black text-[8px] font-black px-2 py-0.5 uppercase tracking-widest">CRITICAL_EVENT</span>
                    </div>
                    <h4 className="font-headline text-3xl font-black tracking-tight uppercase text-primary italic glow-text">THE MAIN RACE</h4>
                    <p className="font-body text-[13px] text-white/80 font-medium leading-relaxed">Championship final. Maximum torque limiters disengaged.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      <span className="w-1 h-4 bg-primary"></span>
                      <span className="w-1 h-6 bg-primary"></span>
                      <span className="w-1 h-4 bg-primary"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 05:00 PM entry */}
            <div className="relative group">
              <div className="absolute -left-[20px] top-6 w-3 h-3 bg-black border border-primary group-hover:bg-primary transition-all duration-300 z-10 rotate-45"></div>
              <div className="kinetic-border bg-surface-container-low/30 p-6 backdrop-blur-sm group-hover:bg-primary/5 transition-colors border-primary/10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <span className="font-label text-[10px] text-primary font-black tracking-[0.2em] flex items-center gap-2">
                      <span className="w-1 h-1 bg-primary"></span> APR 24, 2026 // 03:00 PM
                    </span>
                    <h4 className="font-headline text-xl font-bold tracking-tight uppercase text-primary italic">AWARDS_PROC</h4>
                    <p className="font-body text-[13px] text-on-surface-variant font-medium leading-relaxed">Podium celebration and telemetry report release.</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="border border-primary/30 text-primary text-[9px] font-black px-3 py-1 uppercase tracking-widest bg-primary/5">E_LOG</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>



      {/* CURRENT LIVE: Line Follower Robot — Sankalan 2026 */}
      <div className="mt-8 flex flex-col gap-6">
        <div className="flex items-center gap-4 border-b border-primary/20 pb-4">
          <div className="relative">
            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full animate-ping"></span>
          </div>
          <div className="flex flex-col">
            <span className="font-label text-[9px] tracking-[0.3em] text-primary uppercase font-bold">CURRENT EVENT // REGISTRATION OPEN</span>
            <h3 className="font-headline text-3xl font-black tracking-tighter italic text-primary uppercase">LINE FOLLOWER ROBOT</h3>
          </div>
          <span className="ml-auto bg-primary text-black font-label text-[9px] font-black px-3 py-1.5 uppercase tracking-widest animate-pulse">● LIVE</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Event Identity */}
          <div className="glass-card p-6 rounded-xl border-l-[3px] border-primary col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
              <span className="font-label text-[9px] text-primary uppercase tracking-widest font-bold">EVENT DETAILS</span>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <p className="font-label text-[9px] text-primary/50 uppercase tracking-widest">FEST</p>
                <p className="font-headline text-xl font-black text-white uppercase italic">SANKALAN 2026</p>
              </div>
              <div>
                <p className="font-label text-[9px] text-primary/50 uppercase tracking-widest">DATE</p>
                <p className="font-body text-white font-semibold">April 24–25, 2026</p>
              </div>
              <div>
                <p className="font-label text-[9px] text-primary/50 uppercase tracking-widest">VENUE</p>
                <p className="font-body text-white/70 text-sm">Dept. of Computer Science, University of Delhi</p>
              </div>
            </div>
          </div>

          {/* What is LFR + Key Rules */}
          <div className="glass-card p-6 rounded-xl col-span-1 md:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>route</span>
              <span className="font-label text-[9px] text-primary uppercase tracking-widest font-bold">MISSION BRIEF</span>
            </div>
            <p className="font-body text-on-surface-variant leading-relaxed">
              Build a fully autonomous robot that follows a <strong className="text-white">black line (2–3 cm wide) on a white flex-sheet surface</strong> — navigating curves, 90° turns, and 120° curves with no intersections. No remote control. No pre-built kits. Fastest completion time wins.
            </p>
            <div className="grid grid-cols-2 gap-3 border-t border-white/5 pt-4">
              {[
                { label: 'Max Dimension', value: '25 × 25 cm (±5%)' },
                { label: 'Max Weight', value: '1.5 Kg (with battery)' },
                { label: 'Power', value: 'Battery only, Max 20V' },
                { label: 'Team Size', value: '1–5 members' },
                { label: 'Attempts', value: '3 runs, best time counts' },
                { label: 'Max Time', value: '5 min per attempt' },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="font-label text-[8px] text-primary/50 uppercase tracking-widest">{label}</span>
                  <span className="font-body text-white text-sm font-semibold">{value}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {['Autonomous', 'No Intersections', 'PID Control', 'Differential Drive'].map(tag => (
                <span key={tag} className="font-mono text-[8px] border border-primary/30 text-primary/70 px-2 py-0.5 uppercase bg-primary/5">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Over Torque 2025 Archive Section */}
      <div className="mt-16 flex flex-col gap-8">
        <div className="flex items-center gap-4 border-b border-primary/20 pb-4">
          <span className="material-symbols-outlined text-primary text-3xl">inventory_2</span>
          <h3 className="font-headline text-3xl font-black tracking-tighter italic text-primary uppercase">CLASSIFIED ARCHIVES: OVER TORQUE 2025</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Historical Details */}
          <div className="glass-card p-8 rounded-lg border-l-[3px] border-primary/30 opacity-80 hover:opacity-100 transition-opacity">
            <h4 className="font-headline text-xl uppercase tracking-widest text-on-surface mb-4 glow-text text-primary">Event Origin</h4>
            <ul className="space-y-4 font-body text-on-surface-variant text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[16px] text-primary mt-1">arrow_right</span>
                <span><strong>Date:</strong> April 20, 2025 (11:00 AM to 2:30 PM)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[16px] text-primary mt-1">arrow_right</span>
                <span><strong>Venue:</strong> <a href="https://maps.app.goo.gl/A2ofjeLv3ZwY7ewP8" target="_blank" rel="noreferrer" className="hover:text-primary hover:underline transition-colors">Department of Computer Science, University of Delhi</a></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[16px] text-primary mt-1">arrow_right</span>
                <span><strong>Prize Pool:</strong> ₹16,000 Total (1st: 8K, 2nd: 5K, 3rd: 3K)</span>
              </li>
            </ul>
          </div>

          {/* Historical Task & Eligibility */}
          <div className="glass-card p-8 rounded-lg border-l-[3px] border-primary/30 opacity-80 hover:opacity-100 transition-opacity">
            <h4 className="font-headline text-xl uppercase tracking-widest text-on-surface mb-4 glow-text text-primary">Task &amp; Eligibility</h4>
            <ul className="space-y-4 font-body text-on-surface-variant text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[16px] text-primary mt-1">arrow_right</span>
                <span>Max 4 members per team. Cross-institute participation allowed.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[16px] text-primary mt-1">arrow_right</span>
                <span><strong>Objective:</strong> Manually controlled wireless robot navigating structural and tactical obstacle courses.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[16px] text-primary mt-1">arrow_right</span>
                <span><strong>Hardware:</strong> Max 5KG, 30x30x20cm. Readymade kits penalized. No ground disengagement allowed.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
