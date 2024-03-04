import Image from 'next/image';

export default function SkillsPage() {
  return (
    <div id="skills" className="w-full p-2 py-28 lg:h-screen">
      <div className="justify-cetner mx-auto flex h-full max-w-[1240px] flex-col">
        <p className="text-xl uppercase tracking-widest text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src="/c++.png" width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>C++</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src="/javascript.png" width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src="/react.png" width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src="/nextjs.png" width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src="/tailwind.png" width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src="/css.png" width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src="/html.png" width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src="/github.png" width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src="/firebase.png" width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src="/mongo.png" width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src="/typescript.png" width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TypeScript</h3>
              </div>
            </div>
          </div>
          <div className="rounded-xl p-6 shadow-xl duration-300 ease-in hover:scale-105">
            <div className="grid grid-cols-2 items-center justify-center gap-4">
              <div className="m-auto">
                <Image src="/python.png" width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
