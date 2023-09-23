"use client";
import React from "react";

const Header = () => {
  return (
    <div>
      {" "}
      <div className="flex justify-between items-center px-3 pb-3 pt-3 bg-wizard text-white">
        {/* <h2>Dashboard</h2> */}
        <div className=" ml-2 bg-zinc-400 items-center text-center justify-center text-bold rounded-full w-10 h-10">
          <h2 className=""></h2>
        </div>
        <div className="flex space-x-6">
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-message-square "
          >
            <g>
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </g>
          </svg>
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-bell "
          >
            <g>
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </g>
          </svg>
        </div>
        {/* <h2>Welcome Back, Clint</h2> */}
      </div>
    </div>
  );
};

export default Header;
