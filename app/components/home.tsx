import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Home() {
  return (
    <div id="home" className="h-screen w-full text-center">
      <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-center p-2">
        <div>
          <p className="text-sm uppercase tracking-widest text-gray-600">
            LET'S CREATE SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#5651e5]"> Auberon</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Software Engineer</h1>
          <p className="m-auto max-w-[70%] py-4 text-gray-600">
            I am currently a software engineer at Mission Support and Test
            Services, LLC. I obtained my Bachelor's Degree in Computer Science
            from the University of California Riverside (UCR) in June 2023.
          </p>
          <div className="m-auto flex max-w-[170px] items-center justify-between py-4">
            <a
              href="https://www.linkedin.com/in/auberon-lai/"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full p-6 text-lg shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/alai031"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer rounded-full p-6 text-lg shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
