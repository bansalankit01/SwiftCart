// import React from "react";
// import footerLogo from "../../assets/logo.png";
// import Banner from "../../assets/website/footer-pattern.jpg";
import { FiShoppingBag } from "react-icons/fi";
// import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
// import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";
import companyname from "../../assets/website/companyname.png";

// const BannerImg = {
//   backgroundImage: `url(${Banner})`,
//   backgroundPosition: "bottom",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   height: "100%",
//   width: "100%",
// };

const Footer = () => {
  return (
    <div className="md:mx-10 mx-10 mt-12 rounded-3xl text-white bg-pink-300/20 dark:bg-rose-100/20 bg-opacity-30 backdrop-blur-lg border border-white/20 dark:border-white/30">
      <div className="container md:h-[300px] ">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-10 pt-8">
          {/* Company Details */}
          <div className="py-8 px-4 md:mt-2">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1">
              <Link to="/" className="font-bold text-xl items-center h-6 flex">
                <img
                  src={companyname}
                  width="270px"
                  className="md:mx-[-25px] mx-[-25px]"
                  alt=""
                />
              </Link>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mx-2 md:mt-6 mt-6">
              𝒘𝒆 𝒃𝒓𝒊𝒏𝒈 𝒚𝒐𝒖 𝒕𝒉𝒆 𝒍𝒂𝒕𝒆𝒔𝒕 𝒇𝒂𝒔𝒉𝒊𝒐𝒏 𝒕𝒓𝒆𝒏𝒅𝒔 𝒂𝒕 𝒖𝒏𝒃𝒆𝒂𝒕𝒂𝒃𝒍𝒆 𝒑𝒓𝒊𝒄𝒆𝒔. 𝑭𝒓𝒐𝒎
              𝒔𝒕𝒚𝒍𝒊𝒔𝒉 𝒄𝒂𝒔𝒖𝒂𝒍𝒔 𝒕𝒐 𝒆𝒍𝒆𝒈𝒂𝒏𝒕 𝒇𝒐𝒓𝒎𝒂𝒍𝒔, 𝒐𝒖𝒓 𝒄𝒖𝒓𝒂𝒕𝒆𝒅 𝒄𝒐𝒍𝒍𝒆𝒄𝒕𝒊𝒐𝒏 𝒆𝒏𝒔𝒖𝒓𝒆𝒔
              𝒚𝒐𝒖 𝒂𝒍𝒘𝒂𝒚𝒔 𝒔𝒕𝒂𝒚 𝒂𝒉𝒆𝒂𝒅 𝒊𝒏 𝒇𝒂𝒔𝒉𝒊𝒐𝒏. 𝑺𝒉𝒐𝒑 𝒘𝒊𝒕𝒉 𝒄𝒐𝒏𝒇𝒊𝒅𝒆𝒏𝒄𝒆 𝒂𝒏𝒅
              𝒓𝒆𝒅𝒆𝒇𝒊𝒏𝒆 𝒚𝒐𝒖𝒓 𝒘𝒂𝒓𝒅𝒓𝒐𝒃𝒆 𝒕𝒐𝒅𝒂𝒚!
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 mt-[-20px] md:mt-[-5px]">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-black dark:text-gray-200 text-xl font-bold sm:text-left mb-3">
                  𝑮𝒆𝒕 𝒕𝒐 𝒌𝒏𝒐𝒘 𝒖𝒔
                </h1>
                <ul className="flex flex-col gap-3 text-gray-900 dark:text-gray-400 cursor-pointer">
                  <Link to="/">
                    <li className="flex gap-3 text-md hover:text-primary hover:translate-x-1 duration-300">
                      Home
                    </li>
                  </Link>
                  <Link to="/about">
                    <li className="flex text-md hover:text-primary hover:translate-x-1 duration-300">
                      About Us
                    </li>
                  </Link>
                  <Link to="/contact">
                    <li className="flex text-md hover:text-primary hover:translate-x-1 duration-300">
                      Contact Us
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-black dark:text-gray-200 text-xl font-bold sm:text-left text-justify mb-3">
                  𝑰𝒎𝒑𝒐𝒓𝒕𝒂𝒏𝒕 𝑳𝒊𝒏𝒌𝒔
                </h1>
                <ul className="flex flex-col gap-3 text-gray-900 dark:text-gray-400 cursor-pointer">
                  <Link to="/mens">
                    <li className="flex gap-3 text-md hover:text-primary hover:translate-x-1 duration-300">
                      Mens Collection
                    </li>
                  </Link>
                  <Link to="/womens">
                    <li className="flex text-md hover:text-primary hover:translate-x-1 duration-300">
                      Womens Collection
                    </li>
                  </Link>
                  <Link to="/kids">
                    <li className="flex text-md hover:text-primary hover:translate-x-1 duration-300">
                      Kids Collection
                    </li>
                  </Link>
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-black dark:text-gray-200 text-xl font-bold sm:text-left mb-3">
                  𝑪𝒐𝒏𝒏𝒆𝒄𝒕 𝑾𝒊𝒕𝒉 𝒖𝒔
                </h1>
                <ul className="flex flex-col gap-3 text-gray-900 dark:text-gray-400 cursor-pointer">
                  <a href="#">
                    <li className="flex gap-3 text-md hover:text-primary hover:translate-x-1 duration-300">
                      <FaFacebook className="md:text-3xl text-2xl hover:text-primary dark:hover:text-primary hover:translate-x-1 duration-300 text-gray-700 dark:text-gray-400" />
                      Facebook
                    </li>
                  </a>
                  <li className="flex gap-3 text-md hover:text-pink-600 hover:translate-x-1 duration-300">
                    <a href="#">
                      <FaInstagram className="md:text-3xl text-2xl hover:text-pink-600 dark:hover:text-pink-600 hover:translate-x-1 duration-300 text-gray-700 dark:text-gray-400" />
                    </a>
                    Instagram
                  </li>
                  <li className="flex gap-3 text-md hover:text-cyan-600 hover:translate-x-1 duration-300">
                    <a href="#">
                      <FaLinkedin className="md:text-3xl text-2xl hover:text-cyan-600 dark:hover:text-cyan-600 hover:translate-x-1 duration-300 text-gray-700 dark:text-gray-400" />
                    </a>
                    Linkedin
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className=" w-[92%]  mx-auto border-gray-300 dark:border-gray-600 my-3" />
      <div className="md:h-[50px] h-[60px]">
        <div className="md:mt-2 mt-5 mx-6 md:mx-[400px] md:text-xl text-sm text-gray-900 dark:text-gray-400">
          © 𝒄𝒐𝒑𝒚𝒓𝒊𝒈𝒉𝒕 @ 2025 𝒃𝒚 <span className="text-sky-600"> 𝑴𝒓. 𝑨𝒏𝒌𝒊𝒕 𝑩𝒂𝒏𝒔𝒂𝒍</span> | 𝒂𝒍𝒍 𝒓𝒊𝒈𝒉𝒕 𝒓𝒆𝒔𝒆𝒓𝒗𝒆𝒅!
        </div>
      </div>
    </div>
  );
};

export default Footer;

