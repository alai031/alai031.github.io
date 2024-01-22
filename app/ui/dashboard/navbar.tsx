'use client'

import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation'

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const pathname = usePathname();

  useEffect(() => {
    if (
      pathname === '/projects/chess' || 
      pathname === '/projects/chatboxd' ||
      pathname === '/projects/hangman' ||
      pathname === '/projects/tictactoe'
    ) {
      setNavBg('transparent')
      setLinkColor('#ecf0f3')
    } else{
      setNavBg('#ecf0f3')
      setLinkColor('#1f2937')
    }
  }, [pathname])

  const handleNav = (event: React.MouseEvent<HTMLDivElement>) => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90){
        setShadow(true)
        setNavBg('#ecf0f3')
        setLinkColor('#1f2937')
      } else{
        setShadow(false)
        setNavBg('transparent')
        setLinkColor('#ecf0f3')
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, [])

  return (
    <div 
      style={{backgroundColor: `${navBg}`}}
      className={
        shadow 
          ? 'fixed w-full h-20 shadow-xl z-[100]' 
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/#home'>
          <Image
            src='/initials.png'
            alt='navLogo image'
            width='125'
            height='50'
          />
        </Link>
        <div>
          <ul style={{color: `${linkColor}`}} className='hidden md:flex'>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#home'>Home</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#about'>About</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#skills'>Skills</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b'>
              <Link href='/#projects'>Projects</Link>
            </li>
            <li className='ml-10 text-sm uppercase hover:border-b pr-3'>
              <Link href='/#contact'>Contact</Link>
            </li>
          </ul>
          <div onClick={handleNav} className='md:hidden'>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

    <div className={clsx({
          'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70': nav === true,
          '': nav === false,
          },)
          }>
      <div className={clsx({
            'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500': nav === true,
            'fixed left-[-100%] top-0 p-10 ease-in duration-500': nav === false,
            },)
          }>
        <div>
          <div className='flex w-full items-center justify-between'>
            <Link href='/#home'>
              <Image
                src='/initials.png' 
                width='87' 
                height='35' 
                alt='/' 
              />
            </Link>
            <div
              onClick={handleNav} 
              className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
            >
              <AiOutlineClose />
            </div>
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className='w-[85%] md:w-[90%] py-4'>Let's build something legendary together</p>
          </div>
        </div>
        <div className='py-4 flex flex-col'>
          <ul className='uppercase'>
            <Link href='/#home'>
              <li onClick={()=> setNav(false)} className='py-4 text-sm'>Home</li>
            </Link>
            <Link href='#about'>
              <li onClick={()=> setNav(false)} className='py-4 text-sm'>About</li>
            </Link>
            <Link href='#skills'>
              <li onClick={()=> setNav(false)} className='py-4 text-sm'>Skills</li>
            </Link>
            <Link href='#projects'>
              <li onClick={()=> setNav(false)} className='py-4 text-sm'>Projects</li>
            </Link>
            <Link href='#contact'>
              <li onClick={()=> setNav(false)} className='py-4 text-sm'>Contact</li>
            </Link>
          </ul>
          <div className='pt-6'>
            <p className='uppercase tracking-widest text-[#5651e5]'>Let's Connect</p>
            <div className='flex items-center justify-between my-4 max-w-[90px]'>
              <a 
                href="https://www.linkedin.com/in/auberon-lai/" 
                target="_blank"
                rel="noopener noreferrer" 
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/alai031" 
                target="_blank"
                rel="noopener noreferrer" 
                className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>    
      </div>
    </div>

    </div>
  );
}
