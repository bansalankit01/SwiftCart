import React from "react";
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
import { useState } from "react";

const ProductsData = [
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
    title:
      "FASHOLIC 1969 Denim Washed Stylish Cap for Men Women with Brim (Fit to Head Size - Approx 54CM to 60CM)",
    price: "₹426",
    category: "mendenim",
  },
  {
    id: 27,
    img: Img27,
    title:
      "TAGAS Men Loose Fit Men's Flip Pocket Cargo || Men's Stylish Cotton Loose Fit Denim Cargo Jeans || Multi-Pocket Styling || Perfect for Casual Fashion || Comfortable Classic Men's Outerwear (MDJ-3)",
    price: "₹849",
    category: "mendenim",
  },
  {
    id: 28,
    img: Img28,
    title:
      "Centrino Mens 6712 Running Shoes Ultra Lightweight Breathable Comfortable Walking Shoes Casual Fashion Cushioned Sneakers Mesh Workout Shoes",
    price: "₹789",
    category: "mendenim",
  },
  {
    id: 29,
    img: Img29,
    title: "ONLY Women's Loose Jeans",
    price: "₹1,599",
    category: "womendenim",
  },
  {
    id: 30,
    img: Img30,
    title:
      "MERISHOPP Women Beret Hat Gift Casual Comfortable Painter Hat for Autumn Spring Hiking Denim Color |Hats Caps|Baseball Caps|Snapback Hats|Trucker Caps|Bucket Hats|Beanie Caps|Dad Hats|Sun Hat",
    price: "₹1,299",
    category: "womendenim",
  },
  {
    id: 31,
    img: Img31,
    title: "HI-FASHION Embroidered Denim Top Casual Wear V-Neck",
    price: "₹999",
    category: "womendenim",
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
    title:
      "chopper club Boys (6-15 Yrs) Jeans Slim Fit Denim Joggers with Drawstrings and Round Elastic",
    price: "₹499",
    category: "kidsdenim",
  },
  {
    id: 34,
    img: Img34,
    title:
      "Devil Boy's & Girl's Kids Cotton Denim Cap with Star Tag (Age Group1-5 Yrs) (Multicolor)",
    price: "₹299",
    category: "kidsdenim",
  },
  {
    id: 35,
    img: Img35,
    title:
      "Gianna Denim Shirt for Girls | Casual Full Sleeve Shirts | Winter Wear | Western Shirt for Kids | Denim Jacket",
    price: "₹699",
    category: "kidsdenim",
  },
  {
    id: 36,
    img: Img36,
    title: "Pepe Jeans Boys Regular Fit Shirt",
    price: "₹779",
    category: "kidsdenim",
  },
];

const Denimedge = ({ addToCart }) => {
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
      {/* denim edge */}

      <div data-aos="fade-up" className="container mb-20">
        {/* Header */}
        <div className="container text-center mt-12 md:mt-11 mb-14 max-w-[600px] mx-auto">
          <h1 className="text-4xl font-bold">𝑫𝒆𝒏𝒊𝒎 𝑬𝒅𝒈𝒆</h1>
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
            <option value="mendenim">Mens Denim Edge</option>
            <option value="womendenim">Womens Denim Edge</option>
            <option value="kidsdenim">Kids Denim Edge</option>
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

export default Denimedge;
