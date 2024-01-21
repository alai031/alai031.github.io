import chatboxdImg from '/public/chatboxd.png'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

export default function chatboxdPage() {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10' />
                <Image className='absolute z-1' layout='fill' objectFit='cover' src={chatboxdImg} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h1 className='py-2'>Chatboxd</h1>
                    <h3>ReactJS / NodeJS / MongoDB</h3>    
                </div>
            </div>
        
                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                    <div className='col-span-4'>
                        <p className='text-xl'>Project</p>
                        <h2>Overview</h2>
                        <p className='py-4 text-lg'>
                            This app's front-end was built using React and JavaScript. The back-end 
                            was built using Node.js and Express.js. MongoDB was used for the database.
                            User authentication is available so you can sign up and log in to your account 
                            and have your rooms and chat messages saved. Users can create their own chatrooms
                            or join existing ones and send messages to everyone else in the room. They may also
                            edit, search, or react to messages. Feel free to view a demo of the app by clicking
                            'Video Demo' below!
                        </p>
                        <a 
                            href='https://youtu.be/f1Pumm8vHKU'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className='px-8 py-2 mt-4 mr-8'>
                                Video Demo 
                            </button>
                        </a>
                        <a 
                            href='https://github.com/UCR-CS110-S23/project-chatboxd'
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
                            <div className='grid grid-cols-3 md:grid-cols-1 text-base'>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/> React
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/> JavaScript
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/> Node.js
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/> Express.js
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/> MongoDB
                                </p>
                                <p className='text-gray-600 py-2 flex items-center'>
                                    <RiRadioButtonFill className='pr-1'/> Socket.IO
                                </p>
                            </div>                
                        </div>
                    </div>    
                    <Link href='../#projects'>
                        <p className='underline cursor-pointer text-lg pb-8'>Back</p>
                    </Link>
                </div>
        </div>
    );
}