import React from 'react'
import firebase from '../assests/firebase.jpg'
import html from "../assests/html.png";
import css from "../assests/css.png";
import javascript from "../assests/javascript.png";
import reactImage from "../assests/react.png";
import nextjs from "../assests/nextjs.png";
import github from "../assests/github.png";
import tailwind from "../assests/tailwind.png"
import bootstrap from '../assests/bootstrap.jpg'
const Experience = () => {

    const experience = [
        {
            id: 1,
            src: firebase,
            title: "FIREBASE",
            style: "shadow-[#0ea5e9]",

        },
        {
            id: 2,
            src: html,
            title: "HTML",
            style: "shadow-[#fb923c]",
        },
        {
            id: 3,
            src: css,
            title: "CSS",
            style: "shadow-[#06b6d4]",
        },
        {
            id: 4,
            src: javascript,
            title: "JAVASCRIPT",
            style: "shadow-[#fde047]",
        },
        {
            id: 5,
            src: reactImage,
            title: "REACTJS",
            style: "shadow-[#1d4ed8]",
        },
        {
            id: 6,
            src: nextjs,
            title: "NEXTJS",
            style: "shadow-[#a3a3a3]",
        },
        {
            id: 7,
            src: bootstrap,
            title: "BOOTSTRAP",
            style: "shadow-[#7c3aed]",
        },
        {
            id: 8,
            src: github,
            title: "GITHUB",
            style: "shadow-[#e7e5e4]",


        },
        {
            id: 9,
            src: tailwind,
            title: "TAILWIND",
            style: "shadow-[#2563eb]",
        }
    ]

    return (
        <div>
            <div
                name="experience"
                className="bg-gradient-to-b   from-[#fb7185] to-[#881337] w-full h-full"
            >
                <div className=" max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                    <div className='mt-14'>
                        <p className="text-4xl font-bold border-b-4  border-gray-500 p-2 inline">
                            Experience
                        </p>
                        <p className="py-6">These are the technologies I've worked with</p>
                    </div>

                    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8  px-12 sm:px-0">
                        {experience.map(({ id, src, title, style }) => (
                            <div
                                key={id}
                                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                            >
                                <img src={src} alt="" className="w-20 mx-auto" />
                                <p className="mt-4">{title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience