import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const openMenu = () => {
    setMenu(true);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  return (
    <div>
      <div className="flex items-center justify-between p-3 md:hidden">
        {/* <img src="/logo.png" className='w-28 h-28'></img> */}
        <h1 className="text-3xl text-purple-700 font-medium">Authenticata</h1>
        <IoMdMenu className="text-3xl" onClick={openMenu} />

        <div
          className={
            menu
              ? `shadow-2xl rounded-xl bg-white absolute right-5 top-12`
              : `hidden`
          }
        >
          <RxCross2 className="text-3xl m-3 float-right" onClick={closeMenu} />
          <div className="w-56 h-56 rounded-xl flex flex-col justify-center items-center text-xl">
          <a
              href="/solutions"
              className="hover:bg-purple-800 hover:text-white py-2 px-10 hover:font-medium rounded-xl"
            >
              Solutions
            </a>
            <a
              href="/product"
              className="hover:bg-purple-800 hover:text-white py-2 px-10 hover:font-medium rounded-xl"
            >
              Product
            </a>
            <a
              href="/resources"
              className="hover:bg-purple-800 hover:text-white py-2 px-10 hover:font-medium rounded-xl"
            >
              Resources
            </a>
            <a
              href="/login"
              className="hover:bg-purple-800 hover:text-white py-2 px-10 hover:font-medium rounded-xl"
            >
              Login
            </a>
            <a
              href="/signup"
              className="hover:bg-purple-800 hover:text-white py-2 px-10 hover:font-medium rounded-xl"
            >
              Sign Up
            </a>
            <a
              href="/contact"
              className="hover:bg-purple-800 hover:text-white py-2 px-10 hover:font-medium rounded-xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <div className="md:flex justify-between items-center p-3 hidden">
        <h1 className="text-4xl text-purple-700 font-medium">Authenticata</h1>
        <div className="flex items-start gap-3 ">
          <a href= "/solutions"> <span class="text-lg text-purple-700">Solutions</span></a>
          <a href= "/product"><span class="text-lg  text-purple-700"> Product</span></a>
          <a href= "/resources"><span class="text-lg text-purple-700"> Resources</span></a>
        </div>
        <div className="flex items-center gap-3">
        <a href="/contact"><span className="border-2 border-purple-700 px-5 py-2 rounded-xl text-lg">Contact Us</span></a>
        <a href="/login"><span className="border-2 border-purple-700 px-5 py-2 rounded-xl text-lg">Login</span></a>
        <a href="/signup"><span className="border-2 border-purple-700 px-5 py-2 rounded-xl text-lg">Signup</span></a>
        </div>
      </div>
     
    </div>
    

  );
};

export default Navbar;
