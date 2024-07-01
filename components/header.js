"use client";

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

const links =[{
    title:"Home",
    url:"/"
},{
    
        title:"Booked Events",
        url:"/booked-events",
},
{
    title:"New Event",
    url:"/new-event",
}

]

export default function Header() {
    const pathname = usePathname()
  return (
    //  fragement
    <>
    <header className='header flex items-center 
    p-6 flex-wrap gap-4 justify-between'>
     <div className='font-bold hidden md:block'>
        Project Management 
   </div>
   <nav>
   
  <ul className='flex  flex-wrap items-center justify-center gap-5 '>
  {links.map((link) => (
     <li key={link.url}>
       <Link href={link.url} 
className={`${pathname === link.url ? "font-bold opacity-100" : "font-normal opacity-75"} transition`}>
{link.title}
       </Link>
     </li>
   ))}
  </ul>
   </nav> 
   <div className='font-bold hidden md:block'> Welcome</div>
    </header>
    </>
  )
}


