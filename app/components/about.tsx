import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div id="about" className="flex w-full items-center p-2 py-28 md:h-screen">
      <div className="m-auto max-w-[1240px] grid-cols-3 gap-8 md:grid">
        <div className="col-span-2">
          <p className="text-xl uppercase tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          {/* <p className='py-2 text-gray-600'>// I am not your normal developer</p> */}
          <p className="py-2 text-gray-600">
            I am a college graduate from the University of California Riverside.
            I graduated in June 2023 with a B.S. degree in Computer Science and
            magna cum laude honors. I am currently working as a software
            engineer at Mission Support and Test Services, LLC. I am passionate
            about learning new technologies and understand there are multiple
            ways to accomplishing a task. Though I am most proficient in C++,
            JavaScript, HTML, and CSS, I am a fast learner and can pick up new
            tech stacks as needed.
          </p>
          <p className="py-2 text-gray-600">
            I grew up in San Marino, CA, a small residential city in Los Angeles
            County. In high school, I played varsity tennis and ran cross
            country. Nowadays, in my spare time, I like to go on hikes, read
            books, and play video games and tennis with friends.
          </p>
          <Link
            href="#projects"
            className="cursor-pointer py-2 text-gray-600 underline"
          >
            Check out some of my latest projects.
          </Link>
        </div>
        <div className="m-auto flex h-auto w-[50%] items-center justify-center rounded-xl p-4 shadow-xl shadow-gray-400 duration-300 ease-in hover:scale-105 md:w-full">
          <Image
            className="rounded-xl"
            src="/aboutProfileImage.jpg"
            alt="about image"
            width="350"
            height="300"
          />
        </div>
      </div>
    </div>
  );
}
