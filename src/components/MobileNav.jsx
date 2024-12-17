"use client";

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Button } from "./ui/button";

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

const MobileNav = () => {
  const pathname = usePathname();
  return <Sheet>
    <SheetTrigger className="flex justify-center items-center">
      <CiMenuFries className="text-[32px] text-accent" />
    </SheetTrigger>
    <SheetContent className="flex flex-col justify-center">
      <div className="mb-14 text-center text-2xl">
        <Link href="/">
          <h1 className='text-4xl font-semibold'>
            Luana<span className='text-accent'>.</span>Dev
          </h1>
        </Link>
      </div>
      <nav className="flex flex-col justify-center items-center gap-8">
        {links.map((link, index) => {
          return <Link className={`${link.path === pathname && "text-accent border-b-2 border-accent-hover"} text-xl capitalize hover:text-accent-hover transition-all`} key={index} href={link.path}>{link.name}</Link>
        })}
        <Link href="/contact" className="mt-8">
            <Button className="bg-accent hover:bg-accent-hover">Contato</Button>
        </Link>
      </nav>
    </SheetContent>
  </Sheet>;
}

export default MobileNav;