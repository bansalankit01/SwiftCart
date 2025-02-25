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
import Img25 from "../../assets/style inspiration/pic25-Photoroom.png";
import Img26 from "../../assets/style inspiration/pic26-Photoroom.png";
import Img27 from "../../assets/style inspiration/pic27-Photoroom.png";
import Img28 from "../../assets/style inspiration/pic28-Photoroom.png";
import Img29 from "../../assets/style inspiration/pic29-Photoroom.png";
import Img30 from "../../assets/style inspiration/pic30-Photoroom.png";
import Img31 from "../../assets/style inspiration/pic31-Photoroom.png";
import Img32 from "../../assets/style inspiration/pic32-Photoroom.png";
import Img33 from "../../assets/style inspiration/pic33-Photoroom.png";
import Img34 from "../../assets/style inspiration/pic34-Photoroom.png";
import Img35 from "../../assets/style inspiration/pic35-Photoroom.png";
import Img36 from "../../assets/style inspiration/pic36-Photoroom.png";
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
    category: "womencasual"
  },
  {
    id: 6,
    img: Img6,
    title: "LEVIS light pink cotton striped t-shirt",
    price: "₹2,999",
    category: "womencasual"
  },
  {
    id: 7,
    img: Img7,
    title: "LEVIS cotton white t-shirt with brand name",
    price: "₹999",
    category: "womencasual"
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
    category: "kidscasual"
  },
  {
    id: 11,
    img: Img11,
    title: "DEAL green cotton stripe top",
    price: "₹699",
    category: "kidscasual"
  },
  {
    id: 12,
    img: Img12,
    title: "DEAL white and blue color block crop top",
    price: "₹749",
    category: "kidscasual"
  },
  
];
const ProductsData2 = [
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
      category: "womenstreet"
    },
    {
      id: 18,
      img: Img18,
      title: "TSS Originals: Wild",
      price: "₹1,999",
      category: "womenstreet"
    },
    {
      id: 19,
      img: Img19,
      title: "TSS Originals: Butterfly Dreams",
      price: "₹1,999",
      category: "womenstreet"
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
      category: "kidsstreet"
    },
    {
      id: 23,
      img: Img23,
      title: "Boys White Printed T-Shirt with Shorts Set",
      price: "₹899",
      category: "kidsstreet"
    },
    {
      id: 24,
      img: Img24,
      title: "Boys Diamond Print T-Shirt with Shorts",
      price: "₹1,749",
      category: "kidsstreet"
    },
    
];
const ProductsData3 = [
    {
      id: 25,
      img: Img25,
      title: "KOTTY Men Denim Full Sleeve Regular Winter Jacket",
      price: "₹660",
      category: "mendenim",
    },
    {
      id: 26,
      img: Img26,
      title: "FASHOLIC 1969 Denim Washed Stylish Cap for Men Women with Brim (Fit to Head Size - Approx 54CM to 60CM)",
      price: "₹426",
      category: "mendenim",
    },
    {
      id: 27,
      img: Img27,
      title: "TAGAS Men Loose Fit Men's Flip Pocket Cargo || Men's Stylish Cotton Loose Fit Denim Cargo Jeans || Multi-Pocket Styling || Perfect for Casual Fashion || Comfortable Classic Men's Outerwear (MDJ-3)",
      price: "₹849",
      category: "mendenim",
    },
    {
      id: 28,
      img: Img28,
      title: "Centrino Mens 6712 Running Shoes Ultra Lightweight Breathable Comfortable Walking Shoes Casual Fashion Cushioned Sneakers Mesh Workout Shoes",
      price: "₹789",
      category: "mendenim",
    },
    {
      id: 29,
      img: Img29,
      title: "ONLY Women's Loose Jeans",
      price: "₹1,599",
      category: "womendenim"
    },
    {
      id: 30,
      img: Img30,
      title: "MERISHOPP Women Beret Hat Gift Casual Comfortable Painter Hat for Autumn Spring Hiking Denim Color |Hats Caps|Baseball Caps|Snapback Hats|Trucker Caps|Bucket Hats|Beanie Caps|Dad Hats|Sun Hat",
      price: "₹1,299",
      category: "womendenim"
    },
    {
      id: 31,
      img: Img31,
      title: "HI-FASHION Embroidered Denim Top Casual Wear V-Neck",
      price: "₹999",
      category: "womendenim"
    },
    {
      id: 32,
      img: Img32,
      title: "Pepe Jeans Women's Boyfriend Shorts",
      price: "₹1,299",
      category: "womendenim",
    },
    {
      id: 33,
      img: Img33,
      title: "chopper club Boys (6-15 Yrs) Jeans Slim Fit Denim Joggers with Drawstrings and Round Elastic",
      price: "₹499",
      category: "kidsdenim",
    },
    {
      id: 34,
      img: Img34,
      title: "Devil Boy's & Girl's Kids Cotton Denim Cap with Star Tag (Age Group1-5 Yrs) (Multicolor)",
      price: "₹299",
      category: "kidsdenim"
    },
    {
      id: 35,
      img: Img35,
      title: "Gianna Denim Shirt for Girls | Casual Full Sleeve Shirts | Winter Wear | Western Shirt for Kids | Denim Jacket",
      price: "₹699",
      category: "kidsdenim"
    },
    {
      id: 36,
      img: Img36,
      title: "Pepe Jeans Boys Regular Fit Shirt",
      price: "₹779",
      category: "kidsdenim"
    },
    
];
const ProductsData4 = [
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
      title: "WORK FOR IT Mens Workout Shorts Quick Dry Gym Shorts for Men Athletic Running Shorts with Zipper Pockets",
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
      title: "Van Heusen Women Lounge Regular Fit T-Shirt - 100% Supima Cotton - Round Neck, Short Sleeve, Superior Drape, Ultra Soft",
      price: "₹799",
      category: "womensAthleisure"
    },
    {
      id: 42,
      img: Img42,
      title: "Keepfit Rapid Dry N9 Antibacterial Athleisure Training OR Gym Sporty Jackets",
      price: "₹999",
      category: "womensAthleisure"
    },
    {
      id: 43,
      img: Img43,
      title: "Invincible Women’s Trending Athleisure Micro Satin Jogger Pants",
      price: "₹999",
      category: "womensAthleisure"
    },
    {
      id: 44,
      img: Img44,
      title: "Athleisure Set with Cap, Sunglasses, Bracelet, Face Mask, Arm Sleeves, 5 Pieces, Black",
      price: "₹799",
      category: "womensAthleisure",
    },
    {
      id: 45,
      img: Img45,
      title: "Van Heusen Boys Smart Tech Shorts - Easy Stain Release, Anti Stat, Ultra Soft",
      price: "₹489",
      category: "kidsAthleisure",
    },
    {
      id: 46,
      img: Img46,
      title: "Van Heusen Boy's Regular Sweatpants",
      price: "₹799",
      category: "kidsAthleisure"
    },
    {
      id: 47,
      img: Img47,
      title: "Van Heusen Boy's Regular Track Pants",
      price: "₹699",
      category: "kidsAthleisure"
    },
    {
      id: 48,
      img: Img48,
      title: "Van Heusen Boy's Regular Fit Track Pants",
      price: "₹749",
      category: "kidsAthleisure"
    },
    
];

const Styleinspiration = ({ addToCart }) => {

      const [searchQuery1, setSearchQuery1] = useState("");
      const [searchQuery2, setSearchQuery2] = useState("");
      const [searchQuery3, setSearchQuery3] = useState("");
      const [searchQuery4, setSearchQuery4] = useState("");
      const [category, setCategory] = useState("All");
      const [sortOrder, setSortOrder] = useState(""); // "asc" or "desc"
      const [loading, setLoading] = useState(null);
    
      // Filter & Search Logic
      const filteredProducts1 = ProductsData1.filter((product) => {
        return (
          product.title.toLowerCase().includes(searchQuery1.toLowerCase()) &&
          (category === "All" || product.category === category)
        );
      });

      const filteredProducts2 = ProductsData2.filter((product) => {
        return (
          product.title.toLowerCase().includes(searchQuery2.toLowerCase()) &&
          (category === "All" || product.category === category)
        );
      });

      const filteredProducts3 = ProductsData3.filter((product) => {
        return (
          product.title.toLowerCase().includes(searchQuery3.toLowerCase()) &&
          (category === "All" || product.category === category)
        );
      });

      const filteredProducts4 = ProductsData4.filter((product) => {
        return (
          product.title.toLowerCase().includes(searchQuery4.toLowerCase()) &&
          (category === "All" || product.category === category)
        );
      });
    
      // Sorting Logic
      const sortedProducts1 = [...filteredProducts1].sort((a, b) => {
        if (sortOrder === "asc") return a.price - b.price;
        if (sortOrder === "desc") return b.price - a.price;
        return 0;
      });
      const sortedProducts2 = [...filteredProducts2].sort((a, b) => {
        if (sortOrder === "asc") return a.price - b.price;
        if (sortOrder === "desc") return b.price - a.price;
        return 0;
      });
      const sortedProducts3 = [...filteredProducts3].sort((a, b) => {
        if (sortOrder === "asc") return a.price - b.price;
        if (sortOrder === "desc") return b.price - a.price;
        return 0;
      });
      const sortedProducts4 = [...filteredProducts4].sort((a, b) => {
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

    <div  data-aos="fade-up" className="container mb-20">
      {/* Header */}
      <div className="container text-center mt-12 md:mt-11 mb-14 max-w-[600px] mx-auto">
        <h1 className="text-4xl font-bold">𝑪𝒂𝒔𝒖𝒂𝒍 𝑾𝒆𝒂𝒓</h1>
      </div>

      {/* Search & Filter Options */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16 md:mb-16">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search Products..."
          value={searchQuery1}
          onChange={(e) => setSearchQuery1(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/3 dark:bg-slate-800"
        />

        {/* Category Filter */}
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded-md dark:bg-slate-800 md:w-[255px] w-full">
          <option value="All">All Categories</option>
          <option value="mencasual">Mens Casual</option>
          <option value="womencasual">Womens Casual</option>
          <option value="kidscasual">Kids Casual</option>
        </select>

        {/* Sorting Dropdown */}
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="border p-2 rounded-md dark:bg-slate-800 md:w-[255px] w-full">
          <option value="">Sort By</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Product List */}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
        {sortedProducts1.length > 0 ? (
          sortedProducts1.map((product) => (
            <div key={product.id} className="relative rounded-3xl bg-white dark:bg-gray-900 shadow-2xl p-6 flex flex-col items-center transform transition-all duration-500 w-full max-w-[280px] backdrop-blur-lg border border-gray-300 dark:border-gray-700 hover:shadow-3xl hover:-translate-y-2 hover:scale-105 hover:border-indigo-600 hover:ring-2 hover:ring-indigo-400">
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
                <p className="text-red-500 font-extrabold mt-3 text-lg">{product.price}</p>
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
     
     {/* street wear */}

    <div data-aos="fade-up" className="container mb-20">
      {/* Header */}
      <div  className="container text-center mt-12 md:mt-11 mb-14 max-w-[600px] mx-auto">
        <h1 className="text-4xl font-bold">𝑺𝒕𝒓𝒆𝒆𝒕 𝑾𝒆𝒂𝒓</h1>
      </div>

      {/* Search & Filter Options */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16 md:mb-16">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search Products..."
          value={searchQuery2}
          onChange={(e) => setSearchQuery2(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/3 dark:bg-slate-800"
        />

        {/* Category Filter */}
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded-md dark:bg-slate-800 md:w-[255px] w-full">
          <option value="All">All Categories</option>
          <option value="menstreet">Mens Street Style</option>
          <option value="womenstreet">Womens Street Style</option>
          <option value="kidsstreet">Kids Street Style</option>
        </select>

        {/* Sorting Dropdown */}
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="border p-2 rounded-md dark:bg-slate-800 md:w-[255px] w-full">
          <option value="">Sort By</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Product List */}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
        {sortedProducts2.length > 0 ? (
          sortedProducts2.map((product) => (
            <div key={product.id} className="relative rounded-3xl bg-white dark:bg-gray-900 shadow-2xl p-6 flex flex-col items-center transform transition-all duration-500 w-full max-w-[280px] backdrop-blur-lg border border-gray-300 dark:border-gray-700 hover:shadow-3xl hover:-translate-y-2 hover:scale-105 hover:border-indigo-600 hover:ring-2 hover:ring-indigo-400">
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
                <p className="text-red-500 font-extrabold mt-3 text-lg">{product.price}</p>
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

    {/* denim edge */}
     
    <div data-aos="fade-up" className="container mb-20">
      {/* Header */}
      <div  className="container text-center mt-12 md:mt-11 mb-14 max-w-[600px] mx-auto">
        <h1 className="text-4xl font-bold">𝑫𝒆𝒏𝒊𝒎 𝑬𝒅𝒈𝒆</h1>
      </div>

      {/* Search & Filter Options */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16 md:mb-16">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search Products..."
          value={searchQuery3}
          onChange={(e) => setSearchQuery3(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/3 dark:bg-slate-800"
        />

        {/* Category Filter */}
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded-md dark:bg-slate-800 md:w-[255px] w-full">
          <option value="All">All Categories</option>
          <option value="mendenim">Mens Denim Edge</option>
          <option value="womendenim">Womens Denim Edge</option>
          <option value="kidsdenim">Kids Denim Edge</option>
        </select>

        {/* Sorting Dropdown */}
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="border p-2 rounded-md dark:bg-slate-800 md:w-[255px] w-full">
          <option value="">Sort By</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Product List */}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
        {sortedProducts3.length > 0 ? (
          sortedProducts3.map((product) => (
            <div key={product.id} className="relative rounded-3xl bg-white dark:bg-gray-900 shadow-2xl p-6 flex flex-col items-center transform transition-all duration-500 w-full max-w-[280px] backdrop-blur-lg border border-gray-300 dark:border-gray-700 hover:shadow-3xl hover:-translate-y-2 hover:scale-105 hover:border-indigo-600 hover:ring-2 hover:ring-indigo-400">
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
                <p className="text-red-500 font-extrabold mt-3 text-lg">{product.price}</p>
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

     {/* Athleisure */}
     
     <div className="container mb-20">
      {/* Header */}
      <div className="container text-center mt-12 md:mt-11 mb-14 max-w-[600px] mx-auto">
        <h1 className="text-4xl font-bold">𝑨𝒕𝒉𝒍𝒆𝒊𝒔𝒖𝒓𝒆</h1>
      </div>

      {/* Search & Filter Options */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-16 md:mb-16">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search Products..."
          value={searchQuery4}
          onChange={(e) => setSearchQuery4(e.target.value)}
          className="border p-2 rounded-md w-full md:w-1/3 dark:bg-slate-800"
        />

        {/* Category Filter */}
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded-md dark:bg-slate-800 md:w-[255px] w-full">
          <option value="All">All Categories</option>
          <option value="mensAthleisure">Mens Athleisure</option>
          <option value="womensAthleisure">Womens Athleisure</option>
          <option value="kidsAthleisure">Kids Athleisure</option>
        </select>

        {/* Sorting Dropdown */}
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="border p-2 rounded-md dark:bg-slate-800 md:w-[255px] w-full">
          <option value="">Sort By</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Product List */}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
        {sortedProducts4.length > 0 ? (
          sortedProducts4.map((product) => (
            <div key={product.id} className="relative rounded-3xl bg-white dark:bg-gray-900 shadow-2xl p-6 flex flex-col items-center transform transition-all duration-500 w-full max-w-[280px] backdrop-blur-lg border border-gray-300 dark:border-gray-700 hover:shadow-3xl hover:-translate-y-2 hover:scale-105 hover:border-indigo-600 hover:ring-2 hover:ring-indigo-400">
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
                <p className="text-red-500 font-extrabold mt-3 text-lg">{product.price}</p>
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
  )
}

export default Styleinspiration
