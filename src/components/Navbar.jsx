import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50 transition-all">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="logo">
            <a href="#" className="text-2xl font-bold text-gray-800">
              Nindy's Food
            </a>
          </div>

          {/* Tombol Toggle (mobile) */}
          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              // icon close (X)
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // icon hamburger
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Menu Desktop */}
          <ul className="hidden lg:flex text-xl gap-9 items-center">
            <li>
              <a
                href="#"
                className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all after:duration-500 hover:after:w-full"
              >
                Contact
              </a>
            </li>

            <li>
              <div className="bg-blue-500 rounded-lg *: px-5 py-2 inline-block hover:bg-blue-600 transition">
                <a href="#" className="text-white text-xl font-semibold">
                  Social Media
                </a>
              </div>
            </li>
          </ul>
        </div>

        {/* Menu Mobile */}
        <div
          className={`lg:hidden flex flex-col items-center bg-white overflow-hidden transition-all duration-500 ${
            menuOpen ? "max-h-96 py-4" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-4 text-lg">
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600 transition">
                Service
              </a>
            </li>
          </ul>

          <div className="bg-blue-500 rounded px-5 py-2 mt-4 inline-block hover:bg-blue-600 transition">
            <a href="#" className="text-white text-lg font-semibold">
              Social Media
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
