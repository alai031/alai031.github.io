import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div id="about" className="w-full py-32">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 gap-16 px-6 md:grid-cols-5 md:gap-20">
        <div className="md:col-span-3">
          <p className="section-eyebrow">02 / About</p>
          <h2 className="mt-4 text-slate-100">Who I Am</h2>
          <div className="mt-6 space-y-5 text-lg text-slate-400">
            <p>
              I&apos;m a software engineer at Mission Support and Test Services.
              My day-to-day centers on adding new features and capabilities to
              two desktop applications written in C# and XAML.
            </p>
            <p>
              I take pride in collaborating with domain experts and translating
              their workflows into clean interfaces. I graduated from the
              University of California, Riverside with magna cum laude honors in
              June 2023, earning a Bachelor of Science degree in Computer
              Science.
            </p>
            <p>
              Outside of engineering, I enjoy playing pickleball and video
              games, and I&apos;m currently in a phase of watching K-dramas.
            </p>
          </div>
          <Link
            href="#experience"
            className="mt-8 inline-block font-mono text-sm text-cyan-400 transition hover:text-cyan-300"
          >
            See what I&apos;ve been working on &rarr;
          </Link>
        </div>
        <div className="md:col-span-2">
          <div className="mx-auto max-w-[320px] overflow-hidden rounded-xl border border-white/10 bg-slate-900 transition-transform duration-300 ease-in hover:scale-[1.025]">
            <Image
              className="rounded-xl"
              src="/aboutProfileImage.jpg"
              alt="Portrait of Auberon Lai"
              width={350}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
