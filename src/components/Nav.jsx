"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "serviços",
        path: "/services",
    },
    {
        name: "curriculo",
        path: "/resume",
    },
    {
        name: "projetos",
        path: "/work",
    },
]

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);

  return <nav className='flex gap-8'>
    {links.map((link, index) => {
        return <Link key={index} href={link.path} className={`${link.path === pathname && "text-accent border-b-2 border-accent-hover"} capitalize font-medium hover:text-accent-hover transition-all`}>{link.name}</Link>
    })}
  </nav>;
}

export default Nav;