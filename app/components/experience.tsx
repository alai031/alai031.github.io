export default function ExperiencePage() {
  return (
    <div id="experience" className="w-full py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <p className="section-eyebrow">03 / Experience</p>
        <h2 className="mt-4 text-slate-100">Where I&apos;ve Worked</h2>

        <div className="mt-12 border-l border-white/10 pl-8">
          <div className="relative">
            <div className="absolute -left-[41px] top-2 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20" />
            <div className="surface p-8">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                <div>
                  <h3 className="text-2xl text-slate-100">Software Engineer</h3>
                  <p className="mt-1 text-lg text-cyan-400">
                    Mission Support and Test Services, LLC
                  </p>
                </div>
                <div className="font-mono text-sm text-slate-500 md:text-right">
                  <p>June 2024 &ndash; Present</p>
                  <p>Las Vegas, NV</p>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="text-base font-semibold text-slate-200">
                    Desktop App UI Modernization
                  </p>
                  <p className="mt-2 text-slate-400">
                    Led the modernization of a desktop application used by
                    scientists. Consolidated multi-step workflows into a unified
                    interface and partnered with users through iterative design
                    reviews to improve efficiency and usability.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 font-mono text-xs text-slate-500">
                    <span>C#</span>
                    <span className="text-cyan-400/60">&middot;</span>
                    <span>XAML</span>
                    <span className="text-cyan-400/60">&middot;</span>
                    <span>WPF</span>
                    <span className="text-cyan-400/60">&middot;</span>
                    <span>MVVM</span>
                  </div>
                </div>

                <div>
                  <p className="text-base font-semibold text-slate-200">
                    Web App Redesign
                  </p>
                  <p className="mt-2 text-slate-400">
                    Collaborated on rebuilding a web application used to collect
                    data. Migrated and refactored UI into modular Angular
                    components and helped integrate an interactive map
                    interface.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2 font-mono text-xs text-slate-500">
                    <span>Angular</span>
                    <span className="text-cyan-400/60">&middot;</span>
                    <span>TypeScript</span>
                    <span className="text-cyan-400/60">&middot;</span>
                    <span>Kendo UI</span>
                    <span className="text-cyan-400/60">&middot;</span>
                    <span>OpenLayers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
