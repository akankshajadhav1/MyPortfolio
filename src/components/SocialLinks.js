import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsPersonLinesFill } from 'react-icons/bs'
const SocialLinks = () => {
    const links = [
        {
            id: 1,
            child: (
                <>
                    Linkedin<FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com',
            style: 'rounded-tr-md'

        },
        {
            id: 2,
            child: (
                <>
                    Github<FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/akankshajadhav1',

        },
        {
            id: 3,
            child: (
                <>
                    Mail<HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:foo@gmail.com',


        },
        {
            id: 4,
            child: (
                <>
                    Resume<BsPersonLinesFill size={30} />
                </>
            ),
            href: '/Resume1.pdf',
            style: 'rounded-tr-md',
            download: true

        }
    ]
    return (
        <div className='hidden flex-col top-[35%] left-0 fixed lg:flex'>
            <ul>
                {links.map(({ id, child, href, style, download }) => (
                    <li key={id} className={'flex justify-between item-center w-40 h-14 px-4  ml-[-100px] bg-gray-400 hover:rounded-md duration-300 hover:ml-[-10px]' + " " + style}><a download={download} target='_blank' rel='noreferrer' className='flex justify-between items-center  w-full  text-white' href={href}>{child}</a></li>
                ))}

            </ul>
        </div>
    )
}

export default SocialLinks