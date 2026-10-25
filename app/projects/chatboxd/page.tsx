import chatboxdImg from '/public/chatboxd.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';

const tech = [
  'React',
  'JavaScript',
  'Node.js',
  'Express.js',
  'MongoDB',
  'Socket.IO',
];

export default function ChatboxdPage() {
  return (
    <div className="w-full pt-16">
      <div className="relative h-[40vh] w-full">
        <Image
          src={chatboxdImg}
          alt="Chatboxd"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/60 to-[#020617]" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-[1240px] px-6 pb-10">
            <p className="font-mono text-sm uppercase tracking-widest text-cyan-400">
              Project
            </p>
            <h1 className="mt-2 text-slate-100">Chatboxd</h1>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1240px] gap-10 px-6 py-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <h2 className="text-2xl text-slate-100">Overview</h2>
          <div className="mt-4 space-y-4 text-lg text-slate-400">
            <p>
              A real-time chat application. The front end was built with React
              and JavaScript; the back end runs on Node.js and Express.js with
              MongoDB for persistence.
            </p>
            <p>
              Users can sign up, log in, create or join chatrooms, and send
              messages to everyone in the room. They can also edit, search, and
              react to messages.
            </p>
          </div>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://youtu.be/f1Pumm8vHKU"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2">
                <HiOutlineExternalLink size={18} /> Video Demo
              </button>
            </a>
            <a
              href="https://github.com/UCR-CS110-S23/project-chatboxd"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 border-slate-600 text-slate-300 hover:border-slate-400 hover:text-slate-100">
                <FaGithub size={18} /> Code
              </button>
            </a>
          </div>
          <Link
            href="/#projects"
            className="mt-10 inline-block font-mono text-sm text-cyan-400 transition hover:text-cyan-300"
          >
            &larr; Back to projects
          </Link>
        </div>
        <div className="md:col-span-2">
          <div className="surface p-6">
            <p className="section-eyebrow">Technologies</p>
            <ul className="mt-4 space-y-2">
              {tech.map((t) => (
                <li
                  key={t}
                  className="flex items-center font-mono text-sm text-slate-300"
                >
                  <span className="mr-3 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
