// import React from "react";
// import footerLogo from "../../assets/logo.png";
// import Banner from "../../assets/website/footer-pattern.jpg";
import { FiShoppingBag } from "react-icons/fi";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";



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
    <div  className="text-white bg-[#212529]">
      <div className="container md:h-[400px]">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-10 pt-8">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-1">
              <FiShoppingBag size="30" />
              {/* <img src={footerLogo} alt="" className="max-w-[50px]" /> */}
              SwiftCart
            </h1>
            <p className="text-gray-500 mx-1">
            𝒘𝒆 𝒃𝒓𝒊𝒏𝒈 𝒚𝒐𝒖 𝒕𝒉𝒆 𝒍𝒂𝒕𝒆𝒔𝒕 𝒇𝒂𝒔𝒉𝒊𝒐𝒏 𝒕𝒓𝒆𝒏𝒅𝒔 𝒂𝒕 𝒖𝒏𝒃𝒆𝒂𝒕𝒂𝒃𝒍𝒆 𝒑𝒓𝒊𝒄𝒆𝒔. 𝑭𝒓𝒐𝒎 𝒔𝒕𝒚𝒍𝒊𝒔𝒉 𝒄𝒂𝒔𝒖𝒂𝒍𝒔 𝒕𝒐 𝒆𝒍𝒆𝒈𝒂𝒏𝒕 𝒇𝒐𝒓𝒎𝒂𝒍𝒔, 𝒐𝒖𝒓 𝒄𝒖𝒓𝒂𝒕𝒆𝒅 𝒄𝒐𝒍𝒍𝒆𝒄𝒕𝒊𝒐𝒏 𝒆𝒏𝒔𝒖𝒓𝒆𝒔 𝒚𝒐𝒖 𝒂𝒍𝒘𝒂𝒚𝒔 𝒔𝒕𝒂𝒚 𝒂𝒉𝒆𝒂𝒅 𝒊𝒏 𝒇𝒂𝒔𝒉𝒊𝒐𝒏. 𝑺𝒉𝒐𝒑 𝒘𝒊𝒕𝒉 𝒄𝒐𝒏𝒇𝒊𝒅𝒆𝒏𝒄𝒆 𝒂𝒏𝒅 𝒓𝒆𝒅𝒆𝒇𝒊𝒏𝒆 𝒚𝒐𝒖𝒓 𝒘𝒂𝒓𝒅𝒓𝒐𝒃𝒆 𝒕𝒐𝒅𝒂𝒚!
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left mb-3">
                  Get to know us
                </h1>
                <ul className="flex flex-col gap-3 text-gray-500 cursor-pointer">
                <a href="#"><li className="flex gap-3 text-md hover:text-primary hover:translate-x-1 duration-300">Home</li></a>
                <a href="#"> <li className="flex text-md hover:text-primary hover:translate-x-1 duration-300">
                About</li></a>
                <a href="#"><li className="flex text-md hover:text-primary hover:translate-x-1 duration-300">
                Contact Us</li></a>
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3 text-gray-500 cursor-pointer">
                <Link to="/mens"><li className="flex gap-3 text-md hover:text-primary hover:translate-x-1 duration-300">Mens Collection</li></Link>
                <Link to="/womens"><li className="flex text-md hover:text-primary hover:translate-x-1 duration-300">Womens Collection</li></Link>
                 <Link to="/kids"><li className="flex text-md hover:text-primary hover:translate-x-1 duration-300">Kids Collection </li></Link>
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Connect With us
                </h1>
                <ul className="flex flex-col gap-3 text-gray-500 cursor-pointer">
                <a href="#"><li className="flex gap-3 text-md hover:text-primary hover:translate-x-1 duration-300">
                  <FaFacebook className="md:text-3xl text-2xl hover:text-primary hover:translate-x-1 duration-300 text-gray-200" />
                Facebook</li></a>
                 <li className="flex gap-3 text-md hover:text-pink-600 hover:translate-x-1 duration-300"><a href="#">
                  <FaInstagram className="md:text-3xl text-2xl hover:text-pink-600 hover:translate-x-1 duration-300 text-gray-200" />
                </a>Instagram</li>
                 <li className="flex gap-3 text-md hover:text-cyan-600 hover:translate-x-1 duration-300"><a href="#">
                  <FaLinkedin className="md:text-3xl text-2xl hover:text-cyan-600 hover:translate-x-1 duration-300 text-gray-200" />
                </a>Linkedin </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      <hr />
      <div className=" md:h-[50px] h-[40px]">
        <div className="md:mt-6 mt-3 md:mx-[440px] md:text-xl text-xs ">© 𝒄𝒐𝒑𝒚𝒓𝒊𝒈𝒉𝒕 @ 2025 𝒃𝒚 <span className="text-primary"> 𝑴𝒓. 𝑨𝒏𝒌𝒊𝒕 𝑩𝒂𝒏𝒔𝒂𝒍</span> | 𝒂𝒍𝒍 𝒓𝒊𝒈𝒉𝒕 𝒓𝒆𝒔𝒆𝒓𝒗𝒆𝒅!</div>
      </div>
    </div>
  );
};

export default Footer;
