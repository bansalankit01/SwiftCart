// import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const UniqueSections = () => {
  const colorStyles = {
    "Bold Red": "#FF0000",
    "Pastel Blue": "#AEC6CF",
    "Earthy Tones": "#8B4513",
  };
  return (
    <div className="space-y-12 p-6">

      {/* Style Inspirations Section */}

      <section>
        <h2
          data-aos="fade-up"
          className="md:text-4xl text-3xl mt-[-20px] mb-20 md:mt-[-26px] md:mb-16"
        >
          𝑺𝒕𝒚𝒍𝒆 𝑰𝒏𝒔𝒑𝒊𝒓𝒂𝒕𝒊𝒐𝒏𝒔 ✨
        </h2>
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {/* Casual wear */}

          <div className="p-4 shadow-lg rounded-2xl bg-white dark:bg-gray-700">
            <img
              src="https://img.freepik.com/free-photo/purchase-sale-discount-fashion-style_53876-15282.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid"
              alt="Casual Wear"
              className="rounded-lg w-full h-52 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-3">
              Casual Wear
            </h3>
            <Link to="/styleinspiration" id="casualwear">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white py-3 px-6 rounded-lg mt-5 w-full flex items-center justify-center gap-2 dark:hover:bg-white dark:hover:text-white transition-all duration-500 shadow-md hover:shadow-lg">
              Shop Now
            </button>
            </Link>
          </div>

          {/* Streetwear */}
          <div className="p-4 shadow-lg rounded-2xl bg-white dark:bg-gray-700">
            <img
              src="https://img.freepik.com/free-photo/freedom-enjoyment-good-vibes-independence_53876-21341.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid"
              alt="Streetwear"
              className="rounded-lg w-full h-49 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-3">
              Street Wear
            </h3>
            <Link to="/styleinspiration" id="casualwear">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white py-3 px-6 rounded-lg mt-5 w-full flex items-center justify-center gap-2 dark:hover:bg-white dark:hover:text-white transition-all duration-500 shadow-md hover:shadow-lg">
              Shop Now
            </button>
            </Link>
          </div>

          {/* Denim Edge */}
          <div className="p-4 shadow-lg rounded-2xl bg-white dark:bg-gray-700">
            <img
              src="https://img.freepik.com/free-photo/travel-accessory-concept_1388-37.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid"
              alt="Denim Edge"
              className="rounded-lg w-full h-49 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-3">
              Denim Edge
            </h3>
            <Link to="/styleinspiration" id="casualwear">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white py-3 px-6 rounded-lg mt-5 w-full flex items-center justify-center gap-2 dark:hover:bg-white dark:hover:text-white transition-all duration-500 shadow-md hover:shadow-lg">
              Shop Now
            </button>
            </Link>
          </div>

          {/* Athleisure */}
          <div className="p-4 shadow-lg rounded-2xl bg-white dark:bg-gray-700">
            <img
              src="https://img.freepik.com/free-photo/training-supplies-near-tablet-with-picture_23-2147750794.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid"
              alt="Athleisure"
              className="rounded-lg w-full h-49 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-3">
              Athleisure
            </h3>
            <Link to="/styleinspiration" id="casualwear">
            <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white py-3 px-6 rounded-lg mt-5 w-full flex items-center justify-center gap-2 dark:hover:bg-white dark:hover:text-white transition-all duration-500 shadow-md hover:shadow-lg">
              Shop Now
            </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Shop the Look Section */}

      <section>
        <h2 className="md:text-4xl text-3xl mt-[-20px] mb-20 md:mt-[16px] md:mb-16">
          𝑺𝒉𝒐𝒑 𝒕𝒉𝒆 𝑳𝒐𝒐𝒌 🛍️
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              img: "https://img.freepik.com/free-vector/flat-frame-template-summertime-season_23-2150320861.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid",
              title: "Summer Vibes",
            },
            {
              img: "https://img.freepik.com/free-vector/creative-winter-social-media-post_23-2148792919.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid",
              title: "Winter Cozy",
            },
            {
              img: "https://img.freepik.com/free-vector/autumn-minimalist-background_23-2147497314.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid",
              title: "Autumn Elegance",
            },
            {
              img: "https://img.freepik.com/free-vector/monsoon-sale-background_23-2147649836.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid",
              title: "Monsoon Magic",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="p-4 shadow-lg rounded-2xl bg-white dark:bg-gray-500 flex flex-col h-full"
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg w-full h-52 object-cover"
              />

              {/* Content Wrapper for Title & Button */}
              <div className="flex flex-col flex-grow justify-between w-full text-center">
                <h3 className="text-xl font-semibold mt-3 mb-3">
                  {item.title}
                </h3>

                {/* Button stays at the bottom */}
                <button className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-teal-600 hover:to-green-500 text-white py-3 px-6 rounded-lg mt-5 w-full dark:hover:bg-white dark:hover:text-white transition-all duration-500 shadow-md hover:shadow-lg">
                  Explore
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Limited Edition Drops Section */}

      <section>
        <h2 data-aos="fade-up" className="text-2xl font-bold md:mt-16 mb-4">
          𝑳𝒊𝒎𝒊𝒕𝒆𝒅 𝑬𝒅𝒊𝒕𝒊𝒐𝒏 𝑫𝒓𝒐𝒑𝒔 ⏳
        </h2>
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row items-center gap-6"
        >
          <CountdownCircleTimer
            isPlaying
            duration={86400}
            colors={[
              ["#F00", 0.4],
              ["#FF0", 0.4],
              ["#0F0", 0.2],
            ]}
            size={100}
          >
            {({ remainingTime }) => (
              <span className="text-lg font-bold">
                {Math.floor(remainingTime / 3600)}h
              </span>
            )}
          </CountdownCircleTimer>
          <p className="text-lg font-medium">
            Exclusive styles available for a <strong>limited time</strong> only!
          </p>
        </div>
      </section>

      {/* Celebrity Picks Section */}

      <section>
        <h2
          data-aos="fade-up"
          className="md:text-4xl text-3xl mt-[-20px] mb-20 md:mt-[26px] md:mb-16"
        >
          𝑪𝒆𝒍𝒆𝒃𝒓𝒊𝒕𝒚 𝑪𝒍𝒐𝒔𝒆𝒕🌟
        </h2>

        {/* Men & Women */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 md:grid-cols-6 md:gap-6 gap-4"
        >
          {/* Men Section */}
          {[
            {
              img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/files/TUX2502_533x.jpg?v=1708334949",
              title: "Shahid Kapoor In Orion Nebula Tuxedo",
              price: "Rs 195,000",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/files/MKPSL1332_533x.jpg?v=1726483545",
              title: "Ahan Shetty In Embellished Black Kurta",
              price: "Rs 44,500",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/files/RR1586K_533x.jpg?v=1695905187",
              title: "Vicky Kaushal In Chikankari Short Kurta",
              price: "Rs 24,500",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/products/1_ef3e8f34-e441-4063-996c-0c9bb09703d2_533x.jpg?v=1669881787",
              title: "Ranveer Singh In Wildflower Embellished Tuxedo",
              price: "Rs 145,000",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/files/MSH4751_2_fef4033c-dba0-4032-9b7d-fe88e244ab8e_533x.jpg?v=1729324607",
              title: "Jasprit Bumrah In Pyrrhus Sherwani Set",
              price: "Rs 345,000",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/products/IshaanKhatterwearingRohitGandhi_RahulKhanna_2_533x.png?v=1673603061",
              title: "Ishaan Khattar In Supernova Tuxedo",
              price: "Rs 115,000",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/files/GW6166_f1218f8d-7707-43a7-bd6c-ebcba42a0474_533x.jpg?v=1729324489",
              title: "Ananya Panday In Mist Crossover Panels Gown",
              price: "Rs 395,000",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/files/GW6100_349de73e-cd10-4c72-9678-8c7742c31fc1_533x.jpg?v=1729324524",
              title: "Dia Mirza In Starry Glitch Gown",
              price: "Rs 195,000",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/files/JKT14003_533x.jpg?v=1683551150",
              title: "Sanjana Sanghi In Galactic Black Paneled Jacket",
              price: "Rs 64,500",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/files/GW6122_2_533x.jpg?v=1688393612",
              title: "Amy Jackson In Venus Embellished Gown",
              price: "Rs 185,000",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/products/DishaF4_533x.jpg?v=1671541024",
              title: "Disha Patani In Axio Jumpsuit",
              price: "Rs 225,000",
            },
            {
              img: "https://cdn.shopify.com/s/files/1/0565/1169/2936/products/TamannaahBhatiawearingRohitGandhi_RahulKhannaandVandals_2_533x.jpg?v=1671529585",
              title: "Tamannaah Bhatia In Twilight Jacket Set",
              price: "Rs 93,000",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="p-4 shadow-lg rounded-2xl bg-white dark:bg-gray-800 flex flex-col items-center h-full"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg w-full h-64 object-cover"
              />

              {/* Content Wrapper */}
              <div className="flex flex-col flex-grow justify-between w-full text-center">
                <h3 className="text-md font-semibold mt-3">{item.title}</h3>
                <p className="text-red-500 font-extrabold mt-3 text-lg">
                  {item.price}
                </p>

                {/* Button Aligned at Bottom */}
                <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white py-3 px-6 rounded-lg mt-5 w-full dark:hover:bg-white dark:hover:text-white transition-all duration-500 shadow-md hover:shadow-lg">
                  Quick Buy
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending Colors & Styles Section */}

      <section>
        <h2 className="text-2xl font-bold mb-4">Trending Colors & Styles 🎨</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(colorStyles).map(([colorName, colorHex], index) => (
            <div
              key={index}
              className="p-4 shadow-lg rounded-2xl bg-white dark:bg-gray-800 text-center"
            >
              <div
                className="h-20 w-20 rounded-full border border-gray-300 mx-auto"
                style={{ backgroundColor: colorHex }}
              ></div>
              <h3 className="text-xl font-semibold mt-3">{colorName}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default UniqueSections;
