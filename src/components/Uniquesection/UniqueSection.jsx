// import React from "react";
// import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { BsHeart } from "react-icons/bs";

const fashionCategories = [
  {
    title: "Men's Street Rebel 🕶️",
    description:
      "Edgy, bold, and always on-trend. Explore the latest men's streetstyles.",
    image:
      "https://img.freepik.com/premium-vector/gangster-against-brick-green-wall_66757-284.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid",
    link: "/streetwear",
  },
  {
    title: "Women's Chic Icon 👗",
    description:
      "From casual to classy, find the perfect outfit for any occasion.",
    image:
      "https://img.freepik.com/free-vector/fashionable-girls-silhouettes_23-2147497824.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid",
    link: "/womens",
  },
  {
    title: "Kids' Trendsetter 🎒",
    description: "Fun, fresh, and playful fashion for the little trendsetters.",
    image:
      "https://img.freepik.com/premium-vector/kids-shop-circle-hanging-child-clothes-logo-design_680355-29.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid",
    link: "/kids",
  },
];

const UniqueSections = ({ addToCart, addTowhishlist }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(null);
  const [wishlistloading, setWishlistLoading] = useState(null);

  const celebrityClosetData = [
    {
      id: 1,
      img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/files/TUX2502_533x.jpg?v=1708334949",
      title: "Shahid Kapoor In Orion Nebula Tuxedo",
      price: "Rs 195,000",
    },
    {
      id: 2,
      img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/files/MKPSL1332_533x.jpg?v=1726483545",
      title: "Ahan Shetty In Embellished Black Kurta",
      price: "Rs 44,500",
    },
    {
      id: 3,
      img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/files/RR1586K_533x.jpg?v=1695905187",
      title: "Vicky Kaushal In Chikankari Short Kurta",
      price: "Rs 24,500",
    },
    {
      id: 4,
      img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/products/1_ef3e8f34-e441-4063-996c-0c9bb09703d2_533x.jpg?v=1669881787",
      title: "Ranveer Singh In Wildflower Embellished Tuxedo",
      price: "Rs 145,000",
    },
    {
      id: 5,
      img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/files/MSH4751_2_fef4033c-dba0-4032-9b7d-fe88e244ab8e_533x.jpg?v=1729324607",
      title: "Jasprit Bumrah In Pyrrhus Sherwani Set",
      price: "Rs 345,000",
    },
    {
      id: 6,
      img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/products/IshaanKhatterwearingRohitGandhi_RahulKhanna_2_533x.png?v=1673603061",
      title: "Ishaan Khattar In Supernova Tuxedo",
      price: "Rs 115,000",
    },
    {
      id: 7,
      img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/files/GW6166_f1218f8d-7707-43a7-bd6c-ebcba42a0474_533x.jpg?v=1729324489",
      title: "Ananya Panday In Mist Crossover Panels Gown",
      price: "Rs 395,000",
    },
    {
      id: 8,
      img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/files/GW6100_349de73e-cd10-4c72-9678-8c7742c31fc1_533x.jpg?v=1729324524",
      title: "Dia Mirza In Starry Glitch Gown",
      price: "Rs 195,000",
    },
    {
      id: 9,
      img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/files/JKT14003_533x.jpg?v=1683551150",
      title: "Sanjana Sanghi In Galactic Black Paneled Jacket",
      price: "Rs 64,500",
    },
    {
      id: 10,
      img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/files/GW6122_2_533x.jpg?v=1688393612",
      title: "Amy Jackson In Venus Embellished Gown",
      price: "Rs 185,000",
    },
    {
      id: 11,
      img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/products/DishaF4_533x.jpg?v=1671541024",
      title: "Disha Patani In Axio Jumpsuit",
      price: "Rs 225,000",
    },
    {
      id: 12,
      img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/products/TamannaahBhatiawearingRohitGandhi_RahulKhannaandVandals_2_533x.jpg?v=1671529585",
      title: "Tamannaah Bhatia In Twilight Jacket Set",
      price: "Rs 93,000",
    },
  ];

  const handleQuickBuy = (item) => {
    setLoading(item.title);
    setTimeout(() => {
      addToCart(item);
      setLoading(null);
    }, 500);
  };

  const handleAddToWishlist = (product) => {
    setWishlistLoading(product.id);
    setTimeout(() => {
      addTowhishlist(product);
      setWishlistLoading(null);
    }, 500);
  };

  const colorStyles = {
    "Midnight Blue": "#191970",
    "Sunset Orange": "#FF4500",
    "Emerald Green": "#50C878",
    "Royal Purple": "#7851A9",
    "Golden Yellow": "#FFD700",
    "Soft Lavender": "#E6E6FA",
  };

  return (
    <div className="space-y-12 p-6">
      {/* Style Inspirations Section */}

      <section>
        <h2
          data-aos="fade-up"
          className="md:text-4xl text-3xl mt-[-30px] mx-7 md:mx-1 mb-16 md:mt-[-26px] md:mb-16 font-extrabold"
        >
          𝑺𝒕𝒚𝒍𝒆 𝑰𝒏𝒔𝒑𝒊𝒓𝒂𝒕𝒊𝒐𝒏𝒔 ✨
        </h2>
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            {
              img: "https://img.freepik.com/free-photo/purchase-sale-discount-fashion-style_53876-15282.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid",
              title: "Casual Wear",
              link: "/casualwear",
            },
            {
              img: "https://img.freepik.com/free-photo/freedom-enjoyment-good-vibes-independence_53876-21341.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid",
              title: "Street Wear",
              link: "/streetwear",
            },
            {
              img: "https://img.freepik.com/free-photo/travel-accessory-concept_1388-37.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid",
              title: "Denim Edge",
              link: "/denimedge",
            },
            {
              img: "https://img.freepik.com/free-photo/training-supplies-near-tablet-with-picture_23-2147750794.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid",
              title: "Athleisure",
              link: "/athleisure",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 shadow-lg rounded-2xl bg-white dark:bg-gray-700 flex flex-col h-full"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg w-full h-auto md:h-52 object-cover aspect-[4/5]"
              />

              {/* Content Wrapper for Title & Button */}
              <div className="flex flex-col flex-grow justify-between text-center">
                <h3 className="text-xl font-semibold mt-3">{item.title}</h3>

                {/* Button Stays at the Bottom */}
                <Link to={item.link}>
                  <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white py-3 px-6 rounded-lg mt-5 w-full flex items-center justify-center gap-2 dark:hover:bg-white dark:hover:text-white transition-all duration-500 shadow-md hover:shadow-lg">
                    Shop Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Shop the Look Section */}

      <section>
        <h2
          data-aos="fade-up"
          className="md:text-4xl text-3xl mt-[20px] mx-14 md:mx-1 mb-14 md:mt-[16px] md:mb-14 font-extrabold"
        >
          𝑺𝒉𝒐𝒑 𝒕𝒉𝒆 𝑳𝒐𝒐𝒌 🛍️
        </h2>
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            {
              img: "https://img.freepik.com/free-vector/flat-frame-template-summertime-season_23-2150320861.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid",
              title: "Summer Vibes",
              link: "/Summervibes",
            },
            {
              img: "https://img.freepik.com/free-vector/creative-winter-social-media-post_23-2148792919.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid",
              title: "Winter Cozy",
              link: "/Wintercozy",
            },
            {
              img: "https://img.freepik.com/free-vector/autumn-minimalist-background_23-2147497314.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid",
              title: "Autumn Elegance",
              link: "/Autumnelegance",
            },
            {
              img: "https://img.freepik.com/free-vector/monsoon-sale-background_23-2147649836.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid",
              title: "Monsoon Magic",
              link: "/Monsoonmagic",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 shadow-lg rounded-2xl bg-white dark:bg-gray-500 flex flex-col h-full"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg w-full h-auto md:h-52 object-cover aspect-[4/5]"
              />

              {/* Content Wrapper to Keep Button at Bottom */}
              <div className="flex flex-col flex-grow justify-between text-center">
                <h3 className="text-xl font-semibold mt-3 mb-3">
                  {item.title}
                </h3>

                <Link to={item.link}>
                  <button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-teal-600 hover:to-green-500 text-white py-3 px-6 rounded-lg mt-5 w-full flex items-center justify-center gap-2 dark:hover:bg-white dark:hover:text-white transition-all duration-500 shadow-md hover:shadow-lg">
                    Explore →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* style quest Section */}

      <section
        data-aos="zoom-in"
        className="text-center my-12 p-8 bg-gradient-to-r from-red-500 to-indigo-300 dark:from-gray-500 dark:to-gray-700 rounded-xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-white mb-4">𝑺𝒕𝒚𝒍𝒆 𝑸𝒖𝒆𝒔𝒕 🛍️</h2>
        <p className="text-lg text-white mb-6">
          𝑪𝒉𝒐𝒐𝒔𝒆 𝒚𝒐𝒖𝒓 𝒔𝒕𝒚𝒍𝒆 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 & 𝒔𝒉𝒐𝒑 𝒚𝒐𝒖𝒓 𝒍𝒐𝒐𝒌!
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {fashionCategories.map((category, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white text-black rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform"
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2">{category.title}</h3>
              <p className="text-gray-700 dark">{category.description}</p>
            </motion.div>
          ))}
        </div>

        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-8 p-6 bg-white rounded-lg shadow-lg flex flex-col items-center"
          >
            <h3 className="text-2xl font-bold text-red-500">
              {selectedCategory.title}
            </h3>
            <img
              src={selectedCategory.image}
              alt={selectedCategory.title}
              className="w-full md:h-40 h-42 object-contain rounded-lg my-4"
            />
            {/* <p className="text-gray-700">{selectedCategory.description}</p> */}
            <Link to={selectedCategory.link}>
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white py-3 px-6 rounded-lg mt-5 w-full flex items-center justify-center gap-2 dark:hover:bg-white dark:hover:text-white transition-all duration-500 shadow-md hover:shadow-lg">
                Explore Now →
              </button>
            </Link>
          </motion.div>
        )}
      </section>

      {/* Celebrity Picks Section */}

      <section>
        <h2
          data-aos="fade-up"
          className="md:text-4xl text-3xl mt-5 mb-10 mx-12 md:mx-1 font-extrabold"
        >
          𝑪𝒆𝒍𝒆𝒃𝒓𝒊𝒕𝒚 𝑪𝒍𝒐𝒔𝒆𝒕🌟
        </h2>

        <div
          data-aos="fade-up"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {celebrityClosetData.map((item) => (
            <motion.div
              key={item.title}
              className="p-4 shadow-lg rounded-2xl bg-white dark:bg-gray-800 flex flex-col items-center h-full"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg w-full h-64 object-cover aspect-[3/4]"
              />

              <div className="flex flex-col flex-grow justify-between w-full text-center">
                <h3 className="text-md font-semibold mt-3">{item.title}</h3>
                <p className="text-red-500 font-extrabold mt-3 text-lg">
                  {item.price}
                </p>

                <button
                  className=" text-black dark:text-white py-3 rounded-lg mt-5 w-full flex items-center justify-center gap-2 dark:border-2 dark:hover:text-white transition-all duration-500 shadow-lg hover:shadow-xl"
                  onClick={() => handleAddToWishlist(item)}
                  disabled={wishlistloading === item.id}
                >
                  <BsHeart className="hidden sm:inline" />
                  {wishlistloading === item.id
                    ? "Adding..."
                    : "Add to Wishlist"}
                </button>
                <button
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white py-3 px-6 rounded-lg mt-5 w-full dark:hover:bg-gray-300 dark:hover:text-black transition-all duration-500 shadow-md hover:shadow-lg"
                  onClick={() => handleQuickBuy(item)}
                  disabled={loading === item.title}
                >
                  {loading === item.title ? "Adding..." : "Add to Cart"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending Colors & Styles Section */}

      <section id="trendingcolor" data-aos="zoom-in" className="my-12 text-center">
        <h2 className="md:text-4xl text-2xl md:mb-14 mb-12 font-extrabold">
          𝑻𝒓𝒆𝒏𝒅𝒊𝒏𝒈 𝑪𝒐𝒍𝒐𝒓𝒔 🎨
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {Object.entries(colorStyles).map(([colorName, colorHex], index) => (
            <div key={index} className="relative group">
              <div
                className="h-32 w-32 rounded-2xl transition-transform transform group-hover:rotate-6 shadow-xl mx-auto"
                style={{ backgroundColor: colorHex }}
              ></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-2xl">
                <span className="text-white text-lg font-semibold">
                  {colorName}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UniqueSections;
