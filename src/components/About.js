import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen item-center bg-gradient-to-b  from-[#fb7185] to-[#881337] text-white' >
            <div className='max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full'>
                <div className='pb-6 '><p className='text-4xl font-bold inline   border-b-4 border-gray-500 '>About Me </p>
                </div>

                <p className='text-xl'>I AM AKANKSHA JADHAV. A COMPUTER SCIENCE STUDENT. <br></br>I AM A WEB DEVELOPER.  I ENJOY LEARING ABOUT NEW TECHNOLOGIES AND HAVE A PASSION FOR PROGRAMMING. <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
                </p>
                <p className='text-xl '>  <br></br>
                    SKILLS :
                    Full Stack MERN,
                    FIREBASE,
                    MONGODB,
                    HTML, Bootstrap, CSS, JS, REACT JS

                </p>
            </div>
        </div>
    )
}

export default About