'use client';

import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

const navLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#education', label: 'Education' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];

export default function NavBar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY >= 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={clsx(
        'fixed z-[100] h-16 w-full transition-all duration-200',
        scrolled
          ? 'bg-[#020617]/80 backdrop-blur-md'
          : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex h-full w-full max-w-[1240px] items-center justify-between px-6">
        <Link
          href="/#home"
          className="font-script text-4xl leading-none text-cyan-400 transition hover:text-cyan-300"
        >
          AL
        </Link>

        <ul className="hidden items-center md:flex">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className="ml-8 font-mono text-sm tracking-wide text-slate-300 transition hover:text-cyan-400"
            >
              <Link href={link.href}>
                <span className="text-cyan-400">
                  {String(i + 1).padStart(2, '0')}.
                </span>{' '}
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setNav(true)}
          aria-label="Open menu"
          className="rounded-md border-0 bg-transparent p-2 text-slate-300 shadow-none hover:bg-slate-800/50 hover:text-cyan-400 md:hidden"
        >
          <AiOutlineMenu size={22} />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={clsx(
          'fixed inset-0 bg-black/70 transition-opacity md:hidden',
          nav ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        onClick={() => setNav(false)}
      />
      <div
        className={clsx(
          'fixed left-0 top-0 h-screen w-[75%] border-r border-white/10 bg-[#020617] p-8 transition-transform duration-300 ease-in-out sm:w-[60%] md:hidden',
          nav ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <div className="flex items-center justify-between">
          <Link
            href="/#home"
            onClick={() => setNav(false)}
            className="font-script text-4xl leading-none text-cyan-400 transition hover:text-cyan-300"
          >
            AL
          </Link>
          <button
            type="button"
            onClick={() => setNav(false)}
            aria-label="Close menu"
            className="rounded-full border border-white/10 bg-transparent p-2 text-slate-300 shadow-none"
          >
            <AiOutlineClose />
          </button>
        </div>

        <p className="mt-6 text-sm text-slate-400">
          Let&apos;s build something together.
        </p>

        <ul className="mt-10 flex flex-col gap-1">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <Link href={link.href} onClick={() => setNav(false)}>
                <span className="block py-3 font-mono text-base text-slate-200 hover:text-cyan-400">
                  <span className="text-cyan-400">
                    {String(i + 1).padStart(2, '0')}.
                  </span>{' '}
                  {link.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <p className="section-eyebrow">Connect</p>
          <div className="mt-4 flex items-center gap-3">
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
    </div>
  );
}
