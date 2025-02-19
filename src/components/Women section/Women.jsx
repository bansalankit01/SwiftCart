import Img1 from "../../assets/women collection/pic1-Photoroom.png";
import Img2 from "../../assets/shirt/product3-Photoroom.png";
import Img3 from "../../assets/women collection/pic2-Photoroom.png";
import Img4 from "../../assets/women collection/pic3-Photoroom.png";
import Img5 from "../../assets/women collection/pic4-Photoroom.png";
import Img6 from "../../assets/women collection/pic5-Photoroom.png";
import Img7 from "../../assets/women collection/pic6-Photoroom.png";
import Img8 from "../../assets/women collection/pic7-Photoroom.png";
import Img9 from "../../assets/women collection/pic8-Photoroom.png";
import Img10 from "../../assets/women collection/pic9-Photoroom.png";
import Img11 from "../../assets/women collection/pic10-Photoroom.png";
import Img12 from "../../assets/women collection/pic11-Photoroom.png";
import Img13 from "../../assets/women collection/pic12-Photoroom.png";
import Img14 from "../../assets/women collection/pic13-Photoroom.png";
import Img15 from "../../assets/women collection/pic14-Photoroom.png";
import Img16 from "../../assets/women collection/pic15-Photoroom.png";
import Img17 from "../../assets/women collection/pic16-Photoroom.png";
import Img18 from "../../assets/women collection/pic17-Photoroom.png";
import Img19 from "../../assets/women collection/pic18-Photoroom.png";
import Img20 from "../../assets/women collection/pic19-Photoroom.png";
import Img21 from "../../assets/women collection/pic20-Photoroom.png";
import Img22 from "../../assets/women collection/pic21-Photoroom.png";
import Img23 from "../../assets/women collection/pic22-Photoroom.png";
import Img24 from "../../assets/women collection/pic24-Photoroom.png";
import Img25 from "../../assets/women collection/pic25-Photoroom.png";
import Img26 from "../../assets/women collection/pic26-Photoroom.png";
import Img27 from "../../assets/women collection/pic27-Photoroom.png";
import Img28 from "../../assets/women collection/pic28-Photoroom.png";
import { useState } from "react";

// import { FaStar } from "react-icons/fa";
// import Footer from "../Footer/Footer";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "AKHILAM Women's Georgette Paisley Woven",
    price: "₹2,029",
    category: "Saree",
  },
  {
    id: 2,
    img: Img2,
    title: "Indya Women's Georgette Floral Kurta",
    price: "₹1,600",
    category: "Suits",
  },
  {
    id: 3,
    img: Img3,
    title: "Indya Georgette A-Line Skirt Synthetic",
    price: "₹1,770",
    category: "Saree",
  },
  {
    id: 4,
    img: Img4,
    title: "Wishful Women's Synthetic Kurta",
    price: "₹2,590",
    category: "Suits",
  },
  {
    id: 5,
    img: Img5,
    title: "SMOWKLY Pyjama Set T-Shirt and Shorts Set for Men",
    price: "₹499",
    category: "Pants",
  },
  {
    id: 6,
    img: Img6,
    title: "Karsaer Oversized Rimless Sunglasses for Women ",
    price: "₹2,999",
    category: "Pants",
  },
  {
    id: 7,
    img: Img7,
    title: "ASIAN Casual SneakerGirls Lace Block Shoes for Women",
    price: "₹799",
    category: "Shoes",
  },
  {
    id: 8,
    img: Img8,
    title: "Shoetopia Women & Girls Block Heeled Western Boots",
    price: "₹799",
    category: "Shoes",
  },
  {
    id: 9,
    img: Img9,
    title: "Mochi Women'sGirls Lace Up Block Heeled Synthetic Boots (31-5073)",
    price: "2,394",
    category: "Shoes",
  },
  {
    id: 10,
    img: Img10,
    title:
      "Vogaan Stretchable Lycra Stylish Cargo Pant for Men | Regular Slim Fit",
    price: "₹599",
    category: "Hand Bag",
  },
  {
    id: 11,
    img: Img11,
    title: "Roshfort Sunglasses for Women uv400 Protection Goggles for Womens",
    price: "₹699",
    category: "Accessories",
  },
  {
    id: 12,
    img: Img12,
    title: "FEISEDY Oversized Sunglasses for Women Sparkling Frame B2289",
    price: "₹1,259",
    category: "Accessories",
  },
  {
    id: 13,
    img: Img13,
    title: "Vincent Chase By Lenskart | Silver Dual Tone",
    price: "₹499",
    category: "Accessories",
  },
  {
    id: 14,
    img: Img14,
    title: "FCUK Pink Dial Analog Watch for Women",
    price: "₹1,106",
    category: "Watches",
  },
  {
    id: 15,
    img: Img15,
    title: "FCUK Analog Black Dial | Watch-FK00015B",
    price: "₹2,129",
    category: "Watches",
  },
  {
    id: 16,
    img: Img16,
    title: "FCUK Teal Dial Analog Watch for Women",
    price: "₹999",
    category: "Watches",
  },
  {
    id: 17,
    img: Img17,
    title: "GIVA 925 Silver Beatiful Butterfly Studs Earrings | Gift for Girlfriend| Gifts for Women& Girls",
    price: "₹945",
    category: "Jewellery",
  },
  {
    id: 18,
    img: Img18,
    title: "GIVA 925 Silver Zircon Peacock Heritage Ring Authenticity and 925 Stamp | 6 Month Warranty*",
    price: "₹2,493",
    category: "Jewellery",
  },
  {
    id: 19,
    img: Img19,
    title: "Storite Women's Tote Bag With Embroidery Printed Handbag With Zip Pockets, Multicolor",
    price: "₹498",
    category: "Hand Bag",
  },
  {
    id: 20,
    img: Img20,
    title: "Gomals Chic Party Shoulder Bag for Women, and Ladies Black Handbag with Chain Strap, 30 cm",
    price: "₹499",
    category: "Hand Bag",
  },
  {
    id: 21,
    img: Img21,
    title: "ADISA Unicorn Toddler Bag Floral Liquid Bag Women Princess Cute Crossbody Handbags Gift for Girls",
    price: "₹296",
    category: "Hand Bag",
  },
  {
    id: 22,
    img: Img22,
    title: "Avighna Women's Luxurious Floral Liquid Perfume, Watch And Clutch Combo Set, 50 ML",
    price: "₹1,299",
    category: "Perfumes",
  },
  {
    id: 23,
    img: Img23,
    title: "Armaf Vanity Femme Essence Perfume and Pearl No Gas  Body Spray For Women, Fresh Scent, 200ml",
    price: "₹296",
    category: "Perfumes",
  },
  {
    id: 24,
    img: Img24,
    title: "Secret Temptation Te Amo and Pearl Perfume Body Spray for Women, Pack of 3 (120ml each)",
    price: "₹405",
    category: "Perfumes",
  },
  {
    id: 25,
    img: Img25,
    title: "London Hills Women's Casual Printed Round Neck",
    price: "₹258",
    category: "T-Shirts",
  },
  {
    id: 26,
    img: Img26,
    title: "LEOTUDE Women's Oversized Cottonblend Half Sleeve Drop Shoulder Printed Tshirt",
    price: "₹278",
    category: "T-Shirts",
  },
  {
    id: 27,
    img: Img27,
    title: "Istyle Can Slim Fit Plain Stretchable Round Neck Rib Knit Short Sleeve Regular Top for Women | T Shirt | Tee",
    price: "₹214",
    category: "T-Shirts",
  },
  {
    id: 28,
    img: Img28,
    title: "KOTTY Women's Print Oversized T-Shirt Cotton Blend Casual Loose Fit",
    price: "₹359",
    category: "T-Shirts",
  },
];

const Women = ({ addToCart }) => {

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
          <h1 className="text-4xl font-bold">𝑾𝒐𝒎𝒆𝒏 𝑪𝒐𝒍𝒍𝒆𝒄𝒕𝒊𝒐𝒏</h1>
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
          <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded-md dark:bg-slate-800 w-[255px]">
            <option value="All">All Categories</option>
            <option value="Saree">Saree</option>
            <option value="Watches">Watches</option>
            <option value="T-Shirts">T-Shirts</option>
            <option value="Perfumes">Perfumes</option>
            <option value="Hand Bag">Hand Bag</option>
            <option value="Jewellery">Jewellery</option>
            <option value="Accessories">Accessories</option>
            <option value="Shoes">Shoes</option>
            <option value="Pants">Pants</option>
            <option value="Suits">Suits</option>
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
                  <img src={product.img} alt={product.title} className="max-w-[140px] mt-16 md:max-w-[150px] object-contain block mx-auto transform duration-300 drop-shadow-md" />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h1 className="text-sm font-bold line-clamp-2 mt-11">{product.title}</h1>
                  <p className="text-red-500 font-bold group-hover:text-red-500 duration-300 text-sm mt-4">₹{product.price}</p>
                  <button className="bg-primary hover:scale-105 duration-300 text-white py-1 rounded-md mt-auto hover:bg-sky-800 dark:group-hover:bg-white dark:group-hover:text-primary" onClick={() => addToCart(product)}>
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

export default Women;
