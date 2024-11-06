import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/logo.png";
import List from "../../assets/list-navbar.png";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log(nav);
  };

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "Company" },
    { id: 3, text: "Resources" },
    { id: 4, text: "About" },
    { id: 5, text: "Contact" },
  ];

  return (
    <div className="flex justify-between items-center h-24 w-full mx-auto px-4 text-white">
      <div className="w-full flex flex-1 justify-between items-center">
        <div className="">
          <Image
            src={Logo}
            alt="Logo"
            className="rounded-lg"
            quality={100}
            priority
          />
        </div>

        <div className="hidden flex-row justify-between gap-8 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="group relative overflow-hidden text-sm flex"
            >
              <span className="relative text-white">{item.text}</span>
              <div className="absolute bottom-0 w-0 bg-[#f9ac54] transition-all duration-[250ms] ease-out group-hover:w-1/2 h-1"></div>
            </button>
          ))}
        </div>

        <div>
          <button class=" hover:bg-[#d79447] lg:block hidden group relative h-full w-48 overflow-hidden rounded-lg bg-[#f9ac54] text-lg shadow p-2  m-3">
            <span class="relative text-[#fff] ">Join Now!</span>
          </button>
        </div>
      </div>

      <div onClick={handleNav} className="block lg:hidden">
        <Image
          src={List}
          alt="List"
          className="w-10 h-10"
          quality={100}
          priority
        />
      </div>

      <ul
        className={
          nav
            ? "fixed lg:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <div className="w-full text-3xl font-bold m-4">
          <Image
            src={Logo}
            alt="Logo"
            className="rounded-lg"
            quality={100}
            priority
          />
        </div>

        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl hover:bg-[#f9ac54] duration-300 hover:text-white cursor-pointer border-[#f9ac54]"
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
