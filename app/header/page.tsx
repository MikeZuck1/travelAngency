"use client"
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="flex flex-row py-[2rem] px-[10rem] justify-between">
          <h1 className="text-4xl font-bold font-crete text-[#444]">
            Travel Agency<span className="text-[orange]">.</span>
          </h1>

          {/* Menu principal */}
          <nav className="flex justify-around">
            <ul className="hidden md:flex flex-row font-bold text-[#444]">
              <li className="mx-3 uppercase">
                <a href="#">accueil</a>
              </li>
              <li className="mx-3 uppercase">
                <a href="#">destinations</a>
              </li>
              <li className="mx-3 uppercase">
                <a href="#">circuits</a>
              </li>
              <li className="mx-3 uppercase">
                <a href="#">contact</a>
              </li>
            </ul>

            {/* Bouton Hamburger pour mobile */}
            <div className="md:hidden flex items-center" onClick={toggleMenu}>
              <button className="text-[#444]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>

        {/* Menu mobile déroulant */}
        <div
          className={`md:hidden bg-[#444] text-white space-y-4 p-4 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <a href="#" className="block py-2">accueil</a>
          <a href="#" className="block py-2">destinations</a>
          <a href="#" className="block py-2">circuits</a>
          <a href="#" className="block py-2">contact</a>
        </div>
      </header>
    </>
  );
}
