import Image from 'next/image';

const skillsWithIcons = [
  { name: 'C#', icon: '/csharp.png' },
  { name: 'TypeScript', icon: '/typescript.png' },
  { name: 'JavaScript', icon: '/javascript.png' },
  { name: 'Python', icon: '/python.png' },
  { name: 'Angular', icon: '/angular.png' },
  { name: 'React', icon: '/react.png' },
  { name: 'NextJS', icon: '/nextjs.png' },
  { name: 'HTML', icon: '/html.png' },
  { name: 'CSS', icon: '/css.png' },
  { name: 'Tailwind CSS', icon: '/tailwind.png' },
  { name: 'Firebase', icon: '/firebase.png' },
  { name: 'Github', icon: '/github.png' },
];

const additionalSkills = [
  'SQL',
  'PostgreSQL',
  '.NET',
  'ASP.NET Core',
  'Entity Framework Core',
  'WPF',
  'XAML',
  'MVVM',
  'Kendo UI',
  'OpenLayers',
  'Node.js',
  'Visual Studio',
  'Postman',
  'Git',
];

export default function SkillsPage() {
  return (
    <div id="skills" className="w-full p-2 py-28 lg:min-h-screen">
      <div className="mx-auto flex h-full max-w-[1240px] flex-col justify-center">
        <p className="text-xl uppercase tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skillsWithIcons.map((skill) => (
            <div
              key={skill.name}
              className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105"
            >
              <div className="grid grid-cols-2 items-center justify-center gap-4">
                <div className="m-auto">
                  <Image
                    src={skill.icon}
                    width="64"
                    height="64"
                    alt={skill.name}
                  />
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="pb-4 text-lg uppercase tracking-widest text-[#5651e5]">
            Additional Technologies
          </p>
          <div className="flex flex-wrap gap-3">
            {additionalSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#5651e5] bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-md duration-300 ease-in hover:scale-105"
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
