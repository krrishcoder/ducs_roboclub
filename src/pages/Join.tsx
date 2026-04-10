export default function Join() {
  return (
    <main className="min-h-screen pt-24 pb-32 px-6 tech-grid">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Headline Section */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-3">
            <div className="h-[2px] w-8 bg-primary"></div>
            <span className="font-label text-primary uppercase tracking-[0.3em] text-[10px] font-bold">SYSTEM_ENTRY_04</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-headline font-bold tracking-tighter text-on-surface uppercase leading-none">
            JOIN THE <span className="text-primary">GRID</span>
          </h2>
          <p className="mt-6 text-on-surface-variant max-w-xl font-body leading-relaxed text-sm">
            Initiate protocol for the final telemetry challenge. Register your robot for the upcoming arena phase through the official Unstop portal.
          </p>
        </div>

        {/* Main Layout: Asymmetric Bento */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Registration Card (7 columns) */}
          <div className="md:col-span-7 three-d-card bg-surface-container border border-white/5 rounded p-8 md:p-12 h-full flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-16">
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 rounded">
                  <span className="material-symbols-outlined text-primary text-3xl" data-icon="sensors">sensors</span>
                </div>
                <div className="text-right">
                  <p className="font-label text-[9px] text-on-surface-variant uppercase tracking-[0.2em] mb-1">NETWORK STATUS</p>
                  <p className="font-label text-primary text-xs font-bold flex items-center justify-end gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    REGISTRATION ACTIVE
                  </p>
                </div>
              </div>
              <h3 className="font-headline text-3xl font-bold mb-4 tracking-tight">OFFICIAL REGISTRATION</h3>
              <p className="text-on-surface-variant mb-12 font-body max-w-md">Secure your position in the DUCS Robo Club arena. Use the link below to access the Unstop competition dashboard.</p>
            </div>
            
            <div className="relative z-10">
              <button className="mechanical-button-3d">
                <span className="button-edge"></span>
                <span className="button-front flex items-center justify-between">
                  <span className="font-headline tracking-tighter uppercase">ACCESS UNSTOP PORTAL</span>
                  <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
                </span>
              </button>
            </div>
          </div>

          {/* Visual Asset / Stats Card (5 columns) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <div className="bg-surface-container-high rounded p-8 relative overflow-hidden border border-white/10 flex-grow min-h-[240px]">
              <img alt="Tech Background" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJADVi7WvXRNmoPXN_b58vOq_FE2BhZfTgTHylL4otKa8iKiCX3vCEELdSTt4689K36yqrhLBawp7DrNOAYiOHfcSR2v3YXhJUIZCdkbAiyO3rJk4X5rGXxDJEtWUtU3A0LEpogetJIoQ8Q0hPqwRCiEuEpopPxcGFTcxygVuTx1p_s_JYtc8Tl4VQIKkxyTKYscZK7EsgpxGgyk5M3G06NYqjdl7NAow-O4LtiH2P2fpB-03FrbkBqQexS6ODRBRIpKgjB3bLaoIR"/>
              <div className="relative h-full flex flex-col justify-end">
                <p className="font-label text-[10px] text-primary uppercase tracking-[0.3em] mb-2">TELEMETRY_CORE</p>
                <h4 className="font-headline text-2xl font-bold text-on-surface uppercase tracking-tight">THE ALIVE ROBOTS</h4>
                <div className="mt-4 flex gap-3">
                  <div className="bg-primary/10 text-primary px-3 py-1 border border-primary/20 text-[10px] font-label font-bold uppercase">CORE_READY</div>
                  <div className="bg-white/5 text-on-surface-variant px-3 py-1 border border-white/10 text-[10px] font-label font-bold uppercase">VER_2.0.45</div>
                </div>
              </div>
            </div>

            {/* Small Action Item */}
            <div className="bg-[#FF3E3E]/10 border border-[#FF3E3E]/30 p-6 rounded flex items-center justify-between group">
              <div>
                <p className="font-label text-[9px] font-bold uppercase tracking-widest text-[#FF3E3E] opacity-70">CRITICAL ALERT</p>
                <p className="font-headline font-bold text-[#FF3E3E]">LIMITED SLOTS REMAINING</p>
              </div>
              <span className="material-symbols-outlined text-[#FF3E3E] text-3xl animate-pulse" data-icon="warning" data-weight="fill">warning</span>
            </div>
          </div>

          {/* Contact Section Title */}
          <div className="md:col-span-12 mt-12 mb-4">
            <div className="flex items-center gap-4">
              <h3 className="font-headline text-xl font-bold uppercase tracking-widest text-on-surface">COORDINATORS</h3>
              <div className="h-[1px] flex-grow bg-white/10"></div>
            </div>
          </div>

          {/* Krishna Kumar Card */}
          <div className="md:col-span-6 digital-id rounded-r p-6 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-20">
              <span className="material-symbols-outlined text-primary" data-icon="verified_user">verified_user</span>
            </div>
            <div className="flex items-center gap-6 relative z-10">
              <div className="w-20 h-20 rounded bg-surface-container-high border border-white/10 overflow-hidden shrink-0">
                <img alt="Krishna Kumar" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkbClulVfWHCNMisu1aGAjVAP4cF0oXp0kdZ4D-wXzO3lbdYNtpdS5D-Ul_b8OIhZcaLtvcMYeLv42TfczQ1tLysz8YyXpWb0Ua8ssKjqOqxZDlK6l75vqAN8Q6zQtRCN9TCbIRtMaoR3FTjeb7nbw19FvyGhLvLfAUkWbvNo0Q5Ij_CdsToCz9VAzeOsA0y9BV1X_xvTZqWeJb73J_Cb2NQEkpLBDFLBmnASb4B7PRSbPM_h8aQV0aypzWwKNfIqrAwJJCu_ZcpzV"/>
              </div>
              <div className="flex-grow">
                <p className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">Krishna Kumar</p>
                <p className="font-label text-secondary text-[10px] font-bold uppercase tracking-widest mb-3">Event Lead // Systems</p>
                <div className="flex items-center gap-2 text-on-surface-variant bg-white/5 w-fit px-3 py-1 rounded">
                  <span className="material-symbols-outlined text-xs" data-icon="call">call</span>
                  <span className="font-headline text-sm tracking-widest">+91 7294086644</span>
                </div>
              </div>
            </div>
          </div>

          {/* Prachi Bhatia Card */}
          <div className="md:col-span-6 digital-id rounded-r p-6 relative group overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-20">
              <span className="material-symbols-outlined text-primary" data-icon="verified_user">verified_user</span>
            </div>
            <div className="flex items-center gap-6 relative z-10">
              <div className="w-20 h-20 rounded bg-surface-container-high border border-white/10 overflow-hidden shrink-0">
                <img alt="Prachi Bhatia" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBulJ0wReiu3qw4jULTNZsG8fvVN7eX0DDxl9ikYraiZhG1x2vKJm8MNoqIrja8L4LVV_GS6u8Ean-fs89FMHeTkCuHpXAvyIF0aerOIzzA7EOiSkIQIO5O-B_ZqZD7mlE6R1wJu68qwT4Ld3BAF2n2dx2q1jKwjHpQ6OCAEbxnmH3qJlcwKBJvvjDGuvGArc4C8lWhnRdWMN791SH5BGLYGClKce1_-cw5Pab-eHteVjgXjDcorlySFMFJLa2YbSUmVcMopxHYkx9Y"/>
              </div>
              <div className="flex-grow">
                <p className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">Prachi Bhatia</p>
                <p className="font-label text-secondary text-[10px] font-bold uppercase tracking-widest mb-3">Event Head</p>
                <div className="flex items-center gap-2 text-on-surface-variant bg-white/5 w-fit px-3 py-1 rounded">
                  <span className="material-symbols-outlined text-xs" data-icon="call">call</span>
                  <span className="font-headline text-sm tracking-widest">+91 7508666201</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </main>
  );
}
