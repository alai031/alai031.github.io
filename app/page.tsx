import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

export default function Page() {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET'S CREATE SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I'm <span className='text-[#5651e5]'> Auberon</span>
          </h1>
          <h1 className='py-2 text-gray-700'>
            An Aspiring Software Developer
          </h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I obtained my Bachelor's Degree in Computer Science from the University of California Riverside (UCR) in June 2023.
            Currently, I am searching for software development jobs that will enhance my skill sets.
          </p>
          <div className='flex items-center justify-between max-w-[170px] m-auto py-4'>
            <a 
              href="https://www.linkedin.com/in/auberon-lai/" 
              target="_blank"
              rel="noopener noreferrer" 
              className='text-lg rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/alai031" 
              target="_blank"
              rel="noopener noreferrer" 
              className='text-lg rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
