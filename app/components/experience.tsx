export default function ExperiencePage() {
  return (
    <div id="experience" className="w-full p-2 py-28 lg:min-h-screen">
      <div className="mx-auto flex max-w-[1240px] flex-col">
        <p className="text-xl uppercase tracking-widest text-[#5651e5]">
          Experience
        </p>
        <h2 className="py-4">Where I&apos;ve Worked</h2>

        <div className="relative mt-6 border-l-2 border-[#5651e5] pl-8">
          <div className="absolute left-[-11px] top-2 h-5 w-5 rounded-full bg-[#5651e5] shadow-md shadow-gray-400" />

          <div className="rounded-xl bg-white p-6 shadow-xl shadow-gray-400">
            <div className="flex flex-col justify-between gap-2 md:flex-row md:items-baseline">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Software Engineer
                </h3>
                <p className="text-lg text-[#5651e5]">
                  Mission Support and Test Services
                </p>
              </div>
              <div className="text-sm text-gray-600 md:text-right">
                <p>June 2024 &ndash; Present</p>
                <p>Las Vegas, NV</p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-lg font-semibold text-gray-700">
                Radiation Analysis UI Modernization
                <span className="pl-2 text-sm font-normal text-gray-500">
                  C# &middot; XAML &middot; WPF &middot; MVVM
                </span>
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex">
                  <span className="pr-2 text-[#5651e5]">&#9679;</span>
                  <span>
                    Led modernization of a radiation analysis desktop
                    application used by{' '}
                    <span className="font-semibold text-gray-800">
                      20+ domain scientists
                    </span>
                    , improving workflow efficiency and usability
                  </span>
                </li>
                <li className="flex">
                  <span className="pr-2 text-[#5651e5]">&#9679;</span>
                  <span>
                    Consolidated default and advanced parameter workflows into a
                    unified interface, saving{' '}
                    <span className="font-semibold text-gray-800">
                      15 seconds per calculation
                    </span>{' '}
                    (
                    <span className="font-semibold text-gray-800">
                      5 hours saved weekly
                    </span>{' '}
                    across the team)
                  </span>
                </li>
                <li className="flex">
                  <span className="pr-2 text-[#5651e5]">&#9679;</span>
                  <span>
                    Achieved{' '}
                    <span className="font-semibold text-gray-800">
                      90% positive satisfaction feedback
                    </span>{' '}
                    in internal user survey following UI redesign
                  </span>
                </li>
                <li className="flex">
                  <span className="pr-2 text-[#5651e5]">&#9679;</span>
                  <span>
                    Designed and implemented UI logic integrated with a legacy
                    C# backend, ensuring domain-critical calculation accuracy
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6">
              <p className="text-lg font-semibold text-gray-700">
                Geospatial Data Collection App
                <span className="pl-2 text-sm font-normal text-gray-500">
                  Angular &middot; Kendo UI &middot; OpenLayers
                </span>
              </p>
              <ul className="mt-3 space-y-2 text-gray-600">
                <li className="flex">
                  <span className="pr-2 text-[#5651e5]">&#9679;</span>
                  <span>
                    Collaborated in a 3-person team to rebuild a legacy
                    geospatial data collection web application in Angular
                  </span>
                </li>
                <li className="flex">
                  <span className="pr-2 text-[#5651e5]">&#9679;</span>
                  <span>
                    Migrated and refactored{' '}
                    <span className="font-semibold text-gray-800">
                      10 legacy UI components
                    </span>{' '}
                    into modular Angular components using Kendo UI
                  </span>
                </li>
                <li className="flex">
                  <span className="pr-2 text-[#5651e5]">&#9679;</span>
                  <span>
                    Integrated OpenLayers to enable interactive geolocation
                    workflows and dynamic measurement visualization
                  </span>
                </li>
                <li className="flex">
                  <span className="pr-2 text-[#5651e5]">&#9679;</span>
                  <span>
                    Replaced full-screen feature editing workflow with a
                    contextual modal interface, reducing feature update time by{' '}
                    <span className="font-semibold text-gray-800">50%</span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
