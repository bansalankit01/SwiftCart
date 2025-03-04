import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import DarkMode from "./DarkMode";
import companyname from "../../assets/website/companyname.png";
// import { FaUserCircle } from "react-icons/fa";
import { SlUser } from "react-icons/sl";
import { BsHeart } from "react-icons/bs";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Men's", link: "/mens" },
  { id: 3, name: "Women's", link: "/womens" },
  { id: 4, name: "Kids", link: "/kids" },
];

const DropdownLinks = [
  { id: 1, name: "Trending Deal's & Offer", sectionId: "trendingdeal" },
  { id: 2, name: "Best Selling Picks", sectionId: "bestselling" },
  { id: 3, name: "Trending colors", sectionId: "trendingcolor" },
];

const Navbar = ({ cartItems, whishlistitems }) => {
  const cartItemCount = cartItems.length;
  const wishlistItemCount = whishlistitems.length;
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to section on click
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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="z-40 sticky top-0">
      {/* ===== Upper Navbar ===== */}
      <div className="shadow-lg border border-white/30 dark:border-slate-700/50 bg-pink-500/20 dark:bg-teal-200/20 backdrop-blur-xl dark:text-white duration-200 rounded-sm relative z-[1000]">
        <div className="container flex justify-between items-center py-4 relative">
          {/* Mobile Menu Button (Only on Mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden text-black dark:text-white text-3xl"
          >
            <RxHamburgerMenu />
          </button>

          {/* Logo */}
          <Link to="/" className="font-bold text-xl items-center h-6 flex">
            <img
              src={companyname}
              className="md:w-[230px] w-[225px] md:mx-[-25px] mx-[-40px]"
              alt=""
            />
          </Link>

          {/* Cart, Dark Mode, Login/Signup (Right Aligned) */}

          <div className="flex items-center md:gap-8">
            {/* Search Bar (Centered) */}
            {/* <div className="hidden md:flex justify-center flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[300px] rounded-md md:h-9 border border-gray-300 py-1 px-2 text-sm focus:outline-none dark:border-gray-500 dark:bg-slate-800"
                />
                <IoMdSearch className="text-slate-10 absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
            </div> */}

            {/* Login / Signup */}
            <div className="relative" ref={dropdownRef}>
              <button
                className="flex items-center text-2xl py-2 md:mx-4"
                onClick={() => setIsOpen(!isOpen)}
              >
                <SlUser />
              </button>
              {isOpen && (
                <div className="absolute right-0 mt-3 w-[200px] rounded-md bg-white p-3 text-black shadow-xl border border-gray-300 z-[9999]">
                  <div className="flex flex-col items-center gap-2">
                    <Link to="/login">
                      <button className="border border-black dark:border-black px-4 py-2 rounded w-[180px] hover:bg-gray-300">
                        Login
                      </button>
                    </Link>
                    <Link to="/signup">
                      <button className="border border-black dark:border-black px-4 py-2 rounded w-[180px] hover:bg-gray-300">
                        SignUp
                      </button>
                    </Link>
                  </div>
                </div>
              )}
              {/* Hide Profile text on mobile */}
              <div className="mt-[-8px]">
                <span className="hidden sm:inline md:mt-[-10px] md:mx-1 text-sm text-black dark:text-white">
                  𝑷𝒓𝒐𝒇𝒊𝒍𝒆
                </span>
              </div>
            </div>

            {/* Wishlist */}
            <div className="relative">
              <Link
                to="/whishlist"
                className="text-white py-2 px-1 rounded-lg flex items-center"
              >
                <BsHeart className="text-2xl text-black dark:text-white mx-4" />
              </Link>
              {wishlistItemCount > 0 && (
                <span className="absolute -top-0 -right-0 mx-[10px] bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {wishlistItemCount}
                </span>
              )}
              {/* Hide Wishlist text on mobile */}
              <div className="mt-[-8px]">
                <span className="hidden sm:inline md:mt-[-10px] text-md text-black dark:text-white">
                  𝑾𝒊𝒔𝒉𝒍𝒊𝒔𝒕
                </span>
              </div>
            </div>

            {/* Cart */}
            <div className="relative">
              <Link
                to="/cart"
                className="text-white py-2 px-1 rounded-lg flex items-center"
              >
                <FaCartShopping className="text-2xl text-black dark:text-white" />
              </Link>
              {cartItemCount > 0 && (
                <span className="absolute -top-0 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItemCount}
                </span>
              )}
              {/* Hide Cart text on mobile */}
              <div className="mt-[-8px]">
                <span className="hidden sm:inline md:mt-[-10px] text-md text-black dark:text-white">
                  𝑪𝒂𝒓𝒕
                </span>
              </div>
            </div>

            <div className="hidden sm:block">
              <DarkMode />
            </div>
          </div>
        </div>
      </div>

      {/* ===== Lower Navbar ===== */}
      <div className="shadow-lg  border border-white/30 dark:border-slate-700/50 bg-pink-300/20 dark:bg-teal-100/20 backdrop-blur-xl dark:text-white duration-200 rounded-sm mt-1 relative z-[500]">
        <div className="sm:flex justify-between  md:mx-[310px] hidden">
          <ul className="sm:flex items-center md:gap-12 py-2 ">
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
      </div>

      {/* Mobile view */}
      <div
        className={`sm:hidden ${
          menuOpen ? "block" : "hidden"
        } bg-gray-100 dark:bg-slate-900 py-4`}
      >
        <ul className="flex flex-col items-left mx-1 gap-5 w-full">
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

          {/* Dropdown */}
          <li className="group relative cursor-pointer mx-4">
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

          {/* Dark Mode (Only in Mobile Menu) */}
          <li className="mx-4">
            <DarkMode />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
