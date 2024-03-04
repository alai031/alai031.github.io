import Image from 'next/image';
import gameStatsImg from '../../public/gameStats.png';
import chessImg from '../../public/chess.png';
import chatboxdImg from '../../public/chatboxd.png';
import hangmanImg from '../../public/hangman.png';
import tictactoeImg from '../../public/tictactoe.png';
import Link from 'next/link';

export default function ProjectPage() {
  return (
    <div id="projects" className="w-full">
      <div className="mx-auto max-w-[1240px] px-2 py-28">
        <p className="text-xl uppercase tracking-widest text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="group relative flex h-auto w-full items-center justify-center rounded-xl from-[#5651e5] to-[#709dff] p-4 shadow-xl shadow-gray-400 hover:bg-gradient-to-r">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={gameStatsImg}
              alt="/"
            />
            <div className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] group-hover:block">
              <h3 className="text-center text-2xl tracking-wider text-white">
                Game Stats
              </h3>
              <p className="pb-4 pt-2 text-center text-white">React JS</p>
              <Link href="/projects/gamestats">
                <p className="cursor-pointer rounded-lg bg-white px-3 py-3 text-center text-lg font-bold text-gray-700">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="group relative flex h-auto w-full items-center justify-center rounded-xl from-[#5651e5] to-[#709dff] p-4 shadow-xl shadow-gray-400 hover:bg-gradient-to-r">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={chessImg}
              alt="/"
            />
            <div className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] group-hover:block">
              <h3 className="text-center text-2xl tracking-wider text-white">
                Chess
              </h3>
              <p className="pb-4 pt-2 text-center text-white">React JS</p>
              <Link href="/projects/chess">
                <p className="cursor-pointer rounded-lg bg-white px-3 py-3 text-center text-lg font-bold text-gray-700">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="group relative flex h-auto w-full items-center justify-center rounded-xl from-[#5651e5] to-[#709dff] p-4 shadow-xl shadow-gray-400 hover:bg-gradient-to-r">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={chatboxdImg}
              alt="/"
            />
            <div className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] group-hover:block">
              <h3 className="text-center text-2xl tracking-wider text-white">
                Chatboxd
              </h3>
              <p className="pb-4 pt-2 text-center text-white">React JS</p>
              <Link href="/projects/chatboxd">
                <p className="cursor-pointer rounded-lg bg-white py-3 text-center text-lg font-bold text-gray-700">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="group relative flex h-auto w-full items-center justify-center rounded-xl from-[#5651e5] to-[#709dff] p-4 shadow-xl shadow-gray-400 hover:bg-gradient-to-r">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={hangmanImg}
              alt="/"
            />
            <div className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] group-hover:block">
              <h3 className="text-center text-2xl tracking-wider text-white">
                Hangman
              </h3>
              <p className="pb-4 pt-2 text-center text-white">React JS</p>
              <Link href="/projects/hangman">
                <p className="cursor-pointer rounded-lg bg-white py-3 text-center text-lg font-bold text-gray-700">
                  More Info
                </p>
              </Link>
            </div>
          </div>
          <div className="group relative flex h-auto w-full items-center justify-center rounded-xl from-[#5651e5] to-[#709dff] p-4 shadow-xl shadow-gray-400 hover:bg-gradient-to-r">
            <Image
              className="rounded-xl group-hover:opacity-10"
              src={tictactoeImg}
              alt="/"
            />
            <div className="absolute left-[50%] top-[50%] hidden translate-x-[-50%] translate-y-[-50%] group-hover:block">
              <h3 className="text-center text-2xl tracking-wider text-white">
                Tic Tac Toe
              </h3>
              <p className="pb-4 pt-2 text-center text-white">React JS</p>
              <Link href="/projects/tictactoe">
                <p className="cursor-pointer rounded-lg bg-white py-3 text-center text-lg font-bold text-gray-700">
                  More Info
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
