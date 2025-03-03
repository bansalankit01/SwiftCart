// import React from "react";
import Img46 from "../../assets/Shop the look/pic46-Photoroom.png";
import Img47 from "../../assets/Shop the look/pic47-Photoroom.png";
import Img48 from "../../assets/Shop the look/pic48-Photoroom.png";
import Img49 from "../../assets/Shop the look/pic49-Photoroom.png";
import Img50 from "../../assets/Shop the look/pic50-Photoroom.png";
import Img51 from "../../assets/Shop the look/pic51-Photoroom.png";
import Img52 from "../../assets/Shop the look/pic52-Photoroom.png";

import { useState } from "react";
import { BsHeart } from "react-icons/bs";

const ProductsData1 = [
  {
    id: 46,
    img: Img46,
    title:
      "MAGIC Unisex Waterproof Long Coat Raincoat for Men with Adjustable Hood (Size: Universal,Color-White)",
    price: "₹299",
    category: "menraincoat",
  },
  {
    id: 47,
    img: Img47,
    title:
      "Dream Corporate World Magic Umbrella with Flower Design Rainproof Colour Changing Lightweight Compact 3 Fold Men/Women UV Protection Monsoon/Rainy & Sun Umbrella (Multicolour)",
    price: "₹399",
    category: "umbrella",
  },
  {
    id: 48,
    img: Img48,
    title:
      "Prokick Kids Waterproof Rain Jacket | Raincoat With Hood for Unisex Kids | Boy's/Girl's waterproof Raincoat/Rainwear/Overcoat | Rain Standard Length Jacket With Carry Pouch, Multicolor",
    price: "₹699",
    category: "kidsraincoat",
  },
  {
    id: 49,
    img: Img49,
    title:
      "INFISPACE Boy's & Girl's Waterproof Anti-Skid Cartoon Rain Boots | Rain Shoes for Kids",
    price: "₹499",
    category: "kidsshoes",
  },
  {
    id: 50,
    img: Img50,
    title: "SPARX Men's Ss 101 Sport Sandal",
    price: "₹599",
    category: "sandal",
  },
  {
    id: 51,
    img: Img51,
    title:
      "TRAWOC PEAKPRO 75 Liter Travel Backpack for Hiking Trekking Bag Camping Rucksack with Laptop Compartment/Rain Cover/Shoe Compartment BHK002, 3 Year Warranty, Grey",
    price: "₹1,999",
    category: "waterproofbackpack",
  },
  {
    id: 52,
    img: Img52,
    title:
      "Magic Transparent Pinted Raincoat for Womens|Girl's with Skart(Green)",
    price: "₹999",
    category: "womenraincoat",
  },
];

const Monsoonmagic = ({ addToCart, addTowhishlist }) => {
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
      {/* Autumn elegance */}

      <div data-aos="fade-up" className="container mb-20">
        {/* Header */}
        <div className="container text-center mt-12 md:mt-11 mb-14 max-w-[600px] mx-auto">
          <h1 className="md:text-4xl text-3xl font-bold">
            𝑴𝒐𝒏𝒔𝒐𝒐𝒏 𝑬𝒔𝒔𝒆𝒏𝒕𝒊𝒂𝒍 𝑻𝒉𝒊𝒏𝒈𝒔 <br /> (𝑴𝒆𝒏/𝑾𝒐𝒎𝒆𝒏/𝑲𝒊𝒅)
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
            <option value="menraincoat">Rain Coat (Men)</option>
            <option value="womenraincoat">Rain Coat (Women)</option>
            <option value="kidsraincoat">Rain Coat (kids)</option>
            <option value="waterproofbackpack">Waterproof Bag Pack</option>
            <option value="sandal">Sandals</option>
            <option value="kidsshoes">Waterproof Shoes (Kids)</option>
            <option value="umbrella">Umbrella</option>
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

export default Monsoonmagic;
