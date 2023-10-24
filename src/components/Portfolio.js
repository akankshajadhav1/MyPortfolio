import React from 'react'
import arrayDestruct from "../assests/portfolio/musicplayer.png";
import installNode from "../assests/portfolio/installNode.jpg";
import navbar from "../assests/portfolio/tictactoe.png";
import usestate from "../assests/portfolio/usestate.jpg";
import reactSmooth from "../assests/portfolio/reactSmooth.jpg";
import foodApp from '../assests/portfolio/foodapp.png'
const Portfolio = () => {
    const portfolios = [
        {
            id: 1,
            src: arrayDestruct,
        },
        {
            id: 2,
            src: usestate,
        },
        {
            id: 3,
            src: navbar,
        },
        {
            id: 4,
            src: reactSmooth,
        },
        {
            id: 5,
            src: installNode,
        },
        {
            id: 6,
            src: foodApp,
        },
    ];

    return (
        <div className='bg-gradient-to-b from-[#881337] to-[#fb7185] w-full h-screen md:h-screen text-white' name='portfolio'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col  mb-8 justify-center w-full h-full'>
                <div className='pb-4'>
                    <p className='text-4xl font-bold inline border-b-4  border-gray-500'>Portfolio</p>
                    <p className='py-6 mt-4 '>Cherck  out  some  of work right here</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src }) => (
                        <div key={id} className='shadow-md shadow-[#94a3b8] h-200px rounded-lg'>
                            <img src={src} alt='' className='rounded-md duration-200 hover:scale-105 ' />
                            <div className='flex items-center justify-center'>
                                <button className=" w-1/2 px-4  py-2 m-4 duration-200 hover:scale-105">
                                    Demo
                                </button>
                                <button className=" py-2 w-1/2 m-4 duration-200 hover:scale-105">
                                    Code
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Portfolio