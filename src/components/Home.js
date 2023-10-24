import React from 'react'
import HeroImage from '../assests/HeroImage.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
const Home = () => {



    return (
        <div name="home" className=' h-screen w-full bg-gradient-to-b from-[#881337] to-[#fb7185]'>
            <div className='  max-w-screen-lg  mx-auto flex flex-col  md:flex-row items-center justify-center h-full px-4'>
                <div className=' flex flex-col justify-center h-full' >
                    <h2 className='text-4xl sm:text-7xl  font-bold text-white'>Hey ,I'm <br></br>Akanksha Jadhav</h2>
                    <p className='text-[#881337] py-4 max-w-md'> I'm Full Stack Developer.
                        Currently, I work on web application using technologies  likes
                        React, Tailwind, Next JS and ReactNative.
                    </p>
                    <div>
                        <button className=' group text-white w-fit  px-6  py-3 my-2  flex  item-center rounded-md cursor-pointer bg-gradient-to-r from-[#fb7185] to-[#cbd5e1]'>
                            Portfolio
                            <span className='hover:rotate-90 mt-1 duration-300'>
                                <MdOutlineKeyboardArrowRight size={21} className='ml-1' />
                            </span>
                        </button>
                    </div>

                </div>
                <div>
                    <img src={HeroImage} alt='my profile' className="rounded-2xl ml-5 mx-auto w-2/3 md:w-full" style={{ width: '350px', height: '300px', borderRadius: '70px' }} />
                </div>
            </div>
        </div>
    )
}

export default Home