import gameStatsImg from '../../../public/gameStats.png';
import Image from 'next/image';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

export default function chessPage() {
  return (
    <div className="w-full">
      <div className="relative h-[30vh] w-screen lg:h-[40vh]">
        <div className="absolute left-0 top-0 z-10 h-[30vh] w-full bg-black/30 lg:h-[40vh]" />
        <Image
          className="z-1 absolute"
          layout="fill"
          objectFit="cover"
          src={gameStatsImg}
          alt="/"
        />
        <div className="absolute left-[50%] right-[50%] top-[70%] z-10 w-full max-w-[1240px] translate-x-[-50%] translate-y-[-50%] p-2 text-white">
          <h1 className="py-2">Game Stats</h1>
          <h3>React / Tailwind CSS</h3>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1240px] gap-8 p-2 pt-8 md:grid-cols-5">
        <div className="col-span-4">
          <p className="text-xl">Project</p>
          <h2>Overview</h2>
          <p className="py-4 text-lg">
            This dynamic web application, meticulously crafted with React,
            Tailwind CSS, and Firebase, empowers users to effortlessly create
            expressive gaming profiles showcasing their rankings across a
            variety of games. Dive into a world where enthusiasts can seamlessly
            explore and connect with fellow gamers by searching and viewing
            their captivating profiles. Take a moment to experience it yourself
            - simply click on the 'Open App' button below!
          </p>
          <a
            href="https://game-stats-website.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mr-8 mt-4 px-8 py-2">Open app</button>
          </a>
          <a
            href="https://github.com/alai031/game-stats"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mr-8 mt-4 px-8 py-2">Code</button>
          </a>
        </div>
        <div className="col-span-4 rounded-xl p-4 shadow-xl shadow-gray-400 md:col-span-1">
          <div className="p-2">
            <p className="pb-2 text-center text-lg font-bold">Technologies</p>
            <div className="grid grid-cols-2 text-lg md:grid-cols-1">
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> JavaScript
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Tailwind CSS
              </p>
              <p className="flex items-center py-2 text-gray-600">
                <RiRadioButtonFill className="pr-1" /> Firebase
              </p>
            </div>
          </div>
        </div>
        <Link href="../#projects">
          <p className="cursor-pointer pb-6 pt-8 text-lg underline md:pb-0">
            Back
          </p>
        </Link>
      </div>
    </div>
  );
}
