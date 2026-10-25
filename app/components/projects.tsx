import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import expenseTrackerImg from '../../public/expenseTracker.png';
import chatboxdImg from '../../public/chatboxd.png';
import gameStatsImg from '../../public/gameStats.png';
import chessImg from '../../public/chess.png';

const otherProjects = [
  {
    title: 'Game Stats',
    image: gameStatsImg,
    description:
      'Gaming profile platform that lets users showcase and compare rankings across different games.',
    tech: ['React', 'Tailwind', 'Firebase'],
    detailHref: '/projects/gamestats',
    codeHref: 'https://github.com/alai031/game-stats',
    liveHref: 'https://game-stats-website.web.app/',
    liveLabel: 'Open',
  },
  {
    title: 'Chatboxd',
    image: chatboxdImg,
    description:
      'Real-time chat application with authentication, searchable rooms, and message reactions.',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO'],
    detailHref: '/projects/chatboxd',
    codeHref: 'https://github.com/UCR-CS110-S23/project-chatboxd',
    liveHref: 'https://youtu.be/f1Pumm8vHKU',
    liveLabel: 'Demo',
  },
  {
    title: 'Chess',
    image: chessImg,
    description:
      'Classic chess game with full rule validation and an optional AI opponent.',
    tech: ['React', 'JavaScript', 'HTML', 'CSS'],
    detailHref: '/projects/chess',
    codeHref: 'https://github.com/alai031/Chess',
    liveHref: 'https://chess-nine-lake.vercel.app/',
    liveLabel: 'Open',
  },
];

export default function ProjectPage() {
  return (
    <div id="projects" className="w-full py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <p className="section-eyebrow">06 / Projects</p>
        <h2 className="mt-4 text-slate-100">What I&apos;ve Built</h2>

        {/* Featured project */}
        <div className="surface mt-12 overflow-hidden transition hover:border-cyan-400/40">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="relative h-56 md:col-span-2 md:h-auto">
              <Image
                src={expenseTrackerImg}
                alt="Expense Tracker"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:col-span-3 md:p-10">
              <p className="font-mono text-xs uppercase tracking-widest text-cyan-400">
                Featured Project
              </p>
              <h3 className="mt-2 text-2xl text-slate-100">Expense Tracker</h3>
              <p className="mt-4 text-slate-400">
                A full-stack expense tracking application for creating, editing,
                and filtering expenses, organizing them by category, and
                generating spending summaries.
              </p>
              <p className="mt-3 text-slate-400">
                Designed a relational database and RESTful API with data
                validation, then integrated a responsive Angular frontend.
                Deployed the entire stack to the cloud with environment-based
                configuration.
              </p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-slate-500">
                <span>Angular</span>
                <span>TypeScript</span>
                <span>ASP.NET Core</span>
                <span>Entity Framework Core</span>
                <span>PostgreSQL</span>
                <span>C#</span>
              </div>
              <div className="mt-6 flex items-center gap-4">
                <Link href="/projects/expensetracker">
                  <button>Read More</button>
                </Link>
                <a
                  href="https://expense-tracker-psi-ten-54.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Expense Tracker app"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  <HiOutlineExternalLink size={22} />
                </a>
                <a
                  href="https://github.com/alai031/expense-tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub repository"
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  <FaGithub size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other projects grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="surface group flex flex-col overflow-hidden transition hover:border-cyan-400/40"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/40" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl text-slate-100">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm text-slate-400">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-slate-500">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <Link
                    href={project.detailHref}
                    className="font-mono text-xs uppercase tracking-wider text-cyan-400 transition hover:text-cyan-300"
                  >
                    Read More &rarr;
                  </Link>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.liveHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} ${project.liveLabel}`}
                      className="text-slate-400 transition hover:text-cyan-400"
                    >
                      <HiOutlineExternalLink size={18} />
                    </a>
                    <a
                      href={project.codeHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} source code`}
                      className="text-slate-400 transition hover:text-cyan-400"
                    >
                      <FaGithub size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
