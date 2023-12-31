import { headerLogo } from "@/assets/images"
import Image from "next/image"
import Link from "next/link"
// import { navLinks } from "../constants/page"
import { hamburger } from "@/assets/icons"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
        <nav className="flex justify-between items-center max-container">
          <Link href="/">
            <Image alt="Logo" src={headerLogo} width={100} height={50} />
          </Link>
          <ul className="flex flex-1 justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((item) =>(
              <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className="font-montserrat leading-normal text-lg text-slate-gray"
                  >{item.label}</Link>
              </li>
            ))}
          </ul>
          <div className="hidden max-lg:block">
            <Image alt="Hamburger" src={hamburger} width={25} height={25} />
          </div>
        </nav>
    </header>
  )
}

export default Nav