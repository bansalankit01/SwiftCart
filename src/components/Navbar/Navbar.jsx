import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx"; // Menu icon
import DarkMode from "./DarkMode";
import companyname from "../../assets/website/companyname.png";

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
  const cartItemCount = cartItems.length;
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="z-40 sticky top-0">
      {/* ===== Upper Navbar ===== */}

      <div className="shadow-lg border border-white/30 dark:border-slate-700/50 bg-pink-500/20 dark:bg-rose-200/20 backdrop-blur-xl dark:text-white duration-200 rounded-sm">
        <div className="container flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl items-center h-6 flex">
            <img
              src={companyname}
              className="md:w-[230px] w-[225px] mx-[-25px]"
              alt=""
            />
          </Link>

          {/* Cart, Dark Mode, Login/Signup (Right Aligned) */}
          <div className="flex items-center gap-3">
            {/* Search Bar (Centered) */}
            <div className="hidden md:flex justify-center flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[300px] rounded-md md:h-9 border border-gray-300 py-1 px-2 text-sm focus:outline-none dark:border-gray-500 dark:bg-slate-800"
                />
                <IoMdSearch className="text-slate-10 absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
            </div>

            {/* Cart Button */}
            <div className="relative">
              <Link
                to="/cart"
                className="text-white py-2 px-1 rounded-lg flex items-center"
              >
                <FaCartShopping className="text-3xl text-black dark:text-white" />
              </Link>
              {cartItemCount > 0 && (
                <span className="absolute -top-0 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
            </div>

            {/* Dark Mode */}
            <DarkMode />

            {/* Login / Signup (Hidden on Mobile) */}
            <div className="hidden md:flex gap-2">
              <button className="border border-black dark:border-white px-4 py-1 rounded">
                Login
              </button>
              <button className="border border-black dark:border-white px-4 py-1 rounded">
                SignUp
              </button>
            </div>

            {/* Mobile Menu Button (Only on Mobile) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden text-black dark:text-white text-3xl"
            >
              <RxHamburgerMenu />
            </button>
          </div>
        </div>
      </div>

      {/* ===== Lower Navbar ===== */}

      <div className="shadow-lg border border-white/30 dark:border-slate-700/50 bg-pink-300/20 dark:bg-rose-100/20 backdrop-blur-xl dark:text-white duration-200 rounded-sm mt-1">
        <div className="sm:flex justify-center hidden">
          <ul className="sm:flex items-center md:gap-12 py-2">
            {Menu.map((data) => (
              <li key={data.id}>
                <Link
                  to={data.link}
                  className="inline-block px-8 hover:text-primary duration-200"
                >
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

        {/*  ===== Mobile Menu ===== */}

        <div
          className={`sm:hidden ${
            menuOpen ? "block" : "hidden"
          } bg-gray-100 dark:bg-slate-900 py-4`}
        >
          <ul className="flex flex-col items-center gap-5 w-full">
            {/* Search */}
            <li>
              <input
                type="text"
                placeholder="Search"
                className="w-[300px] rounded-lg border border-gray-300 py-1 px-2 text-sm focus:outline-none dark:border-gray-500 dark:bg-slate-800"
              />
            </li>

            <li>
            <button className="border border-black dark:border-white mx-4 px-4 py-1 rounded">
                Login
              </button>
              <button className="border border-black dark:border-white px-4 py-1 rounded">
                SignUp
              </button>
            </li>

            {/* Nav Links */}
            {Menu.map((data) => (
              <li key={data.id}>
                <Link
                  to={data.link}
                  className="inline-block px-4 hover:text-primary duration-200"
                >
                  {data.name}
                </Link>
              </li>
            ))}

            {/* Dark Mode
            <li>
              <DarkMode />
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
