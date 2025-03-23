"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F7FAFC] py-1 md:py-2">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">

        {/* Logo */}
            <div>
              <Link href="/" className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
                <svg className="h-8 w-8 mr-1 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span className="font-extrabold md:text-3xl text-xl">ResuFlex</span>
              </Link>
            </div>

          {/* Left Section: Logo & Primary Nav */}
          <div className="flex space-x-4">

            {/* Primary Nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link href="#" className="py-5 px-3 text-gray-500 font-bold hover:text-gray-900">Products</Link>
              <Link href="#" className="py-5 px-3 text-gray-500 font-bold hover:text-gray-900">Services</Link>
              <Link href="#" className="py-5 px-3 text-gray-500 font-bold hover:text-gray-900">Resources</Link>
              <Link href="#" className="py-5 px-3 text-gray-500 font-bold hover:text-gray-900">Company</Link>
            </div>
          </div>

          {/* Right Section: Secondary Nav */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="#" className="py-5 px-3 uppercase text-blue-500 font-bold">Log in</Link>
            <Link href="#" className="py-2 px-5 bg-blue-500 hover:bg-blue-400 text-white font-bold rounded-md transition duration-300">Signup</Link>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-200 text-black border-b">Products</Link>
          <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-200 text-black border-b">Services</Link>
          <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-200 text-black border-b">Resources</Link>
          <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-200 text-black border-b">Company</Link>
        </div>
      )}
    </nav>
  );
}
