import Image from 'next/image';
import contactImg from '../../public/contact.jpg';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

export default function ContactPage() {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="m-auto w-full max-w-[1240px] px-2 py-28">
        <p className="text-xl uppercase tracking-widest text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="md:w-[100%]">
          <div className="flex h-full rounded-xl p-4 shadow-xl shadow-gray-400">
            <div className="flex grid h-full md:grid-cols-4 lg:p-4">
              {/* Left */}
              <div className="col-span-2">
                <h2 className="py-2">Auberon Lai</h2>
                <p className="text-xl">Software Engineer</p>
                <p className="py-20">
                  I am available for full-time positions. Contact me and let's
                  talk. <br />
                  Email: Auberonlai24@gmail.com
                </p>
                <p className="pt-4 uppercase">Connect With Me</p>
                <div className="flex max-w-[170px] items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/in/auberon-lai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="https://github.com/alai031"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer rounded-full p-6 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>

              {/* Right */}
              <div className="col-span-4 flex p-4 md:col-span-2">
                <Image
                  className="rounded-xl duration-300 ease-in hover:scale-105"
                  src={contactImg}
                  alt="/"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#home">
            <div className="cursor-pointer rounded-full p-4 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110">
              <HiOutlineChevronDoubleUp className="text-[#5351e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
