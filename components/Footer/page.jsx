import React from "react"; // Import React
/* eslint-disable */
function Footer() {
  return (
    <footer className="py-16 bg-black dark:bg-zinc-700">
      <div className="container flex flex-col items-center justify-between mx-auto space-y-16 md:flex-row md:space-y-0 md:items-start md:px-4">
        {/* Logo */}
        <img src="/images/wiz.png" alt="logo" />

        {/* Menus Container */}
        <div className="flex flex-col space-y-16 md:space-x-20 md:flex-row md:space-y-0">
          {/* Menu 1 */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-wizard capitalize">
              Features
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" className="capitalize text-white">
                Live chat
              </a>

              <a href="#" className="capitalize text-white">
                Analytics
              </a>
            </div>
          </div>

          {/* Menu 2 */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-wizard capitalize">
              Resources
            </div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" className="capitalize text-white">
                Developers
              </a>
              <a href="#" className="capitalize text-white">
                Support
              </a>
            </div>
          </div>

          {/* Menu 3 */}
          <div className="flex flex-col items-center w-full md:items-start">
            <div className="mb-5 font-bold text-wizard capitalize">Company</div>
            <div className="flex flex-col items-center space-y-3 md:items-start">
              <a href="#" className="capitalize text-white">
                About
              </a>
              <a href="#" className="capitalize  text-white">
                Our Team
              </a>
              <a href="#" className="capitalize  text-white">
                Careers
              </a>
              <a className="capitalize  text-white">Contact</a>
            </div>
          </div>
        </div>

        {/* Social Container */}
        <div className="flex space-x-6">
          <a href="#">
            <img
              src="images/icon-facebook.svg"
              alt=""
              className="ficon  dark:text-white"
            />
          </a>
          <a href="#">
            <img src="/images/icon-twitter.svg" alt="" className="ficon" />
          </a>
          <a href="#">
            <img src="/images/icon-facebook.svg" alt="" className="ficon" />
          </a>
          <a href="#">
            <img src="/images/icon-instagram.svg" alt="" className="ficon" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
