export default function EducationPage() {
  return (
    <div id="education" className="w-full py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <p className="section-eyebrow">04 / Education</p>
        <h2 className="mt-4 text-slate-100">Where I Studied</h2>

        <div className="mt-12 border-l border-white/10 pl-8">
          <div className="relative">
            <div className="absolute -left-[41px] top-2 h-3 w-3 rounded-full bg-cyan-400 ring-4 ring-cyan-400/20" />
            <div className="surface p-8">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
                <div>
                  <h3 className="text-2xl text-slate-100">
                    University of California, Riverside
                  </h3>
                  <p className="mt-1 text-lg text-cyan-400">
                    B.S. Computer Science
                  </p>
                </div>
                <div className="font-mono text-sm text-slate-500 md:text-right">
                  <p>Fall 2019 &ndash; Spring 2023</p>
                  <p>Riverside, CA</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/10 bg-slate-800/50 px-3 py-1 font-mono text-xs text-slate-300">
                  GPA 3.93
                </span>
                <span className="rounded-full border border-cyan-400/40 bg-cyan-400/5 px-3 py-1 font-mono text-xs text-cyan-300">
                  magna cum laude
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
