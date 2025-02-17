import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { FiShoppingBag } from "react-icons/fi";
// import logo from "../../assets/website/logo.png"
import companyname from "../../assets/website/companyname.png"

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Men's", link: "/mens" },
  { id: 3, name: "Women's", link: "/womens" },
  { id: 4, name: "Kids", link: "/kids" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Deal's & Offer", sectionId: "trendingdeal" },
  { id: 2, name: "Best Selling Picks", sectionId: "bestselling" },
];

const Navbar = ({ cartItems }) => {

  const cartItemCount = cartItems.length; // Get number of items in cart
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Function to navigate to Home and scroll to the section
  const handleNavigateAndScroll = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 500);
    } else {
      scrollToSection(sectionId);
    }
    setMenuOpen(false);
  };

  // Function to smoothly scroll to a section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="shadow-md bg-white dark:bg-slate-800 dark:text-white duration-200 z-40 h-[125px] sticky top-0">
      {/* Upper Navbar */}
      <div className="bg-cyan-200 dark:bg-cyan-800 py-5">
        <div className="container flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl items-center h-6 flex">
            {/* <img src={logo} width="58px"  /> */}
            <img src={companyname} width="230px" className="md:mx-[-35px] mx-[-18px]" alt="" />
          </Link>

          {/* Search Bar */}
          <div className="flex justify-between items-center gap-4">
            {/* Mobile Cart & Menu */}
            <div className="sm:hidden flex gap-3">
              {/* Cart Button */}
              <div className="relative">
                <Link to="/cart" className="bg-primary text-white py-2 px-4 rounded-lg flex items-center">
                  <FaCartShopping className="text-xl text-white" />
                </Link>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </div>
              
              {/* Menu Button */}
              <button onClick={() => setMenuOpen(!menuOpen)} className="text-4xl font-bold mt-[-4px] mx-3">
                {menuOpen ? "✖" : "☰"}
              </button>
            </div>

            {/* Desktop Search Bar */}
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-slate-800"
              />
              <IoMdSearch className="text-slate-10 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
          </div>

          {/* Desktop Cart & Dark Mode */}
          <div className="hidden sm:flex justify-between items-center gap-4">
            {/* Cart Button */}
            <div className="relative">
              <Link to="/cart" className="bg-primary text-white  py-1 px-4 rounded-lg flex items-center">
                <FaCartShopping className="text-xl text-white" />
              </Link>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </div>

            <DarkMode />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`sm:hidden ${menuOpen ? "block" : "hidden"}`}>
        <div className="bg-gray-100 dark:bg-slate-900 py-4">
          <ul className="flex flex-col items-center gap-5 w-full">
            {/* Search */}
            <li>
              <input
                type="text"
                placeholder="Search"
                className="w-[200px] rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-slate-800"
              />
            </li>

            {/* Nav Links */}
            {Menu.map((data) => (
              <li key={data.id}>
                <Link to={data.link} className="inline-block px-4 hover:text-primary duration-200">
                  {data.name}
                </Link>
              </li>
            ))}

            {/* Dropdown */}
            <li className="group relative cursor-pointer">
              <a className="flex items-center gap-[2px] py-2">
                Trending Products
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </a>
              <div className="absolute z-50 hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <button
                        onClick={() => handleNavigateAndScroll(data.sectionId)}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20 text-left"
                      >
                        {data.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </li>

            {/* Dark Mode Toggle */}
            <li>
              <DarkMode />
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop Navbar Links */}
      <div className="sm:flex justify-center hidden">
        <ul className="sm:flex items-center md:gap-12 mt-1.5">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link to={data.link} className="inline-block px-8 hover:text-primary duration-200">
                {data.name}
              </Link>
            </li>
          ))}

          {/* Dropdown */}
          <li className="group relative cursor-pointer">
            <a className="flex items-center gap-[2px] py-2">
              Trending Products
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </a>
            <div className="absolute z-50 hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <button
                      onClick={() => handleNavigateAndScroll(data.sectionId)}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 text-left"
                    >
                      {data.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
