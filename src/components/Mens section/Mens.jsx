// import React from 'react'
import Img1 from "../../assets/mens collection/pic1-Photoroom.png";
import Img2 from "../../assets/shirt/product2-Photoroom.png";
import Img3 from "../../assets/mens collection/pic2-Photoroom.png";
import Img4 from "../../assets/shirt/product4-Photoroom.png";
import Img5 from "../../assets/mens collection/pic3-Photoroom.png";
import Img6 from "../../assets/shirt/product6-Photoroom.png";
import Img7 from "../../assets/mens collection/pic3-Photoroom.png";
import Img8 from "../../assets/mens collection/pic4-Photoroom.png";
import Img9 from "../../assets/mens collection/pic5-Photoroom.png";
import Img10 from "../../assets/mens collection/pic6-Photoroom.png";
import Img11 from "../../assets/mens collection/pic7-Photoroom.png";
import Img12 from "../../assets/mens collection/pic8-Photoroom.png";
import Img13 from "../../assets/mens collection/pic9-Photoroom.png";
import Img14 from "../../assets/mens collection/pic10-Photoroom.png";
import Img15 from "../../assets/mens collection/pic11-Photoroom.png";
import Img16 from "../../assets/mens collection/pic12-Photoroom.png";
import Img17 from "../../assets/mens collection/pic13-Photoroom.png";
import Img18 from "../../assets/mens collection/pic14-Photoroom.png";
import Img19 from "../../assets/mens collection/pic15-Photoroom.png";
import Img20 from "../../assets/mens collection/pic16-Photoroom.png";
import Img21 from "../../assets/mens collection/pic17-Photoroom.png";
import Img22 from "../../assets/mens collection/pic18-Photoroom.png";
import Img23 from "../../assets/mens collection/pic19-Photoroom.png";
import Img24 from "../../assets/mens collection/pic20-Photoroom.png";
import Img25 from "../../assets/mens collection/pic21-Photoroom.png";
import Img26 from "../../assets/mens collection/pic22-Photoroom.png";
import Img27 from "../../assets/mens collection/pic23-Photoroom.png";
import Img28 from "../../assets/mens collection/pic24-Photoroom.png";
// import { FaStar } from "react-icons/fa";
// import Footer from "../Footer/Footer";
import { useState } from "react";
import { BsHeart } from "react-icons/bs";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Noble Monk Men's Solid Casual Shirt",
    price: "₹379",
    category: "Shirts",
  },
  {
    id: 2,
    img: Img2,
    title: "THE ARCHER Men's Slim Fit Vest Pack of 2",
    price: "₹449",
    category: "Shirts",
  },
  {
    id: 3,
    img: Img3,
    title: "SHODOX Mens Solid Dotted Unique Design Tshirt for Men",
    price: "₹349",
    category: "Shirts",
  },
  {
    id: 4,
    img: Img4,
    title: "FEICE Watches for Men Automatic Skeleton Watch",
    price: "₹29,749",
    category: "Watches",
  },
  {
    id: 5,
    img: Img5,
    title: "SMOWKLY Men's Pyjama Set || T-Shirt and Shorts Set for Men",
    price: "₹499",
    category: "Clothing",
  },
  {
    id: 6,
    img: Img6,
    title: "Karsaer Oversized Rimless Sunglasses for Women Men",
    price: "₹2,999",
    category: "Accessories",
  },
  {
    id: 7,
    img: Img7,
    title: "SMOWKLY Men's Pyjama Set || T-Shirt and Shorts Set for Men",
    price: "₹499",
    category: "Clothing",
  },
  {
    id: 8,
    img: Img8,
    title: "Zombom Combo of Men's Solid Cotton Straight Kurta Shirt",
    price: "₹799",
    category: "Shirts",
  },
  {
    id: 9,
    img: Img9,
    title:
      "IndoPrimo Men's Casual Solid Satin Shirt for Men Full Sleeves - Crystal",
    price: "₹399",
    category: "Shirts",
  },
  {
    id: 10,
    img: Img10,
    title:
      "Vogaan Stretchable Lycra Stylish Cargo Pant for Men | Regular Slim Fit",
    price: "₹599",
    category: "Cargo Pants",
  },
  {
    id: 11,
    img: Img11,
    title: "OJASS Men's Lycra Stylish Hooded  Regular Jacket",
    price: "₹699",
    category: "Jacket",
  },
  {
    id: 12,
    img: Img12,
    title: "T2F Unisex-Child Cotton Hooded Neck Sweatshirt",
    price: "₹349",
    category: "Hoodies",
  },
  {
    id: 13,
    img: Img13,
    title: "LookMark Men's Cotton Blend Printed Stitched Half Sleeve Shirt",
    price: "₹369",
    category: "Shirts",
  },
  {
    id: 14,
    img: Img14,
    title: "SOJANYA (Since 1958, Men's cotton Kurta & Pyjama Set",
    price: "₹1,364",
    category: "Ethnic",
  },
  {
    id: 15,
    img: Img15,
    title: "Symbol Premium Mens Smart Shoes,Sneaker Casual Leather",
    price: "₹2,499",
    category: "Shoes",
  },
  {
    id: 16,
    img: Img16,
    title: "ASIAN Men's White Casual Sneaker Shoes,Sneaker  for Men's",
    price: "₹2,999",
    category: "Shoes",
  },
  {
    id: 17,
    img: Img17,
    title: "Liberty Mens Lpmxt-800 Clog",
    price: "₹479",
    category: "Crocks",
  },
  {
    id: 18,
    img: Img18,
    title: "WALKAROO Clogs for Mens Lightweight",
    price: "₹468",
    category: "Crocks",
  },
  {
    id: 19,
    img: Img19,
    title: "Symbol Premium Mens Formal Classic Derby Leather Shoes",
    price: "₹2,399",
    category: "Shoes",
  },
  {
    id: 20,
    img: Img20,
    title: "Pashmoda Men Jamawar Shawl,Luxury Pashmina Shawl, Stole",
    price: "₹1,087",
    category: "Ethnic",
  },
  {
    id: 21,
    img: Img21,
    title: "OLEVS Square Watches for Men Brown Leather ",
    price: "₹4,320",
    category: "Watches",
  },
  {
    id: 22,
    img: Img22,
    title: "BENYAR Luxury casual Party-Wear Watch for Men",
    price: "₹2,799",
    category: "Watches",
  },
  {
    id: 23,
    img: Img23,
    title: "Oct17 Men's Military Quartz Stainless-Steel Wrist Watch",
    price: "₹2,489",
    category: "Watches",
  },
  {
    id: 24,
    img: Img24,
    title: "Dark Wost Mc Stan Rimless Sunglasses For Men",
    price: "₹369",
    category: "Accessories",
  },
  {
    id: 25,
    img: Img25,
    title: "EFERMONE® Efer-7 Polarized Sunglasses For Men ",
    price: "₹489",
    category: "Accessories",
  },
  {
    id: 26,
    img: Img26,
    title: "The Unique Gift Studio Men's Leather Wallet, Tan Color",
    price: "₹314",
    category: "Accessories",
  },
  {
    id: 27,
    img: Img27,
    title: "Bella Vita Luxury Unisex Eau De Parfum Gift Set 4 x 20ml for Men",
    price: "₹499",
    category: "Perfumes",
  },
  {
    id: 28,
    img: Img28,
    title: "Jaguar Classic Black Luxury Eau de Toilette - 100 ml (For Men)",
    price: "₹2,130",
    category: "Perfumes",
  },
];

const Mens = ({ addToCart, addTowhishlist }) => {
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
    <div className="container mb-20">
      {/* Header */}
      <div
        data-aos="fade-up"
        className="container text-center mt-12 md:mt-11 mb-14 max-w-[600px] mx-auto"
      >
        <h1 className="text-4xl font-bold">𝑴𝒆𝒏𝒔 𝑪𝒐𝒍𝒍𝒆𝒄𝒕𝒊𝒐𝒏</h1>
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
          <option value="Shirts">Shirts</option>
          <option value="Watches">Watches</option>
          <option value="Clothing">Clothing</option>
          <option value="Jacket">Jacket</option>
          <option value="Hoodies">Hoodies</option>
          <option value="Ethnic">Ethnic</option>
          <option value="Crocks">Crocks</option>
          <option value="Shoes">Shoes</option>
          <option value="Cargo Pants">Cargo Pants</option>
          <option value="Accessories">Accessories</option>
          <option value="Perfumes">Perfumes</option>
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
  );
};

export default Mens;
