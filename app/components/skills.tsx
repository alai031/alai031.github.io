import Image from 'next/image';

const skillsWithIcons = [
  { name: 'C#', icon: '/csharp.png' },
  { name: 'TypeScript', icon: '/typescript.png' },
  { name: 'JavaScript', icon: '/javascript.png' },
  { name: 'Angular', icon: '/angular.png' },
  { name: 'React', icon: '/react.png' },
  { name: 'HTML', icon: '/html.png' },
  { name: 'CSS', icon: '/css.png' },
  { name: 'Tailwind CSS', icon: '/tailwind.png' },
  { name: '.NET', icon: '/dotnet.svg' },
  { name: 'ASP.NET Core', icon: '/dotnetcore.svg' },
  { name: 'Entity Framework Core', icon: '/efcore.svg' },
  { name: 'PostgreSQL', icon: '/postgresql.svg' },
];

const additionalSkills = [
  'SQL',
  'NextJS',
  'WPF',
  'XAML',
  'MVVM',
  'Kendo UI',
  'OpenLayers',
  'Node.js',
  'Visual Studio',
  'Postman',
  'Git',
  'GitHub',
  'Python',
  'Firebase',
];

export default function SkillsPage() {
  return (
    <div id="skills" className="w-full py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <p className="section-eyebrow">05 / Skills</p>
        <h2 className="mt-4 text-slate-100">What I Can Do</h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillsWithIcons.map((skill) => (
            <div
              key={skill.name}
              className="surface flex items-center gap-4 p-5 transition duration-200 hover:border-cyan-400/40 hover:bg-slate-900"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center">
                <Image
                  src={skill.icon}
                  width={48}
                  height={48}
                  alt={skill.name}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <h3 className="text-base font-semibold text-slate-200">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="section-eyebrow pb-5">Additional Technologies</p>
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-slate-900/60 px-4 py-2 font-mono text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
