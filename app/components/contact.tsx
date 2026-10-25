'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const EMAIL = 'Auberonlai24@gmail.com';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 700);
    } catch {
      // Clipboard API unavailable (e.g., insecure context) — silently ignore
    }
  };

  return (
    <div id="contact" className="w-full py-32">
      <div className="mx-auto max-w-[1240px] px-6">
        <div className="flex flex-col items-center text-center">
          <p className="section-eyebrow">07 / Contact</p>
          <h2 className="mt-4 text-slate-100">Get In Touch</h2>
          <p className="mt-6 max-w-xl text-lg text-slate-400">
            I&apos;m open to new opportunities &mdash; let&apos;s talk.
            Currently based in Las Vegas, NV, and open to relocating for the
            right role.
          </p>

          <div className="relative mt-8">
            <button
              type="button"
              onClick={copyEmail}
              className="border-0 bg-transparent p-0 font-mono text-base font-normal normal-case tracking-normal text-cyan-400 shadow-none transition hover:bg-transparent hover:text-cyan-300"
            >
              {EMAIL}
            </button>
            <span
              className={`pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded-md border border-cyan-400/40 bg-slate-900 px-2 py-0.5 font-mono text-[10px] text-cyan-300 transition-opacity duration-150 ${
                copied ? 'opacity-100' : 'opacity-0'
              }`}
              aria-live="polite"
            >
              Copied to clipboard
            </span>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/auberon-lai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-cyan-400/60 hover:text-cyan-400"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://github.com/alai031"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-white/10 p-3 text-slate-400 transition hover:border-cyan-400/60 hover:text-cyan-400"
            >
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        <div className="mt-24 flex justify-center">
          <Link href="/#home" aria-label="Back to top">
            <div className="rounded-full border border-white/10 p-4 text-slate-400 transition hover:border-cyan-400/60 hover:text-cyan-400">
              <HiOutlineChevronDoubleUp size={22} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
