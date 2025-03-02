import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cart = ({ cartItems, setCartItems }) => {
  const handleRemove = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };

  return (
    <div className="p-8 mx-auto max-w-2xl">
      <h2
        data-aos="fade-up"
        className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-14 mt-2 md:mt-5"
      >
        🛒 𝒀𝒐𝒖𝒓 𝑪𝒂𝒓𝒕
      </h2>

      {cartItems.length === 0 ? (
        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 p-10 rounded-lg shadow-lg"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
            alt="Empty Cart"
            className="w-40 h-40 opacity-70 mb-4"
          />
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            𝘠𝘰𝘶𝘳 𝘤𝘢𝘳𝘵 𝘪𝘴 𝘧𝘦𝘦𝘭𝘪𝘯𝘨 𝘭𝘰𝘯𝘦𝘭𝘺! 𝘈𝘥𝘥 𝘴𝘰𝘮𝘦 𝘪𝘵𝘦𝘮𝘴.
          </p>

          <Link to="/">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white py-3 mx-6 rounded-lg mt-5 w-full flex items-center justify-center gap-2 dark:hover:bg-white dark:hover:text-white transition-all duration-500 shadow-md hover:shadow-lg">
              Browse Products
            </button>
          </Link>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6">
          <ul data-aos="fade-up" className="space-y-6">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row items-center sm:justify-between border-b pb-4 gap-4"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-25 object-cover rounded-md shadow-md"
                  />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white md:mx-2">
                      {item.title}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:mx-2 md:mt-2 mt-2">
                      ${item.price}
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-auto flex justify-end sm:justify-start">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition w-full  sm:w-auto"
                    onClick={() => handleRemove(index)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="flex justify-between items-center gap-10 mt-6">
            <Link to="/">
              <button
                data-aos="fade-up"
                className="bg-gray-800 dark:bg-primary text-white px-5 py-2 rounded-md hover:bg-gray-700 transition"
              >
                Continue Shopping
              </button>
            </Link>
            <Link to="/">
              <button
                data-aos="fade-up"
                className="bg-green-500 text-white px-5 py-2 rounded-md hover:bg-green-600 transition"
              >
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
