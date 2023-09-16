"use client";
/* eslint-disable */
import React, { useState } from "react";
import Wizlogo from "../../public/images/wiz.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Nav container  */}
      <nav className="relative container mx auto p-6 bg-white dark:bg-zinc-800">
        {/* flex container */}
        <div className="flex items-center justify-between">
          {/* flex container logo */}
          <div className="flex items-center space-x-8">
            {/* logo */}
            <img src="/images/wiz.png" alt="logo" />
          </div>
          {/* middle menu */}
          <div className="hidden lg:flex mx-auto  space-x-20 justify-center font-medium">
            <a className="text-black hover:text-wizard duration-200 dark:text-white">
              Pricing
            </a>
            <a className="text-black hover:text-wizard duration-200 dark:text-white">
              About us
            </a>
            <a className="text-black hover:text-wizard duration-200 dark:text-white">
              Demo
            </a>
            <a className="text-black hover:text-wizard duration-200 dark:text-white">
              How it works
            </a>
          </div>
          <div className="hidden items-center justify-center space-x-6 font-medium text-black lg:flex dark:text-white">
            <a
              href="/signin"
              className=" flex px-8  py-3 font-medium text-black border-2 border-wizard rounded-full
        hover:bg-wizard hover:text-white duration-200 dark:text-white"
            >
              Sign in
            </a>
            <a
              href="/signup"
              className=" flex px-8  py-3 font-medium text-white bg-wizard rounded-full text-transform: capitalize
        hover:opacity-70 duration-200"
            >
              sign up free
            </a>
          </div>
          <div className="">
            <button
              id="menu-btn"
              className={`block hamburger lg:hidden focus:outline-none ${
                isOpen ? "justify-end open" : "justify-start"
              }`}
              type="button"
              onClick={toggleMenu}
            >
              <span className={`hamburger-top ${isOpen ? "open" : ""}`}></span>
              <span
                className={`hamburger-middle ${isOpen ? "open" : ""}`}
              ></span>
              <span
                className={`hamburger-bottom ${isOpen ? "open" : ""}`}
              ></span>
            </button>
          </div>
        </div>
        {/* className=" px-8 font-medium text-white bg-wizard rounded-full
        hover:opacity-70" */}
        <div
          id="menu"
          className={`absolute p-6 rounded-lg bg-zinc-700 left-6 right-6 top-20 z-100 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
            <a href="" className="w-full text-center">
              {" "}
              Pricing
            </a>
            <a href="" className="w-full text-center">
              {" "}
              About us
            </a>
            <a href="" className="w-full text-center">
              {" "}
              Demo
            </a>

            <a
              href="/signin"
              className="w-full pt-6 border-t border-gray-400 text-center"
            >
              Login
            </a>
            <a
              href="/signup"
              className="w-full py-3 text-center rounded-full bg-wizard"
            >
              {" "}
              Sign up Free
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
