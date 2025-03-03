// import React from 'react'
import Img1 from "../../assets/style inspiration/pic1-Photoroom.png";
import Img2 from "../../assets/style inspiration/pic2-Photoroom.png";
import Img3 from "../../assets/style inspiration/pic3-Photoroom.png";
import Img4 from "../../assets/style inspiration/pic4-Photoroom.png";
import Img5 from "../../assets/style inspiration/pic5-Photoroom.png";
import Img6 from "../../assets/style inspiration/pic6-Photoroom.png";
import Img7 from "../../assets/style inspiration/pic7-Photoroom.png";
import Img8 from "../../assets/style inspiration/pic8-Photoroom.png";
import Img9 from "../../assets/style inspiration/pic9-Photoroom.png";
import Img10 from "../../assets/style inspiration/pic10-Photoroom.png";
import Img11 from "../../assets/style inspiration/pic11-Photoroom.png";
import Img12 from "../../assets/style inspiration/pic12-Photoroom.png";

import { useState } from "react";
import { BsHeart } from "react-icons/bs";

const ProductsData1 = [
  {
    id: 1,
    img: Img1,
    title: "CELIO natural cream casual printed shirt for men",
    price: "₹2,379",
    category: "mencasual",
  },
  {
    id: 2,
    img: Img2,
    title: "MUFTI peach check cotton shirt for men",
    price: "₹3,449",
    category: "mencasual",
  },
  {
    id: 3,
    img: Img3,
    title: "RIVER BLUE brown casaul cotton shirt for men",
    price: "₹1,349",
    category: "mencasual",
  },
  {
    id: 4,
    img: Img4,
    title: "ARROW SPORT olive stripe shirt for men",
    price: "₹2,749",
    category: "mencasual",
  },
  {
    id: 5,
    img: Img5,
    title: "LEVIS pink cotton t-shirt for women",
    price: "₹1,499",
    category: "womencasual",
  },
  {
    id: 6,
    img: Img6,
    title: "LEVIS light pink cotton striped t-shirt",
    price: "₹2,999",
    category: "womencasual",
  },
  {
    id: 7,
    img: Img7,
    title: "LEVIS cotton white t-shirt with brand name",
    price: "₹999",
    category: "womencasual",
  },
  {
    id: 8,
    img: Img8,
    title: "LEVIS women cotton peach t-shirt",
    price: "₹1,799",
    category: "womencasual",
  },
  {
    id: 9,
    img: Img9,
    title: "RUFF white linen printed shirt for boys",
    price: "₹1399",
    category: "kidscasual",
  },
  {
    id: 10,
    img: Img10,
    title: "TREND orange cotton polo t-shirt",
    price: "₹799",
    category: "kidscasual",
  },
  {
    id: 11,
    img: Img11,
    title: "DEAL green cotton stripe top",
    price: "₹699",
    category: "kidscasual",
  },
  {
    id: 12,
    img: Img12,
    title: "DEAL white and blue color block crop top",
    price: "₹749",
    category: "kidscasual",
  },
];

const Casualwear = ({ addToCart, addTowhishlist }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState(""); // "asc" or "desc"
  const [loading, setLoading] = useState(null);
   const [wishlistloading, setWishlistLoading] = useState(null);
  
    const handleAddToWishlist = (product) => {
      setWishlistLoading(product.id);
      setTimeout(() => {
        addTowhishlist(product);
        setWishlistLoading(null);
      }, 500);
    };

  // Filter & Search Logic
  const filteredProducts = ProductsData1.filter((product) => {
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
      {/* casual wear */}

      <div data-aos="fade-up" className="container mb-20">
        {/* Header */}
        <div className="container text-center mt-12 md:mt-11 mb-14 max-w-[600px] mx-auto">
          <h1 className="text-4xl font-bold">𝑪𝒂𝒔𝒖𝒂𝒍 𝑾𝒆𝒂𝒓</h1>
        </div>

        {/* Search & Filter Options */}
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16 md:mb-16"
        >
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
            <option value="mencasual">Mens Casual</option>
            <option value="womencasual">Womens Casual</option>
            <option value="kidscasual">Kids Casual</option>
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
                    className=" text-black dark:text-white py-3 rounded-lg mt-5 w-full flex items-center justify-center gap-2 dark:border-2 dark:hover:text-white transition-all duration-500 shadow-lg hover:shadow-xl"
                    onClick={() => handleAddToWishlist(product)}
                    disabled={wishlistloading === product.id}
                  >
                    <BsHeart className="hidden sm:inline" />
                    {wishlistloading === product.id
                      ? "Adding..."
                      : "Add to Wishlist"}
                  </button>
                  <button
                    className="mt-5 w-full py-3  rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white flex items-center justify-center gap-2 transition-all duration-500 shadow-lg hover:shadow-xl dark:hover:bg-gray-800 dark:hover:text-white relative overflow-hidden before:absolute before:w-full before:h-full before:bg-white/20 before:top-0 before:left-0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
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

export default Casualwear;
