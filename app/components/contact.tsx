import Image from 'next/image'
import contactImg from '../../public/contact.jpg'
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

export default function ContactPage() {
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className='max-w-[1240px] m-auto px-2 py-28 w-full'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='md:w-[100%]'>
                    <div className='h-full shadow-xl shadow-gray-400 rounded-xl p-4 flex'>
                            <div className='lg:p-4 h-full flex grid md:grid-cols-4'>

                                {/* Left */}
                                <div className='col-span-2'>
                                    <h2 className='py-2'>Auberon Lai</h2>
                                    <p className='text-xl'>Aspiring Software Developer</p>
                                    <p className='py-20'>I am available for full-time positions. Contact me and let's talk.</p>
                                    <p className='uppercase pt-4'>Connect With Me</p>
                                    <div className='flex items-center justify-between max-w-[170px] py-4'>
                                        <a 
                                            href="https://www.linkedin.com/in/auberon-lai/" 
                                            target="_blank"
                                            rel="noopener noreferrer" 
                                            className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                                        >
                                            <FaLinkedinIn />
                                        </a>
                                        <a
                                            href="https://github.com/alai031" 
                                            target="_blank"
                                            rel="noopener noreferrer" 
                                            className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'
                                        >
                                            <FaGithub />
                                        </a>
                                    </div>
                                </div>
                                
                                {/* Right */}
                                <div className='flex col-span-4 md:col-span-2 p-4'>
                                    <Image
                                        className='rounded-xl hover:scale-105 ease-in duration-300'
                                        src={contactImg}
                                        alt='/'
                                    />
                                </div>
                            </div>

                    </div>
                </div>
                <div className='flex justify-center py-12'>
                    <Link href='/#home'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp className='text-[#5351e5]' size={30}/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}