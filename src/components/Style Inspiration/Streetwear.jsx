// import React from 'react'
import Img13 from "../../assets/style inspiration/pic13-Photoroom.png";
import Img14 from "../../assets/style inspiration/pic14-Photoroom.png";
import Img15 from "../../assets/style inspiration/pic15-Photoroom.png";
import Img16 from "../../assets/style inspiration/pic16-Photoroom.png";
import Img17 from "../../assets/style inspiration/pic17-Photoroom.png";
import Img18 from "../../assets/style inspiration/pic18-Photoroom.png";
import Img19 from "../../assets/style inspiration/pic19-Photoroom.png";
import Img20 from "../../assets/style inspiration/pic20-Photoroom.png";
import Img21 from "../../assets/style inspiration/pic21-Photoroom.png";
import Img22 from "../../assets/style inspiration/pic22-Photoroom.png";
import Img23 from "../../assets/style inspiration/pic23-Photoroom.png";
import Img24 from "../../assets/style inspiration/pic24-Photoroom.png";

import { useState } from "react";

const ProductsData = [
  {
    id: 13,
    img: Img13,
    title: "Hobo Shacket // Rosewood",
    price: "₹1,979",
    category: "menstreet",
  },
  {
    id: 14,
    img: Img14,
    title: "Button Down Lightweight Jacket // Olive Green",
    price: "₹1,749",
    category: "menstreet",
  },
  {
    id: 15,
    img: Img15,
    title: "Umsb Varsity Jacket // Hall of Fame",
    price: "₹5,000",
    category: "menstreet",
  },
  {
    id: 16,
    img: Img16,
    title: "Umsb Oversized Tee // Decked Out",
    price: "₹1,249",
    category: "menstreet",
  },
  {
    id: 17,
    img: Img17,
    title: "Bugs Bunny: Own Lane",
    price: "₹1,199",
    category: "womenstreet",
  },
  {
    id: 18,
    img: Img18,
    title: "TSS Originals: Wild",
    price: "₹1,999",
    category: "womenstreet",
  },
  {
    id: 19,
    img: Img19,
    title: "TSS Originals: Butterfly Dreams",
    price: "₹1,999",
    category: "womenstreet",
  },
  {
    id: 20,
    img: Img20,
    title: "Toy Story: Lotso Love",
    price: "₹1,299",
    category: "womenstreet",
  },
  {
    id: 21,
    img: Img21,
    title: "Boys Printed T-Shirt with Shorts Set",
    price: "₹1,189",
    category: "kidsstreet",
  },
  {
    id: 22,
    img: Img22,
    title: "Boys Black Printed T-Shirt with Shorts Set",
    price: "₹999",
    category: "kidsstreet",
  },
  {
    id: 23,
    img: Img23,
    title: "Boys White Printed T-Shirt with Shorts Set",
    price: "₹899",
    category: "kidsstreet",
  },
  {
    id: 24,
    img: Img24,
    title: "Boys Diamond Print T-Shirt with Shorts",
    price: "₹1,749",
    category: "kidsstreet",
  },
];

const Streetwear = ({ addToCart }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState(""); // "asc" or "desc"
  const [loading, setLoading] = useState(null);

  // Filter & Search Logic
  const filteredProducts = ProductsData.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (category === "All" || product.category === category)
    );
  });

  // Sorting Logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  const handleAddToCart = (product) => {
    setLoading(product.id);
    setTimeout(() => {
      addToCart(product);
      setLoading(null);
    }, 500);
  };

  return (
    <div>
      {/* street wear */}

      <div data-aos="fade-up" className="container mb-20">
        {/* Header */}
        <div className="container text-center mt-12 md:mt-11 mb-14 max-w-[600px] mx-auto">
          <h1 className="text-4xl font-bold">𝑺𝒕𝒓𝒆𝒆𝒕 𝑾𝒆𝒂𝒓</h1>
        </div>

        {/* Search & Filter Options */}
        <div data-aos="fade-up" className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16 md:mb-16">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search Products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border p-2 rounded-md w-full md:w-1/3 dark:bg-slate-800"
          />

          {/* Category Filter */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border p-2 rounded-md dark:bg-slate-800 md:w-[255px] w-full"
          >
            <option value="All">All Categories</option>
            <option value="menstreet">Mens Street Style</option>
            <option value="womenstreet">Womens Street Style</option>
            <option value="kidsstreet">Kids Street Style</option>
          </select>

          {/* Sorting Dropdown */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="border p-2 rounded-md dark:bg-slate-800 md:w-[255px] w-full"
          >
            <option value="">Sort By</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>

        {/* Product List */}

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
          {sortedProducts.length > 0 ? (
            sortedProducts.map((product) => (
              <div
                key={product.id}
                className="relative rounded-3xl bg-white dark:bg-gray-900 shadow-2xl p-6 flex flex-col items-center transform transition-all duration-500 w-full max-w-[280px] backdrop-blur-lg border border-gray-300 dark:border-gray-700 hover:shadow-3xl hover:-translate-y-2 hover:scale-105 hover:border-indigo-600 hover:ring-2 hover:ring-indigo-400"
              >
                <div className="h-44 flex items-center justify-center overflow-hidden rounded-xl">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="max-h-40 object-contain drop-shadow-lg transition-all duration-500 hover:scale-110 hover:rotate-2"
                  />
                </div>
                <div className="text-center w-full mt-5">
                  <h1 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight line-clamp-2">
                    {product.title}
                  </h1>
                  <p className="text-red-500 font-extrabold mt-3 text-lg">
                    {product.price}
                  </p>
                  <button
                    className="mt-5 w-full py-3 px-6 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white flex items-center justify-center gap-2 transition-all duration-500 shadow-lg hover:shadow-xl dark:hover:bg-gray-800 dark:hover:text-white relative overflow-hidden before:absolute before:w-full before:h-full before:bg-white/20 before:top-0 before:left-0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
                    onClick={() => handleAddToCart(product)}
                    disabled={loading === product.id}
                  >
                    {loading === product.id ? "Adding..." : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Streetwear;
