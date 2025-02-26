// import React from 'react'
import Img31 from "../../assets/Shop the look/pic31-Photoroom.png";
import Img32 from "../../assets/Shop the look/pic32-Photoroom.png";
import Img33 from "../../assets/Shop the look/pic33-Photoroom.png";
import Img34 from "../../assets/Shop the look/pic34-Photoroom.png";
import Img35 from "../../assets/Shop the look/pic35-Photoroom.png";
import Img36 from "../../assets/Shop the look/pic36-Photoroom.png";
import Img37 from "../../assets/Shop the look/pic37-Photoroom.png";
import Img38 from "../../assets/Shop the look/pic38-Photoroom.png";
import Img39 from "../../assets/Shop the look/pic39-Photoroom.png";
import Img40 from "../../assets/Shop the look/pic40-Photoroom.png";
import Img41 from "../../assets/Shop the look/pic41-Photoroom.png";
import Img42 from "../../assets/Shop the look/pic42-Photoroom.png";
import Img43 from "../../assets/Shop the look/pic43-Photoroom.png";
import Img44 from "../../assets/Shop the look/pic44-Photoroom.png";
import Img45 from "../../assets/Shop the look/pic30-Photoroom.png";

import { useState } from "react";

const ProductsData1 = [
  {
    id: 31,
    img: Img31,
    title: "NITE FLITE Sangria Mens 100% Cotton Nightwear",
    price: "₹899",
    category: "menautumn",
  },
  {
    id: 32,
    img: Img32,
    title:
      "Dennis Lingo Men's Cotton Solid Slim Fit Casual Shirt with Pocket, Roll Up Full Sleeve Shirt for Formal & Casual Wear",
    price: "₹799",
    category: "menautumn",
  },
  {
    id: 33,
    img: Img33,
    title: "Van Heusen Men's Slim Fit Solid Formal Shirt",
    price: "₹699",
    category: "menautumn",
  },
  {
    id: 34,
    img: Img34,
    title:
      "Cantabil Checkered Navy Blue V Neck Sleeveless Regular Fit Mens Casual Sweater | Casual Winter Sweater for Men | Mens Sweater for Winter Wear (P_MSWT00079_Navy)",
    price: "₹899",
    category: "menautumn",
  },
  {
    id: 35,
    img: Img35,
    title:
      "Dennis Lingo Men's Regular Fit Long Sleeve Button Down Panel Denim Jacket",
    price: "₹899",
    category: "menautumn",
  },
  {
    id: 36,
    img: Img36,
    title:
      "Womens Zipper Jacket Fleece Fabric Sweatshirt Latest Solid Stylish Hoodies Full Sleeves Winter Wear Regular Fit for Women",
    price: "₹999",
    category: "womenautumn",
  },
  {
    id: 37,
    img: Img37,
    title:
      "Women Plus Size Fleece Round Neck Sweatshirt for Women Women's Fleece Round Neck Regular Fit & Plus Size Sweatshirt",
    price: "₹999",
    category: "womenautumn",
  },
  {
    id: 38,
    img: Img38,
    title: "Pistaa's Women Pure Cotton Floral A-Line Printed Salwar Suit Set",
    price: "₹799",
    category: "womenautumn",
  },
  {
    id: 39,
    img: Img39,
    title: "Janasya Women's Woolen Self Design Winter Cardigan Shrug",
    price: "₹999",
    category: "womenautumn",
  },
  {
    id: 40,
    img: Img40,
    title: "Janasya Women's Pure Cotton Block Printed Regular Vest Jacket",
    price: "₹799",
    category: "womenautumn",
  },
  {
    id: 41,
    img: Img41,
    title: "RIYANSHI Boys Party(Festive) Shirt Pant, Bow Tie, Suspenders",
    price: "₹699",
    category: "kidsautumn",
  },
  {
    id: 42,
    img: Img42,
    title:
      "A.R.K. DRESSES Girls Midi Dress | Top & Skirt Combo Dress with Cap & Purse",
    price: "₹749",
    category: "kidsautumn",
  },
  {
    id: 43,
    img: Img43,
    title:
      "FancyDressWale Christmas T-Shirt for Boys & Girls- Unisex with X-MAS Santa Clause Cap",
    price: "₹749",
    category: "kidsautumn",
  },
  {
    id: 44,
    img: Img44,
    title:
      "Laraib Fashion Cotton Girls Maxi Top & Plazo Combo Dress with Cap and Purse",
    price: "₹749",
    category: "kidsautumn",
  },
  {
    id: 45,
    img: Img45,
    title: "Boys Full Sleeve Printed Sweatshirt",
    price: "₹749",
    category: "kidsautumn",
  },
];

const Autumnelegance = ({ addToCart }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOrder, setSortOrder] = useState(""); // "asc" or "desc"
  const [loading, setLoading] = useState(null);

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
      {/* Autumn elegance */}

      <div data-aos="fade-up" className="container mb-20">
        {/* Header */}
        <div className="container text-center mt-12 md:mt-11 mb-14 max-w-[600px] mx-auto">
          <h1 className="md:text-4xl text-3xl font-bold">
            𝑨𝒖𝒕𝒖𝒎𝒏 𝑬𝒍𝒆𝒈𝒂𝒏𝒄𝒆 𝑪𝒍𝒐𝒕𝒉𝒊𝒏𝒈 <br /> (𝑴𝒆𝒏/𝑾𝒐𝒎𝒆𝒏/𝑲𝒊𝒅)
          </h1>
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
            <option value="menautumn">Autumn Elegance clothing (Men)</option>
            <option value="womenautumn">
              Autumn Elegance clothing (Women)
            </option>
            <option value="kidsautumn">Autumn Elegance clothing (Kid)</option>
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

export default Autumnelegance;
