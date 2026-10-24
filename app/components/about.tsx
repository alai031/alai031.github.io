import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div id="about" className="flex w-full items-center p-2 py-28 md:h-screen">
      <div className="m-auto max-w-[1240px] grid-cols-3 gap-8 md:grid">
        <div className="col-span-2">
          <p className="text-xl uppercase tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I&apos;m a software engineer at Mission Support and Test Services,
            LLC, where I build modern UIs for scientific and geospatial
            applications. My day-to-day spans desktop development in C#, WPF,
            and XAML as well as full-stack web development in Angular and
            TypeScript. I take pride in collaborating with domain experts,
            translating their workflows into clean interfaces, and measuring the
            impact of what I ship.
          </p>
          <p className="py-2 text-gray-600">
            I graduated from the University of California, Riverside in June
            2023 with a B.S. in Computer Science (magna cum laude, GPA 3.93). I
            care about writing maintainable code, learning new stacks quickly,
            and building things that make other people&apos;s work easier.
            Outside of engineering, I enjoy tennis, pickleball, reading, and
            video games with friends.
          </p>
          <Link
            href="#experience"
            className="cursor-pointer py-2 text-gray-600 underline"
          >
            See what I&apos;ve been working on.
          </Link>
        </div>
        <div className="m-auto flex h-auto w-[50%] items-center justify-center rounded-xl p-4 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105 md:w-full">
          <Image
            className="rounded-xl"
            src="/aboutProfileImage.jpg"
            alt="about image"
            width="350"
            height="300"
          />
        </div>
      </div>
    </div>
  );
}
