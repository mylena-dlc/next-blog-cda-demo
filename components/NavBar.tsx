import React from 'react'
import Link from 'next/link'


const NavBar:React.FC = () => {
    return (

        <nav className='bg-gray-900  p-4 fixed w-full top-0 left-0'>
            <ul className='flex '>
                <li className='p-5'>
                     <Link className='cursor-pointer hover:underline' href="/article"> 
                        Article
                    </Link>
                </li>
                <li className='p-5'>
                     <Link className='cursor-pointer hover:underline' href="/contact"> 
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
       
    )
}

export default NavBar