import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-28'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
                    <h2 className='py-4'>Who I Am</h2>
                    {/* <p className='py-2 text-gray-600'>// I am not your normal developer</p> */}
                    <p className='py-2 text-gray-600'>
                        I am a recent college graduate from the University of California Riverside.
                        I graduated in June 2023 with a B.S. degree in Computer Science and magna
                        cum laude honors. I am currently looking for software development opportunities
                        that will help enrich my skill sets. 

                        I am passionate about learning new technologies and understand there are 
                        multiple ways to accomplishing a task. Though I am most proficient in 
                        C++, JavaScript, HTML, and CSS, I am a fast learner and can pick up new tech
                        stacks as needed.
                    </p>
                    <p className='py-2 text-gray-600'>
                        I grew up in San Marino, CA, a small residential city in Los Angeles County. 
                        In high school, I played varsity tennis and ran cross country. Nowadays,
                        in my spare time, I like to go on hikes, read books, and 
                        play video games and tennis with friends.
                    </p>
                    <Link href='#projects' className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</Link>
                </div>
                <div className='w-[50%] md:w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image
                        className='rounded-xl'
                        src='/aboutProfileImage.jpg'
                        alt='about image'
                        width='350'
                        height='300'
                    />
                </div>
            </div>
        </div>
    );
}
