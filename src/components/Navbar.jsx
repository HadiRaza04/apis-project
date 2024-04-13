'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'



const navlinks = [
    // {
    //     title: 'Home',
    //     path: '/'
    // },
    {
        title: 'Jokes',
        path: '/jokes'
    },
    {
        title: 'Quote',
        path: '/quote'
    },
    // {
    //     title: 'Memes',
    //     path: '/memes'
    // },
    // {
    //     title: 'Mcqs',
    //     path: '/mcqs'
    // },
    {
        title: 'Github',
        path: '/github'
    },
    {
        title: 'QRCcode',
        path: '/qrcode'
    },
    {
        title: 'Recipe',
        path: '/recipe'
    },
    {
        title: 'NumFact',
        path: '/numfact'
    },
    
]
const Navbar = () => {
    const router = useRouter()

    return (
    <div className="w-full h-12 bg-slate-500 fixed top-0 pt-3">
        <ul className='flex justify-around '>
            {
                navlinks.map((link) => (
                    <li className='inline cursor-pointer font-bold text-white' key={link.title}>
                        <Link href={link.path} passHref>
                            <p className={router.pathname === link.path ? "bg-gray-800" : "text-white"}>{link.title}</p>
                        </Link>
                    </li>
                ))
            }

        </ul>
    </div>
  )
}
export default Navbar