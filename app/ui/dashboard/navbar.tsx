'use client';

import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

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
      pathname === '/projects/tictactoe' ||
      pathname === '/projects/gamestats'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [pathname]);

  const handleNav = (event: React.MouseEvent<HTMLDivElement>) => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
        setNavBg('#ecf0f3');
        setLinkColor('#1f2937');
      } else {
        setShadow(false);
        if (
          pathname === '/projects/chess' ||
          pathname === '/projects/chatboxd' ||
          pathname === '/projects/hangman' ||
          pathname === '/projects/tictactoe' ||
          pathname === '/projects/gamestats'
        ) {
          setNavBg('transparent');
          setLinkColor('#ecf0f3');
        } else {
          setNavBg('#ecf0f3');
          setLinkColor('#1f2937');
        }
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, [pathname]);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed z-[100] h-20 w-full shadow-xl'
          : 'fixed z-[100] h-20 w-full'
      }
    >
      <div className="flex h-full w-full items-center justify-between px-2 2xl:px-16">
        <Link href="/#home">
          <Image
            src="/initials.png"
            alt="navLogo image"
            width="125"
            height="50"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#home">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#skills">Skills</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#projects">Projects</Link>
            </li>
            <li className="ml-10 pr-3 text-sm uppercase hover:border-b">
              <Link href="/#contact">Contact</Link>
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={clsx({
          'fixed left-0 top-0 h-screen w-full bg-black/70 md:hidden':
            nav === true,
          '': nav === false,
        })}
      >
        <div
          className={clsx({
            'fixed left-0 top-0 h-screen w-[75%] bg-[#ecf0f3] p-10 duration-500 ease-in sm:w-[60%] md:w-[45%]':
              nav === true,
            'fixed left-[-100%] top-0 p-10 duration-500 ease-in': nav === false,
          })}
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/#home">
                <Image src="/initials.png" width="87" height="35" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="my-4 border-b border-gray-300">
              <p className="w-[85%] py-4 md:w-[90%]">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/#home">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-6">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
              <div className="my-4 flex max-w-[90px] items-center justify-between">
                <a
                  href="https://www.linkedin.com/in/auberon-lai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://github.com/alai031"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer rounded-full p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-105"
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
