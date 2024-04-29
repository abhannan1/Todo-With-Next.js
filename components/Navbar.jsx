import Link from "next/link";


const links = [
    {href:"/client", label:"client"},
    {href:"/drinks", label:"drinks"},
    {href:"/tasks", label:"tasks"},
    {href:"/prisma-example", label:"prisma"},
]


import React from 'react'

const Navbar = () => {
  return (
    <nav className="bg-base-300 py-4">
        <div className="navbar px-3 max-w-6xl mx-auto flex-col sm:flex-row">
            <Link href="/" className="btn btn-primary">
                Next.js
            </Link>
            <ul className="menu menu-horizontal md:ml-8 gap-2">
                {links.map((link)=>{
                    return(
                      <li className="" key={link.href}> 
                        <Link href={link.href} className="capitalize">
                            {link.label} 
                        </Link>
                      </li>)
                })}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar