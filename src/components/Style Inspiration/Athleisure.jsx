import React from "react";
import Img37 from "../../assets/style inspiration/pic37-Photoroom.png";
import Img38 from "../../assets/style inspiration/pic38-Photoroom.png";
import Img39 from "../../assets/style inspiration/pic39-Photoroom.png";
import Img40 from "../../assets/style inspiration/pic40-Photoroom.png";
import Img41 from "../../assets/style inspiration/pic41-Photoroom.png";
import Img42 from "../../assets/style inspiration/pic42-Photoroom.png";
import Img43 from "../../assets/style inspiration/pic43-Photoroom.png";
import Img44 from "../../assets/style inspiration/pic44-Photoroom.png";
import Img45 from "../../assets/style inspiration/pic45-Photoroom.png";
import Img46 from "../../assets/style inspiration/pic46-Photoroom.png";
import Img47 from "../../assets/style inspiration/pic47-Photoroom.png";
import Img48 from "../../assets/style inspiration/pic48-Photoroom.png";

import { useState } from "react";
import { BsHeart } from "react-icons/bs";

const ProductsData = [
  {
    id: 37,
    img: Img37,
    title: "Van Heusen Cotton Blend Men Hooded Sweatshirt",
    price: "₹1,779",
    category: "mensAthleisure",
  },
  {
    id: 38,
    img: Img38,
    title:
      "WORK FOR IT Mens Workout Shorts Quick Dry Gym Shorts for Men Athletic Running Shorts with Zipper Pockets",
    price: "₹449",
    category: "mensAthleisure",
  },
  {
    id: 39,
    img: Img39,
    title: "Aventura Outfitters Men's Regular Fit T-Shirt(Pack of 4)",
    price: "₹1,149",
    category: "mensAthleisure",
  },
  {
    id: 40,
    img: Img40,
    title: "GRECIILOOKS Track Pant for Men",
    price: "₹499",
    category: "mensAthleisure",
  },
  {
    id: 41,
    img: Img41,
    title:
      "Van Heusen Women Lounge Regular Fit T-Shirt - 100% Supima Cotton - Round Neck, Short Sleeve, Superior Drape, Ultra Soft",
    price: "₹799",
    category: "womensAthleisure",
  },
  {
    id: 42,
    img: Img42,
    title:
      "Keepfit Rapid Dry N9 Antibacterial Athleisure Training OR Gym Sporty Jackets",
    price: "₹999",
    category: "womensAthleisure",
  },
  {
    id: 43,
    img: Img43,
    title: "Invincible Women’s Trending Athleisure Micro Satin Jogger Pants",
    price: "₹999",
    category: "womensAthleisure",
  },
  {
    id: 44,
    img: Img44,
    title:
      "Athleisure Set with Cap, Sunglasses, Bracelet, Face Mask, Arm Sleeves, 5 Pieces, Black",
    price: "₹799",
    category: "womensAthleisure",
  },
  {
    id: 45,
    img: Img45,
    title:
      "Van Heusen Boys Smart Tech Shorts - Easy Stain Release, Anti Stat, Ultra Soft",
    price: "₹489",
    category: "kidsAthleisure",
  },
  {
    id: 46,
    img: Img46,
    title: "Van Heusen Boy's Regular Sweatpants",
    price: "₹799",
    category: "kidsAthleisure",
  },
  {
    id: 47,
    img: Img47,
    title: "Van Heusen Boy's Regular Track Pants",
    price: "₹699",
    category: "kidsAthleisure",
  },
  {
    id: 48,
    img: Img48,
    title: "Van Heusen Boy's Regular Fit Track Pants",
    price: "₹749",
    category: "kidsAthleisure",
  },
];

const Athleisure = ({ addToCart, addTowhishlist }) => {
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
      {/* Athleisure */}

      <div data-aos="fade-up" className="container mb-20">
        {/* Header */}
        <div className="container text-center mt-12 md:mt-11 mb-14 max-w-[600px] mx-auto">
          <h1 className="text-4xl font-bold">𝑨𝒕𝒉𝒍𝒆𝒊𝒔𝒖𝒓𝒆</h1>
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
            <option value="mensAthleisure">Mens Athleisure</option>
            <option value="womensAthleisure">Womens Athleisure</option>
            <option value="kidsAthleisure">Kids Athleisure</option>
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
                    className="mt-5 w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white flex items-center justify-center gap-2 transition-all duration-500 shadow-lg hover:shadow-xl dark:hover:bg-gray-800 dark:hover:text-white relative overflow-hidden before:absolute before:w-full before:h-full before:bg-white/20 before:top-0 before:left-0 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500"
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

export default Athleisure;
