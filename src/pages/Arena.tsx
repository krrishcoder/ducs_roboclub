import { useRef, useEffect } from 'react';

export default function Arena() {
  const fitTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fit = () => {
      // Measure using a temp element appended to body (bypasses any overflow constraints)
      const temp = document.createElement('span');
      temp.style.cssText = `
        position: absolute; top: -9999px; left: -9999px;
        font-family: 'Space Grotesk', sans-serif;
        font-weight: 900; font-style: italic;
        font-size: 100px; white-space: nowrap;
        letter-spacing: -0.05em; text-transform: uppercase;
        visibility: hidden; pointer-events: none;
      `;
      temp.textContent = 'THE ALIVE ROBOTS';
      document.body.appendChild(temp);
      const naturalWidth = temp.getBoundingClientRect().width;
      document.body.removeChild(temp);

      const fontSize = (window.innerWidth / naturalWidth) * 100;
      if (fitTextRef.current) {
        fitTextRef.current.style.fontSize = `${fontSize}px`;
      }
    };
    fit();
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);
  return (
    <main className="pt-32 pb-32 overflow-hidden bg-[url('https://transparent-pattern.svg')]">
      <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">

        <div className="relative z-10 max-w-6xl w-full">
          <div className="inline-block px-4 py-1 mb-6 border border-primary/30 bg-primary/5 rounded-full">
            <span className="font-label text-[10px] tracking-[0.3em] font-bold text-primary">THE ALIVE ROBOTS // v2.0</span>
          </div>
          <h1 className="font-headline text-6xl md:text-[8rem] font-black tracking-tighter text-glow-primary text-white mb-2 leading-[0.85] uppercase italic">
            DUCS ROBO <span className="text-primary">CLUB</span>
          </h1>
          <p className="font-label text-lg md:text-xl uppercase tracking-[0.4em] font-light text-on-surface-variant mb-16 max-w-2xl mx-auto">
            Speed, Thrills and DUCS spirit!
          </p>

          <div className="relative perspective-card group mb-16">
            <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden border border-white/10 shadow-3d-glow transition-all duration-500 group-hover:scale-[1.02] bg-neutral-900">
              <img alt="3D Line Follower Robot Car" className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-110" src="/robot_car.png" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

              <div className="absolute inset-0 p-8 flex flex-col justify-between pointer-events-none">
                <div className="flex justify-between items-start opacity-50">
                  <div className="w-16 h-16 border-t-4 border-l-4 border-primary"></div>
                  <div className="text-right font-mono text-[10px] text-primary">
                    [ SCANNING_TARGET ]<br />LOCK_ON_ACQUIRED
                  </div>
                </div>
                <div className="flex justify-between items-end opacity-50">
                  <div className="font-mono text-[10px] text-primary">
                    COORD: 28.584° N, 77.250° E<br />SECTOR: 04_DUCS
                  </div>
                  <div className="w-16 h-16 border-b-4 border-r-4 border-primary"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-10">
            <button className="btn-3d px-16 py-6 bg-primary text-black font-headline font-black text-2xl tracking-tighter uppercase rounded shadow-tactile hover:brightness-110 transition-all flex items-center gap-4">
              REGISTER NOW
              <span className="material-symbols-outlined font-bold" data-icon="arrow_forward">arrow_forward</span>
            </button>
            <div className="flex items-center gap-4 text-primary font-label text-xs tracking-[0.2em] uppercase font-bold opacity-80">
              <span className="material-symbols-outlined animate-pulse text-sm" data-icon="sensors">sensors</span>
              SYSTEM READY // TRANSMISSION ACTIVE
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Prize Pool Card */}
        <div className="md:col-span-8 bg-[#111111] p-10 rounded-2xl relative overflow-hidden group border border-white/5 shadow-2xl transition-all hover:border-primary/30">
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-[12rem] text-primary" data-icon="payments">payments</span>
          </div>
          <h3 className="font-label text-[10px] text-primary uppercase tracking-[0.4em] mb-4 font-black flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            GRAND_STAKES
          </h3>
          <div className="font-headline text-7xl md:text-[9rem] font-black tracking-tighter text-white leading-none italic">
            SOON<span className="text-primary">™</span>
          </div>
          <p className="font-body text-on-surface-variant mt-6 text-xl max-w-lg">Prize pool announcement coming soon. Stay tuned for the ultimate stakes.</p>
        </div>

        {/* Current Event Card */}
        <div className="md:col-span-4 bg-[#111111] p-10 rounded-2xl border border-white/5 flex flex-col justify-between shadow-2xl">
          <div>
            <h3 className="font-label text-[10px] text-primary uppercase tracking-[0.4em] mb-8 font-black flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              UPCOMING EVENT
            </h3>
            <div className="font-headline text-4xl font-black tracking-tighter text-white italic mb-1">LINE FOLLOWER</div>
            <div className="font-headline text-4xl font-black tracking-tighter text-primary italic mb-4">ROBOT</div>
            <div className="font-label text-[10px] text-white/40 uppercase tracking-widest">APRIL 24, 2026</div>
          </div>
          <div className="mt-8 flex items-center justify-between text-on-surface-variant font-mono text-xs">
            <span className="material-symbols-outlined text-primary" data-icon="calendar_month">calendar_month</span>
            <span className="tracking-widest font-bold text-primary">REGISTER NOW</span>
          </div>
        </div>

        {/* Past Event Banner */}
        <div className="md:col-span-12 bg-[#0a0a0a] p-8 rounded-2xl border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,#00ff41_0,#00ff41_1px,transparent_0,transparent_50%)] bg-[length:10px_10px]"></div>
          <div className="relative z-10 flex items-center gap-6">
            <span className="material-symbols-outlined text-white/20 text-5xl" data-icon="history">history</span>
            <div>
              <p className="font-label text-[9px] uppercase tracking-[0.3em] text-white/30 mb-1">PAST EVENT // ARCHIVED</p>
              <p className="font-headline text-2xl font-black text-white/40 italic uppercase tracking-tight">OVER TORQUE</p>
              <p className="font-label text-[10px] text-white/20 uppercase tracking-widest mt-1">APRIL 19, 2025</p>
            </div>
          </div>
          <div className="relative z-10">
            <span className="border border-white/10 text-white/30 text-[9px] font-label font-black px-4 py-2 uppercase tracking-widest rounded">COMPLETED</span>
          </div>
        </div>

        <div className="md:col-span-12 bg-black p-12 rounded-2xl border border-white/5 flex flex-col md:flex-row items-center gap-16 relative overflow-hidden shadow-2xl">
          <div className="z-10 flex-1">
            <h3 className="font-label text-[10px] text-orange-500 uppercase tracking-[0.4em] mb-6 font-black">BASE_OF_OPERATIONS</h3>
            <div className="font-headline text-5xl md:text-6xl font-black tracking-tighter text-white mb-6 uppercase italic leading-none">DUCS, DELHI UNIVERSITY</div>
            <p className="font-body text-on-surface-variant max-w-md text-lg leading-relaxed">The historic Department of Computer Science transforms into a high-octane racing arena for one day only.</p>
          </div>
          <a href="https://maps.app.goo.gl/A2ofjeLv3ZwY7ewP8" target="_blank" rel="noreferrer" className="relative w-full md:w-2/5 aspect-video bg-[#111111] rounded-xl border border-white/10 overflow-hidden group shadow-inner block cursor-pointer">
            <img alt="Delhi University Campus" className="w-full h-full object-cover grayscale opacity-30 group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbBolNQJnojqRrm1rbWTIEg703PLHvrANRukHD9hefeeO3z9R8EJzqMx6sXC9GsDptCcxqzzYl9JMNQkK-jUPm1Qh6S5w7NOKggPukKtZXJOKJNmPGZQ2vUg4X0nYmRLt-3R8IaR6rcyeuZZlgutP22mwMVg-zR-EyVymE0pljzcvQJfQ_HViKkfxxlVoUZ1S_G_cCnxZrrsHchDSYs4iJU1mRjHYfaKK_2WEuV8yonpF9g_uNJ7WmFAIURWSaGLHAaeD3bJbMFALa" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-primary/20 backdrop-blur-md p-6 rounded-full border border-primary/40 shadow-[0_0_30px_rgba(0,255,65,0.3)] transition-transform duration-500 group-hover:scale-110">
                <span className="material-symbols-outlined text-primary text-5xl" data-icon="location_on">location_on</span>
              </div>
            </div>
          </a>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        </div>
      </section>

      {/* Origins Timeline Section */}
      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5 relative">
        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-[100%] pointer-events-none"></div>

        <div className="flex flex-col md:flex-row gap-8 items-end justify-between mb-24 border-b border-primary/20 pb-12 relative z-10">
          <div className="max-w-3xl">
            <h3 className="font-label text-[10px] text-primary uppercase tracking-[0.4em] mb-4 font-black flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-primary"></span>
              ARCHIVE_DECRYPT: ORIGIN_STORY
            </h3>
            <h2 className="font-headline text-5xl md:text-7xl font-black tracking-tighter text-white uppercase italic mb-6 leading-none">HOW WE STARTED</h2>
            <p className="text-on-surface-variant font-body text-xl leading-relaxed">From raw components on basic desks to the adrenaline-fueled DUCS Arena. Here is the operational history that forged the Robo Club.</p>
          </div>
        </div>

        <div className="relative z-10 pl-4 md:pl-12">
          {/* Timeline Line */}
          <div className="absolute left-[20px] md:left-[52px] top-4 bottom-4 w-1 bg-gradient-to-b from-primary via-primary/20 to-transparent shadow-[0_0_15px_rgba(0,255,65,0.5)]"></div>

          <div className="flex flex-col gap-24">
            
            {/* Timeline Item 1 */}
            <div className="relative group flex flex-col md:flex-row gap-12 items-start md:items-center">
              <div className="absolute -left-[5px] md:-left-[5px] top-6 md:top-1/2 md:-translate-y-1/2 w-6 h-6 bg-black border-2 border-primary rotate-45 group-hover:bg-primary transition-all duration-300 z-10 shadow-[0_0_20px_rgba(0,255,65,0.4)]"></div>
              
              <div className="ml-12 md:ml-20 flex-1 bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-primary/40 transition-colors shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <span className="font-headline text-9xl italic font-black">01</span>
                </div>
                <div className="flex flex-col gap-2 mb-6 relative z-10">
                  <span className="font-label text-[10px] text-primary tracking-widest uppercase font-bold">Genesis_Phase</span>
                  <h4 className="font-headline text-3xl font-bold tracking-tight text-white uppercase italic">THE SQUAD ASSEMBLES</h4>
                  <p className="font-body text-on-surface-variant leading-relaxed text-lg max-w-xl">Five minds, zero budget, and infinite ambition. Armed with basic tools, tapes, cardboard, and sheer willpower in the DUCS classrooms.</p>
                </div>
              </div>
              
              <div className="md:flex-1 ml-12 md:ml-0 md:pl-8 relative group cursor-pointer w-full max-w-md">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl mix-blend-overlay z-10"></div>
                <img src="/origin_team.jpg" alt="The original Robo Club team" className="bg-neutral-900 w-full aspect-[4/3] object-cover rounded-xl border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] grayscale group-hover:grayscale-0" />
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="relative group flex flex-col md:flex-row gap-12 items-start md:items-center">
              <div className="absolute -left-[5px] md:-left-[5px] top-6 md:top-1/2 md:-translate-y-1/2 w-6 h-6 bg-black border-2 border-primary rotate-45 group-hover:bg-primary transition-all duration-300 z-10 shadow-[0_0_20px_rgba(0,255,65,0.4)]"></div>
              
              <div className="ml-12 md:ml-20 flex-1 bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-primary/40 transition-colors shadow-2xl relative overflow-hidden md:order-2">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <span className="font-headline text-9xl italic font-black">02</span>
                </div>
                <div className="flex flex-col gap-2 mb-6 relative z-10">
                  <span className="font-label text-[10px] text-primary tracking-widest uppercase font-bold">Hardware_Integration</span>
                  <h4 className="font-headline text-3xl font-bold tracking-tight text-white uppercase italic">CIRCUITRY &amp; RAW STEEL</h4>
                  <p className="font-body text-on-surface-variant leading-relaxed text-lg max-w-xl">From scattered breadboards, jumper wires, to raw DC motors. Late nights spent soldering and mapping the logic that would bring the beast to life.</p>
                </div>
              </div>
              
              <div className="md:flex-1 ml-12 md:ml-0 md:pr-8 relative group cursor-pointer w-full max-w-md md:order-1">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl mix-blend-overlay z-10"></div>
                <img src="/origin_hardware.jpg" alt="Initial hardware components" className="bg-neutral-900 w-full aspect-[4/3] object-cover rounded-xl border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] grayscale group-hover:grayscale-0" />
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="relative group flex flex-col md:flex-row gap-12 items-start md:items-center">
              <div className="absolute -left-[5px] md:-left-[5px] top-6 md:top-1/2 md:-translate-y-1/2 w-6 h-6 bg-black border-2 border-primary rotate-45 group-hover:bg-primary transition-all duration-300 z-10 shadow-[0_0_20px_rgba(0,255,65,0.4)]"></div>
              
              <div className="ml-12 md:ml-20 flex-1 bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-primary/40 transition-colors shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <span className="font-headline text-9xl italic font-black">03</span>
                </div>
                <div className="flex flex-col gap-2 mb-6 relative z-10">
                  <span className="font-label text-[10px] text-primary tracking-widest uppercase font-bold">First_Prototype</span>
                  <h4 className="font-headline text-3xl font-bold tracking-tight text-white uppercase italic">DHANNO [LFR]</h4>
                  <p className="font-body text-on-surface-variant leading-relaxed text-lg max-w-xl">The original Line Follower Robot (LFR). Built with a raw cardboard chassis, pure ambition, and pure hardware logic to trace the tracks.</p>
                </div>
              </div>
              
              <div className="md:flex-1 ml-12 md:ml-0 md:pl-8 relative group cursor-pointer w-full max-w-md">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl mix-blend-overlay z-10"></div>
                <img src="/origin_dhanno1.jpg" alt="Dhanno 1.0 LFR Robot" className="bg-neutral-900 w-full aspect-[4/3] object-cover rounded-xl border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] grayscale group-hover:grayscale-0" />
              </div>
            </div>

            {/* Timeline Item 4 */}
            <div className="relative group flex flex-col md:flex-row gap-12 items-start md:items-center">
              <div className="absolute -left-[5px] md:-left-[5px] top-6 md:top-1/2 md:-translate-y-1/2 w-6 h-6 bg-black border-2 border-primary rotate-45 group-hover:bg-primary transition-all duration-300 z-10 shadow-[0_0_20px_rgba(0,255,65,0.4)]"></div>
              
              <div className="ml-12 md:ml-20 flex-1 bg-[#111111] p-8 rounded-2xl border border-white/5 hover:border-primary/40 transition-colors shadow-2xl relative overflow-hidden md:order-2">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <span className="font-headline text-9xl italic font-black">04</span>
                </div>
                <div className="flex flex-col gap-2 mb-6 relative z-10">
                  <span className="font-label text-[10px] text-primary tracking-widest uppercase font-bold">Evolution</span>
                  <h4 className="font-headline text-3xl font-bold tracking-tight text-white uppercase italic">DHANNO 2.0</h4>
                  <p className="font-body text-on-surface-variant leading-relaxed text-lg max-w-xl">The evolution. Upgraded to a fully BLE (Bluetooth Low Energy) controlled chassis featuring an advanced power delivery system and structural reinforcement.</p>
                </div>
              </div>
              
              <div className="md:flex-1 ml-12 md:ml-0 md:pr-8 relative group cursor-pointer w-full max-w-md md:order-1">
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl mix-blend-overlay z-10"></div>
                <img src="/origin_dhanno2.png" alt="Dhanno 2.0 BLE Controlled Robot" className="bg-neutral-900 w-full aspect-[4/3] object-cover rounded-xl border border-white/10 shadow-2xl transition-transform duration-700 group-hover:scale-[1.02] grayscale group-hover:grayscale-0" />
              </div>
            </div>

            {/* Timeline Item 5 */}
            <div className="relative group flex flex-col md:flex-row gap-12 items-start md:items-center">
              <div className="absolute -left-[5px] md:-left-[5px] top-6 md:top-1/2 md:-translate-y-1/2 w-6 h-6 bg-primary rotate-45 animate-pulse z-10 shadow-[0_0_20px_rgba(0,255,65,0.8)]"></div>
              
              <div className="ml-12 md:ml-20 flex-1 bg-primary/5 p-8 rounded-2xl border border-primary/30 transition-colors shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,#00ff41_0,#00ff41_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] opacity-[0.03]"></div>
                <div className="flex flex-col gap-2 mb-6 relative z-10">
                  <span className="font-label text-[10px] text-primary tracking-widest uppercase font-bold">Operational_Climax</span>
                  <h4 className="font-headline text-3xl font-bold tracking-tight text-white uppercase italic glow-text">THE ARENA OPENS</h4>
                  <p className="font-body text-on-surface-variant leading-relaxed text-lg max-w-xl text-white/80">From a scattered prototype to a fully mobilized robotic chassis. The framework was set for the ultimate racing championship.</p>
                </div>
                <div className="flex gap-2">
                   <span className="border border-primary/30 text-primary text-[9px] font-black px-3 py-1 uppercase tracking-widest bg-primary/10">CURRENT_STATUS: LIVE</span>
                </div>
              </div>
              
              <div className="md:flex-1 ml-12 md:ml-0 md:pl-8 opacity-0 hidden md:block">
                {/* Spacer to keep balance for the fifth item */}
              </div>
            </div>

          </div>
        </div>
      </section>


      <section className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
        <div className="flex flex-col md:flex-row gap-8 items-end justify-between mb-20 border-b border-white/5 pb-12">
          <div className="max-w-3xl">
            <h2 className="font-headline text-6xl font-black tracking-tighter text-white uppercase italic mb-6">KINETIC SPECS</h2>
            <p className="text-on-surface-variant font-body text-xl leading-relaxed">Analyze the telemetry data and prepare your machines for the most grueling line-following challenge ever engineered at DUCS.</p>
          </div>
          <div className="flex gap-4">
            <div className="w-16 h-2 bg-primary"></div>
            <div className="w-6 h-2 bg-neutral-800"></div>
            <div className="w-6 h-2 bg-neutral-800"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#111111] p-8 rounded-xl border border-white/5 hover:border-primary/40 transition-all group shadow-xl hover:-translate-y-2">
            <div className="flex justify-between items-start mb-12">
              <div className="p-4 bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="speed">speed</span>
              </div>
              <span className="font-mono text-[10px] text-neutral-600 font-bold">SRL-001</span>
            </div>
            <h4 className="font-headline text-2xl font-bold mb-4 tracking-tight text-white">PRECISION TRACKING</h4>
            <p className="font-body text-on-surface-variant leading-relaxed">Machines must navigate complex 90-degree turns and parabolic arcs with sub-millimeter precision.</p>
          </div>

          <div className="bg-[#111111] p-8 rounded-xl border border-white/5 hover:border-primary/40 transition-all group shadow-xl hover:-translate-y-2">
            <div className="flex justify-between items-start mb-12">
              <div className="p-4 bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="bolt">bolt</span>
              </div>
              <span className="font-mono text-[10px] text-neutral-600 font-bold">SRL-002</span>
            </div>
            <h4 className="font-headline text-2xl font-bold mb-4 tracking-tight text-white">DYNAMIC OVERDRIVE</h4>
            <p className="font-body text-on-surface-variant leading-relaxed">Variable speed zones test your PID tuning to the absolute limit. Speed is nothing without control.</p>
          </div>

          <div className="bg-[#111111] p-8 rounded-xl border border-white/5 hover:border-primary/40 transition-all group shadow-xl hover:-translate-y-2">
            <div className="flex justify-between items-start mb-12">
              <div className="p-4 bg-primary/10 rounded-lg">
                <span className="material-symbols-outlined text-primary text-3xl" data-icon="security">security</span>
              </div>
              <span className="font-mono text-[10px] text-neutral-600 font-bold">SRL-003</span>
            </div>
            <h4 className="font-headline text-2xl font-bold mb-4 tracking-tight text-white">STABILITY PROTOCOL</h4>
            <p className="font-body text-on-surface-variant leading-relaxed">Obstacle detection and collision avoidance modules are mandatory for all Class-A entries.</p>
          </div>
        </div>
      </section>


      {/* Bottom page text — FitText */}
      <div className="w-full overflow-hidden pointer-events-none select-none">
        <span
          ref={fitTextRef}
          className="font-headline font-black uppercase italic whitespace-nowrap leading-none block text-center"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1.5px rgba(0,255,65,0.18)',
            userSelect: 'none',
            lineHeight: '0.85',
            letterSpacing: '-0.05em',
          }}
        >
          THE ALIVE ROBOTS
        </span>
      </div>
    </main>
  );
}
