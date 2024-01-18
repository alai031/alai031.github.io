import Image from 'next/image'
import chessImg from '../../public/chess.png'
import chatboxdImg from '../../public/chatboxd.png'
import hangmanImg from '../../public/hangman.png'
import tictactoeImg from '../../public/tictactoe.png'
import Link from 'next/link'

export default function ProjectPage() {
    return (
        <div className='w-full'>
            <div className='max-w-[1240px] mx-auto px-2 py-36'>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
                <h2 className='py-4'>What I've Built</h2>
                <div className='grid md:grid-cols-2 gap-8'>

                    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <Image className='rounded-xl group-hover:opacity-10' src={chessImg} alt='/'/>
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl text-white tracking-wider text-center'>Chess</h3>
                            <p className='pb-4 pt-2 text-white text-center'>React JS</p>
                            <Link href='/projects/chess'>
                                <p className='text-center px-3 py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                            </Link>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <Image className='rounded-xl group-hover:opacity-10' src={chatboxdImg} alt='/'/>
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl text-white tracking-wider text-center'>Chatboxd</h3>
                            <p className='pb-4 pt-2 text-white text-center'>React JS</p>
                            <Link href='/projects/chatboxd'>
                                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                            </Link>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <Image className='rounded-xl group-hover:opacity-10' src={hangmanImg} alt='/'/>
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl text-white tracking-wider text-center'>Hangman</h3>
                            <p className='pb-4 pt-2 text-white text-center'>React JS</p>
                            <Link href='/projects/hangman'>
                                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                            </Link>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]'>
                        <Image className='rounded-xl group-hover:opacity-10' src={tictactoeImg} alt='/'/>
                        <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                            <h3 className='text-2xl text-white tracking-wider text-center'>Tic Tac Toe</h3>
                            <p className='pb-4 pt-2 text-white text-center'>React JS</p>
                            <Link href='/projects/tictactoe'>
                                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}