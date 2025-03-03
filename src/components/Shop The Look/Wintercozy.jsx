// import React from 'react'
import Img16 from "../../assets/Shop the look/pic16-Photoroom.png";
import Img17 from "../../assets/Shop the look/pic17-Photoroom.png";
import Img18 from "../../assets/Shop the look/pic18-Photoroom.png";
import Img19 from "../../assets/Shop the look/pic19-Photoroom.png";
import Img20 from "../../assets/Shop the look/pic20-Photoroom.png";
import Img21 from "../../assets/Shop the look/pic21-Photoroom.png";
import Img22 from "../../assets/Shop the look/pic22-Photoroom.png";
import Img23 from "../../assets/Shop the look/pic23-Photoroom.png";
import Img24 from "../../assets/Shop the look/pic24-Photoroom.png";
import Img25 from "../../assets/Shop the look/pic25-Photoroom.png";
import Img26 from "../../assets/Shop the look/pic26-Photoroom.png";
import Img27 from "../../assets/Shop the look/pic27-Photoroom.png";
import Img28 from "../../assets/Shop the look/pic28-Photoroom.png";
import Img29 from "../../assets/Shop the look/pic29-Photoroom.png";
import Img30 from "../../assets/Shop the look/pic30-Photoroom.png";

import { useState } from "react";
import { BsHeart } from "react-icons/bs";

const ProductsData1 = [
  {
    id: 16,
    img: Img16,
    title: "Men Olive Green Hosiery Solid Hooded Sweatshirt",
    price: "₹1,899",
    category: "menwinter",
  },
  {
    id: 17,
    img: Img17,
    title: "Navy Poly Blend Striped Coat",
    price: "₹3,799",
    category: "menwinter",
  },
  {
    id: 18,
    img: Img18,
    title: "Maroon Velvet Zari Embroidered Winter Wear Coat",
    price: "₹3,699",
    category: "menwinter",
  },
  {
    id: 19,
    img: Img19,
    title: "Fawn Ploy Blend Solid Regular Fit Sweatshirt",
    price: "₹1,899",
    category: "menwinter",
  },
  {
    id: 20,
    img: Img20,
    title: "Natural Ploy Blend Textured Regular Fit Sweatshirt",
    price: "₹1,499",
    category: "menwinter",
  },
  {
    id: 21,
    img: Img21,
    title: "Women Full Sleeve Self Design Sweatshirt",
    price: "₹999",
    category: "womenwinter",
  },
  {
    id: 22,
    img: Img22,
    title: "Women Full Sleeve Solid Hooded Sweatshirt",
    price: "₹999",
    category: "womenwinter",
  },
  {
    id: 23,
    img: Img23,
    title: "Women Full Sleeve Color Block Sweatshirt",
    price: "₹799",
    category: "womenwinter",
  },
  {
    id: 24,
    img: Img24,
    title: "women winter jacket Women Solid Quilted Jacket",
    price: "₹999",
    category: "womenwinter",
  },
  {
    id: 25,
    img: Img25,
    title: "Women Full Sleeve Solid Hooded Sweatshirt",
    price: "₹799",
    category: "womenwinter",
  },
  {
    id: 26,
    img: Img26,
    title: "Boys Full Sleeve Color Block Hooded Sweatshirt",
    price: "₹699",
    category: "kidswinter",
  },
  {
    id: 27,
    img: Img27,
    title: "Boys Full Sleeve Printed, Color Block Sweatshirt",
    price: "₹749",
    category: "kidswinter",
  },
  {
    id: 28,
    img: Img28,
    title: "Boys Full Sleeve Printed Hooded Sweatshirt",
    price: "₹749",
    category: "kidswinter",
  },
  {
    id: 29,
    img: Img29,
    title: "Baby Boys & Baby Girls Full Sleeve Self Design Hooded Sweatshirt",
    price: "₹749",
    category: "kidswinter",
  },
  {
    id: 30,
    img: Img30,
    title: "Boys Full Sleeve Printed Sweatshirt",
    price: "₹749",
    category: "kidswinter",
  },
];

const Wintercozy = ({ addToCart, addTowhishlist }) => {
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
      {/* summer vibe */}

      <div data-aos="fade-up" className="container mb-20">
        {/* Header */}
        <div className="container text-center mt-12 md:mt-11 mb-14 max-w-[600px] mx-auto">
          <h1 className="md:text-4xl text-3xl font-bold">
            𝑾𝒊𝒏𝒕𝒆𝒓 𝑪𝒐𝒛𝒚 𝑪𝒍𝒐𝒕𝒉𝒊𝒏𝒈 <br />
            (𝑴𝒆𝒏/𝑾𝒐𝒎𝒆𝒏/𝑲𝒊𝒅)
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
            <option value="menwinter">Winter Cozy clothing (Men)</option>
            <option value="womenwinter">Winter Cozy clothing (Women)</option>
            <option value="kidswinter">Winter Cozy clothing (Kid)</option>
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

export default Wintercozy;
