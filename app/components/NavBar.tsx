"use client";
import { DM_Sans } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";


const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "100", "400", "700", "900"],
});


// interface ItemType {
//   label: string;
//   path: string;
// }
const NavBar = () => {
  const currentPath = usePathname();
  const [showMenu, setShowMenu] = useState(false);


  const isActive = (path: string) => currentPath === path;

  return (
    <nav
      className={`h-[96px] ${dm_sans.className}  items-center justify-center flex flex-row max-md:justify-between max-md:px-[20px] space-x-[100px]`}
    >
      {/* Logo */}
      <img
        src="/umuravaLogo.webp"
        draggable="false"
        alt="umurava logo"
        className="max-[640px] w-[125px]"
      />

      {/* Desktop Navigation */}
      <ul className="hidden sm:text-sm md:flex flex-row text-gray-700 space-x-[40px]">

        <li>
          <Link
            href="/"
            className={`hover:text-[#2B71f0] ${
              isActive("/") ? "text-[#2B71f0]" : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/guest/challenges"
            className={`hover:text-[#2B71f0] ${
              isActive("/guest/challenges") ? "text-[#2B71f0]" : ""
            }`}
          >
            Challenge & Hackathons
          </Link>
        </li>
        <li>
          <Link
            href="/guest/community"
            className={`hover:text-[#2B71f0] ${
              isActive("/guest/community") ? "text-[#2B71f0]" : ""
            }`}
          >
            For Learning Institutions
          </Link>
        </li>
        <li>
          <Link
            href="/guest/about"
            className={`hover:text-[#2B71f0] ${
              isActive("/guest/about") ? "text-[#2B71f0]" : ""
            }`}
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            href="/guest/contact"
            className={`hover:text-[#2B71f0] ${
              isActive("/guest/contact") ? "text-[#2B71f0]" : ""
            }`}
          >
            Contact Us
          </Link>
        </li>

      </ul>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setShowMenu(!showMenu)}
          aria-label="Toggle Menu"
          className="text-gray-700 hover:text-blue-600 focus:outline-none"
        >
          {showMenu ? <IoClose size={30} /> : <IoMenu size={30} />}
        </button>
      </div>

      {/* Join or Logout Button */}
      <Link href={"/login"}>
        <button className="bg-[#041738] hover:opacity-80 transition-all ease-in-out duration-300 hidden md:block p-[14px] text-white text-[14px] rounded-[10px]">
          Join the Program
        </button>
      </Link>

      {/* Mobile Navigation */}
      {showMenu && (
        <div className="md:hidden z-50 bg-white flex flex-col space-y-4 items-center pt-[20px] justify-between shadow-md absolute top-[100px] left-0 right-0">
          <ul className="flex flex-col space-y-4 text-gray-700">

            <li>
              <Link
                href="/"
                className="hover:text-blue-600 transition duration-300"
                onClick={() => setShowMenu(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/guest/challenges"
                className="hover:text-blue-600 transition duration-300"
                onClick={() => setShowMenu(false)}
              >
                Challenge & Hackathons
              </Link>
            </li>
            <li>
              <Link
                href="/guest/community"
                className="hover:text-blue-600 transition duration-300"
                onClick={() => setShowMenu(false)}
              >
                For Learning Institutions
              </Link>
            </li>
            <li>
              <Link
                href="/guest/about"
                className="hover:text-blue-600 transition duration-300"
                onClick={() => setShowMenu(false)}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/guest/contact"
                className="hover:text-blue-600 transition duration-300"
                onClick={() => setShowMenu(false)}
              >
                Contact Us
              </Link>
            </li>

          </ul>

          <button className="bg-[#041738] p-[14px] rounded-b-[5px] w-full text-white text-[14px]">
            Join the Program
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
