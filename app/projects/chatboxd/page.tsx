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
                    <h2 className='py-2'>Chatboxd</h2>
                    <h3>ReactJS / NodeJS / MongoDB</h3>    
                </div>
            </div>
        
                <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                    <div className='col-span-4'>
                        <p>Project</p>
                        <h2>Overview</h2>
                        <p>
                            This app was built using React JS and is hosted on Firebase. Users
                            are able to search properties based on an Address, City, or ZIP code
                            to retrieve a list of active properties currently for sale. You will
                            be able to view property information as well as the specific
                            location of the property integrated with the Google Maps API. User
                            authentication is available so you can signup and signin to your
                            account with an email address in order to save your favorite
                            properties. This is made possible with Zillow API.
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
                            <p className='text-center font-bold pb-2'>Technologies</p>
                            <div className='grid grid-cols-3 md:grid-cols-1'>
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
                        <p className='underline cursor-pointer'>Back</p>
                    </Link>
                </div>
        </div>
    );
}