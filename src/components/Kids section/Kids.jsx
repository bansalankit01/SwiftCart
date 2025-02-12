// import React from "react";
import Img1 from "../../assets/kids collection/pic1-Photoroom.png";
import Img2 from "../../assets/kids collection/pic2-Photoroom.png";
import Img3 from "../../assets/kids collection/pic3-Photoroom.png";
import Img4 from "../../assets/kids collection/pic4-Photoroom.png";
import Img5 from "../../assets/kids collection/pic5-Photoroom.png";
import Img6 from "../../assets/kids collection/pic6-Photoroom.png";
import Img7 from "../../assets/kids collection/pic7-Photoroom.png";
import Img8 from "../../assets/kids collection/pic8-Photoroom.png";
import Img9 from "../../assets/kids collection/pic9-Photoroom.png";
import Img10 from "../../assets/kids collection/pic10-Photoroom.png";
import Img11 from "../../assets/kids collection/pic11-Photoroom.png";
import Img12 from "../../assets/kids collection/pic12-Photoroom.png";
import Img13 from "../../assets/kids collection/pic13-Photoroom.png";
import Img14 from "../../assets/kids collection/pic14-Photoroom.png";
import Img15 from "../../assets/kids collection/pic15-Photoroom.png";
import Img16 from "../../assets/kids collection/pic16-Photoroom.png";
import Img17 from "../../assets/kids collection/pic17-Photoroom.png";
import Img18 from "../../assets/kids collection/pic18-Photoroom.png";
import Img19 from "../../assets/kids collection/pic19-Photoroom.png";
import Img20 from "../../assets/kids collection/pic20-Photoroom.png";
import Img21 from "../../assets/kids collection/pic21-Photoroom.png";
import Img22 from "../../assets/kids collection/pic22-Photoroom.png";
import Img23 from "../../assets/kids collection/pic23-Photoroom.png";
import Img24 from "../../assets/kids collection/pic24-Photoroom.png";
import Img25 from "../../assets/kids collection/pic25-Photoroom.png";
import { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import Footer from "../Footer/Footer";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title:
      "Double F Branded Cotton Bio wash half Sleeve Solid T-Shirt for Boys and Baby",
    price: "₹399",
    category: "T-Shirts ( Boys )",
  },
  {
    id: 2,
    img: Img2,
    title: "Allen Solly Boy's wash half Sleeve Solid Regular Fit T-Shirt",
    price: "₹449",
    category: "T-Shirts ( Boys )",
  },
  {
    id: 3,
    img: Img3,
    title:
      "Amazon Jam & Honey Mix Pattern Regular Fit Boys Half Sleeves T-Shirt (Pack of 3)",
    price: "₹549",
    category: "T-Shirts ( Boys )",
  },
  {
    id: 4,
    img: Img4,
    title: "Allen Solly Cotton Boys Standard Fit Regular Length Jacket",
    price: "₹1,749",
    category: "Jacket ( Boys )",
  },
  {
    id: 5,
    img: Img5,
    title: "Allen Solly Boys Black Textured Regular Fit Jacketn",
    price: "₹1,499",
    category: "Jacket ( Boys )",
  },
  {
    id: 6,
    img: Img6,
    title: "Allen Solly Boys Khaki Regular Solid Jogger Pants",
    price: "₹1,999",
    category: "Pants ( Boys )",
  },
  {
    id: 7,
    img: Img7,
    title: "Allen Solly Boy's Slim fit Jeans",
    price: "₹1,499",
    category: "Pants ( Boys )",
  },
  {
    id: 8,
    img: Img8,
    title: "Lucy & Luke Teal Slingback Clogs For Kids Liberty",
    price: "₹799",
    category: "Crocks",
  },
  {
    id: 9,
    img: Img9,
    title: "ONYC Cloudy Toddlers's First Step Walking Shoes - Sea Green",
    price: "₹399",
    category: "Shoes",
  },
  {
    id: 10,
    img: Img10,
    title:
      "Naughty Ninos Girls Blue Solid Pinafore Denim Dress with T-Shirt for 2 to 12 Years",
    price: "₹599",
    category: "Dress ( Girls )",
  },
  {
    id: 11,
    img: Img11,
    title: "Hopscotch Baby-Girl's Polyester Blend Fit and Flare Maxi Dresses",
    price: "₹699",
    category: "Dress ( Girls )",
  },
  {
    id: 12,
    img: Img12,
    title: "Visionbyankita's Girl's Rainbow Smocked Dress with Free Rainbow",
    price: "₹349",
    category: "Dress ( Girls )",
  },
  {
    id: 13,
    img: Img13,
    title: "A.T.U.N. (ALL THINGS UBER NICE) Girls Knee Length Dress",
    price: "₹369",
    category: "Dress ( Girls )",
  },
  {
    id: 14,
    img: Img14,
    title:
      "FootStation Kids' Rainbow Pink Shoe with Wings Sticker Girls' Sneakers",
    price: "₹564",
    category: "Shoes ( Girls )",
  },
  {
    id: 15,
    img: Img15,
    title:
      "toothless Kids Girls Ballerinas Ballerinas for Girls Girls Ballerinas for Kids Girls",
    price: "₹599",
    category: "Shoes ( Girls )",
  },
  {
    id: 16,
    img: Img16,
    title: "ASIAN Men's White Casual Sneaker Shoes,Sneaker  for Men's",
    price: "₹2,999",
    category: "Watches",
  },
  {
    id: 17,
    img: Img17,
    title: "Liberty Mens Clogs Light Weight Matt Finish Lpmxt-800 Clog",
    price: "₹479",
    category: "Watches",
  },
  {
    id: 18,
    img: Img18,
    title: "WALKAROO Clogs  Light Weight Matt Finish for Mens Lightweight",
    price: "₹468",
    category: "Watches",
  },
  {
    id: 19,
    img: Img19,
    title: "Dervin UV Protected Retro Square Light Weight Polarized Sunglasses",
    price: "₹499",
    category: "Accessories",
  },
  {
    id: 20,
    img: Img20,
    title:
      "RYNOCHI Unisex Sunglasses For Sports Bikes Cars Driving and Hiking Goggles",
    price: "₹287",
    category: "Accessories",
  },
  {
    id: 21,
    img: Img21,
    title:
      "EIO® 100% Cotton Rompers Sleepsuits Jumpsuit Night Suits for Infants Newborn Baby Boys & Girls",
    price: "₹498",
    category: "Dress Combo ( New Born Baby )",
  },
  {
    id: 22,
    img: Img22,
    title:
      "EIO New BornRompers Baby Clothing Night Gift Newborn Baby Set -13 Pieces",
    price: "₹649",
    category: "Dress Combo ( New Born Baby )",
  },
  {
    id: 23,
    img: Img23,
    title:
      "kezle Adorable Baby Teddy Booties: Multicolored, Plain Kids Regular Fit 1 Pair, for 3 to 9 Months",
    price: "₹489",
    category: "Shoes ( New Born Baby )",
  },
  {
    id: 24,
    img: Img24,
    title:
      "DARKMODE FASHION Unisex New Formal Plain Kids Shirt For Boys (14-15 Years, Grey Brush)",
    price: "₹369",
    category: "Shirts ( Boys )",
  },
  {
    id: 25,
    img: Img25,
    title: "EFERMONE® Efer-7 Polarized Sunglasses For Men ",
    price: "₹489",
    category: "T-Shirts ( Boys )",
  },
];

const Kids = ({ addToCart }) => {

  const [searchQuery, setSearchQuery] = useState("");
    const [category, setCategory] = useState("All");
    const [sortOrder, setSortOrder] = useState(""); // "asc" or "desc"
  
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

  return (
    <div className="container mb-20">
      {/* Header */}
      <div data-aos="fade-up" className="container text-center mt-12 md:mt-11 mb-14 max-w-[600px] mx-auto">
        <h1 className="text-4xl font-bold">𝑲𝒊𝒅𝒔 𝑪𝒐𝒍𝒍𝒆𝒄𝒕𝒊𝒐𝒏</h1>
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
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded-md dark:bg-slate-800">
          <option value="All">All Categories</option>
          <option value="Shirts ( Boys )">Shirts ( Boys ) </option>
          <option value="T-Shirts ( Boys )">T-Shirts ( Boys )</option>
          <option value="Pants ( Boys )">Pants ( Boys )</option>
          <option value="Jacket ( Boys )">Jacket ( Boys )</option>
          <option value="Accessories">Accessories</option>
          <option value="Dress Combo ( New Born Baby )">Dress Combo ( New Born Baby )</option>
          <option value="Shoes ( New Born Baby )">Shoes ( New Born Baby )</option>
          <option value="Watches">Watches</option>
          <option value="Shoes ( Girls )">Shoes ( Girls )</option>
          <option value="Dress ( Girls )">Dress ( Girls )</option>
          <option value="Shoes">Shoes</option>
          <option value="Crocks">Crocks</option>
        </select>

        {/* Sorting Dropdown */}
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} className="border p-2 rounded-md dark:bg-slate-800">
          <option value="">Sort By</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Product List */}
      <div data-aos="fade-up" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 place-items-center">
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <div key={product.id} className="rounded-2xl text-center bg-white dark:bg-gray-800 shadow-xl duration-300 group w-full sm:w-[200px] md:w-[250px] h-[350px] flex flex-col justify-between">
              <div className="h-[150px] flex items-center justify-center">
                <img src={product.img} alt={product.title} className="max-w-[140px] md:h-[190px] mt-16 md:mt-11 md:max-w-[150px] object-contain block mx-auto transform duration-300 drop-shadow-md" />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h1 className="text-sm font-bold line-clamp-2 mt-11 md:mt-10">{product.title}</h1>
                <p className="text-red-500 font-bold group-hover:text-red-500 duration-300 text-sm mt-4 md:mt-3">₹{product.price}</p>
                <button className="bg-primary hover:scale-105 duration-300 text-white py-1 rounded-md mt-auto md:mt-2 group-hover:bg-sky-800 dark:group-hover:bg-white dark:group-hover:text-primary" onClick={() => addToCart(product)}>
                  Add to cart
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

export default Kids;
