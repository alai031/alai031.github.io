import Link from 'next/link';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Home() {
  return (
    <div
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(34,211,238,0.08),transparent_60%)]"
      />
      <div className="relative mx-auto w-full max-w-[1240px] px-6">
        <p className="section-eyebrow">01 / Introduction</p>
        <h1 className="mt-4 text-slate-100">
          Hi, I&apos;m <span className="text-cyan-400">Auberon</span>
        </h1>
        <h2 className="mt-3 text-3xl text-slate-300 sm:text-4xl">
          A Software Engineer
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-slate-400">
          I&apos;m a software engineer at Mission Support and Test Services.
          Day-to-day I focus on building out and implementing new features and
          capabilities for the applications I work on.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-slate-500">
          <span>Software Engineer @ MSTS</span>
          <span className="text-cyan-400">/</span>
          <span>B.S. CS, UC Riverside</span>
          <span className="text-cyan-400">/</span>
          <span>Las Vegas, NV</span>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link href="#projects">
            <button>View My Work</button>
          </Link>
          <Link href="#contact">
            <button className="border-slate-600 text-slate-300 hover:border-slate-400 hover:bg-slate-800/50 hover:text-slate-100">
              Get In Touch
            </button>
          </Link>
        </div>

        <div className="mt-12 flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/auberon-lai/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-cyan-400/60 hover:text-cyan-400"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/alai031"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-cyan-400/60 hover:text-cyan-400"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}
