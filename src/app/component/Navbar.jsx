import React from 'react'
import Link from 'next/link'
import { link } from 'fs'
import NavLink from './NavLink'


const navLinks = [
    {title: "About",
        path: "#about",
    },
    {title: "Projects",
        path: '#projects',
     },
     {
        title: "Contact",
        path: "#contact",
     }
]

const Navbar = () => {
  return (
    <nav className='fixed left-0 right-0 z-10 bg-[#121212] bg-opacity-90' >
        <div className="flex flex-wrap items-center justify-between mx-auto p-2 px-4 w-full">
            <Link href={'/'} className=' text-2xl text-white font-semibold '>Logo</Link>
           (//Mobile NavBar) 
            <div className='hidden md:block md:w-auto'>
                <ul className='flex md:p-2 md:flex-row md:space-x-8'>
                {
                    navLinks.map((link, index)=>(
                        <li key={index}>
                            <NavLink href={link.path} 
                                title={link.title}
                            />
                        </li>
                    ))
                        
                    }
                </ul>
            </div>
            <div className='menu hidden lg:block md:w-auto ' id='navbar'>
                <ul className='flex p-4 md:space-x-8 mt-10'>
                {
                    navLinks.map((link, index)=>(
                        <li key={index}>
                            <NavLink href={link.path} 
                                title={link.title}
                            />
                        </li>
                    ))
                        
                    }
                        
                    
                
                </ul>
                </div>
        </div>
    </nav>
  )
}
 
export default Navbar  
