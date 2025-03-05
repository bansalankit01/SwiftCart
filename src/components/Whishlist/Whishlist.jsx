import React from "react";
import { Link } from "react-router-dom";

const Whishlist = ({ whishlistitems, setWhishlistItems }) => {
  const handleRemove = (index) => {
    const updatedWhishlist = whishlistitems.filter((_, i) => i !== index);
    setWhishlistItems(updatedWhishlist);
  };

  return (
    <div data-aos="fade-up" className=" flex flex-col items-center p-10">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-12">𝑴𝒚 𝑾𝒉𝒊𝒔𝒉𝒍𝒊𝒔𝒕</h2>

      {whishlistitems.length === 0 ? (
        <div className="flex flex-col items-center bg-gray-100 darkbg-gray-700 p-10 rounded-xl shadow-lg">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6134/6134346.png"
            alt="Empty Wishlist"
            className="w-40 h-40 opacity-80 mb-4"
          />
          <p className="text-gray-700 dark:text-white text-lg">𝘕𝘰 𝘸𝘪𝘴𝘩𝘭𝘪𝘴𝘵 𝘪𝘵𝘦𝘮𝘴 𝘺𝘦𝘵! 𝘚𝘵𝘢𝘳𝘵 𝘢𝘥𝘥𝘪𝘯𝘨 💖</p>
          <Link to="/">
            <button className="mt-6 px-6 py-3 bg-pink-500 text-white text-lg rounded-lg shadow-md hover:bg-pink-600 transition-all">
              🛍 Shop Now
            </button>
          </Link>
        </div>
      ) : (
        <div data-aos="fade-up" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
          {whishlistitems.map((item, index) => (
            <div
              key={index}
              className="relative rounded-3xl bg-white dark:bg-gray-900 shadow-2xl p-6 flex flex-col items-center transform transition-all duration-500 w-full max-w-[280px] backdrop-blur-lg border border-gray-300 dark:border-gray-700 hover:shadow-3xl hover:-translate-y-2 hover:scale-105 hover:border-indigo-600 hover:ring-2 hover:ring-indigo-400"
            >
            <div className="h-44 flex items-center justify-center overflow-hidden rounded-xl">
              <img
                src={item.img}
                alt={item.title}
                className="w-32 h-54 md:mx-16 object-cover rounded-lg md:mt-2"
              />
            </div>
            <div className="text-center w-full mt-5">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight line-clamp-2">{item.title}</h3>
              <p className="text-gray-400 font-extrabold mt-3 text-lg">{item.price}</p>
            </div>
              <button
                className="absolute -top-0 -right-0 md:mx-[11px] mx-[15px] mt-4 md:mt-3"
                onClick={() => handleRemove(index)}
              >
                ❌
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Whishlist;
