import hangmanImg from '../../../public/hangman.png'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

export default function hangmanPage() {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/25 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={hangmanImg} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h1 className='py-2'>Hangman</h1>
                    <h3>ReactJS / HTML / CSS</h3>    
                </div>
            </div>
        
                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                    <div className='col-span-4'>
                        <p className='text-xl'>Project</p>
                        <h2>Overview</h2>
                        <p className='py-4 text-lg'>
                            This app was built using React, JavaScript, HTML, and CSS.
                            The program runs like classic hangman where the player has to 
                            guess the letters of a word, and failed attempts are recorded
                            by drawing the body parts of someone hanging on a gallow. Each
                            failed attempt results in one body part being drawn. The player either
                            wins when they have guessed all the letters to the mystery word or loses
                            if all body parts of the person hanging on the gallow is drawn. Feel free
                            to try the game by clicking on the 'Open App' button below!
                        </p>
                        <a 
                            href='https://hangman-five-alpha.vercel.app/'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className='px-8 py-2 mt-4 mr-8'>
                                Open app 
                            </button>
                        </a>
                        <a 
                            href='https://github.com/alai031/Hangman'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className='px-8 py-2 mt-4 mr-8'>
                                Code
                            </button>
                        </a>
                    </div>
                    <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='p-2'>
                            <p className='text-center font-bold pb-2 text-lg'>Technologies</p>
                            <div className='grid grid-cols-2 md:grid-cols-1 text-lg'>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/> React
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/> JavaScript
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/> HTML
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/> CSS
                                </p>
                            </div>                
                        </div>
                    </div>    
                    <Link href='../#projects'>
                        <p className='underline cursor-pointer text-lg pt-8 pb-6 md:pb-0'>Back</p>
                    </Link>
                </div>
        </div>
    );
}