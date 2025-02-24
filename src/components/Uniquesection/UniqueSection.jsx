// import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { motion } from "framer-motion";

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
        <h2 data-aos="fade-up" className="md:text-4xl text-3xl mt-[-20px] mb-20 md:mt-[-26px] md:mb-16">𝑺𝒕𝒚𝒍𝒆 𝑰𝒏𝒔𝒑𝒊𝒓𝒂𝒕𝒊𝒐𝒏𝒔 ✨</h2>
        <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Casual Chic */}
          <div className="p-4 shadow-lg rounded-2xl bg-white">
            <img
              src="https://img.freepik.com/free-photo/purchase-sale-discount-fashion-style_53876-15282.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid"
              alt="Casual Wear"
              className="rounded-lg w-full h-52 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-3">
              Casual Wear
            </h3>
            <button className="mt-2 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              Shop the Look
            </button>
          </div>

          {/* Streetwear */}
          <div className="p-4 shadow-lg rounded-2xl bg-white">
            <img
              src="https://img.freepik.com/free-photo/freedom-enjoyment-good-vibes-independence_53876-21341.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid"
              alt="Streetwear"
              className="rounded-lg w-full h-49 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-3">
              Street Wear
            </h3>
            <button className="mt-2 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              Shop Now
            </button>
          </div>

          {/* Denim Edge */}
          <div className="p-4 shadow-lg rounded-2xl bg-white">
            <img
              src="https://img.freepik.com/free-photo/travel-accessory-concept_1388-37.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid"
              alt="Denim Edge"
              className="rounded-lg w-full h-49 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-3">
              Denim Edge
            </h3>
            <button className="mt-2 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              Shop Now
            </button>
          </div>

          {/* Athleisure */}
          <div className="p-4 shadow-lg rounded-2xl bg-white">
            <img
              src="https://img.freepik.com/free-photo/training-supplies-near-tablet-with-picture_23-2147750794.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid"
              alt="Athleisure"
              className="rounded-lg w-full h-49 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-3">
              Athleisure
            </h3>
            <button className="mt-2 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Shop the Look Section */}

      <section>
        <h2 className="md:text-4xl text-3xl mt-[-20px] mb-20 md:mt-[16px] md:mb-16">𝑺𝒉𝒐𝒑 𝒕𝒉𝒆 𝑳𝒐𝒐𝒌 🛍️</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Summer Vibes */}
          <div className="p-4 shadow-lg rounded-2xl bg-white">
            <img
              src="https://img.freepik.com/free-vector/flat-frame-template-summertime-season_23-2150320861.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid"
              alt="Summer Vibes"
              className="rounded-lg w-full h-49 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-3 mb-3">
              Summer Vibes
            </h3>
            <button className="mt-2 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
              Shop Now
            </button>
          </div>

          {/* Winter Cozy */}
          <div className="p-4 shadow-lg rounded-2xl bg-white">
            <img
              src="https://img.freepik.com/free-vector/creative-winter-social-media-post_23-2148792919.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid"
              alt="Winter Cozy"
              className="rounded-lg w-full h-49 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-3 mb-3">
              Winter Cozy
            </h3>
            <button className="mt-2 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
              Shop Now
            </button>
          </div>

          {/* Autumn Elegance (New Addition) */}
          <div className="p-4 shadow-lg rounded-2xl bg-white">
            <img
              src="https://img.freepik.com/free-vector/autumn-minimalist-background_23-2147497314.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid"
              alt="Autumn Elegance"
              className="rounded-lg w-full h-49 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-3 mb-3">
              Autumn Elegance
            </h3>
            <button className="mt-2 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
              Shop Now
            </button>
          </div>

          {/* Monsoon Magic */}
          <div className="p-4 shadow-lg rounded-2xl bg-white">
            <img
              src="https://img.freepik.com/free-vector/monsoon-sale-background_23-2147649836.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_hybrid"
              alt="Monsoon Magic"
              className="rounded-lg w-full h-49 object-cover"
            />
            <h3 className="text-xl font-semibold text-center mt-3 mb-3">
              Monsoon Magic
            </h3>
            <button className="mt-2 w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Limited Edition Drops Section */}

      <section>
        <h2 data-aos="fade-up" className="text-2xl font-bold md:mt-16 mb-4">𝑳𝒊𝒎𝒊𝒕𝒆𝒅 𝑬𝒅𝒊𝒕𝒊𝒐𝒏 𝑫𝒓𝒐𝒑𝒔 ⏳</h2>
        <div data-aos="fade-up" className="flex flex-col md:flex-row items-center gap-6">
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

      {/* Celebrity & Influencer Picks Section */}

      <section>
        <h2 data-aos="fade-up" className="md:text-4xl text-3xl mt-[-20px] mb-20 md:mt-[26px] md:mb-16">
           𝑪𝒆𝒍𝒆𝒃𝒓𝒊𝒕𝒚 & 𝑰𝒏𝒇𝒍𝒖𝒆𝒏𝒄𝒆𝒓 𝑪𝒍𝒐𝒔𝒆𝒕🌟
        </h2>

        {/* men */}
        <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-6 gap-6">
          
          <motion.div
            className="p-4 shadow-lg rounded-2xl bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0565/1169/2936/files/TUX2502_533x.jpg?v=1708334949"
              alt="Shahid Kapoor In Orion Nebula Tuxedo"
              className="rounded-lg w-full h-58 object-cover"
            />
            <h3 className="text-md font-semibold mt-3">Shahid Kapoor In Orion Nebula Tuxedo</h3>
            <p className="text-red-500 font-extrabold mt-3 text-lg">Rs 195,000</p>
            <button className="mt-2 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
              Quick Buy
            </button>
          </motion.div>

          <motion.div
            className="p-4 shadow-lg rounded-2xl bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0565/1169/2936/files/MKPSL1332_533x.jpg?v=1726483545"
              alt="Ahan Shetty In Embellished Black Kurta"
              className="rounded-lg w-full h-58 object-cover"
            />
            <h3 className="text-md font-semibold mt-3">Ahan Shetty In Embellished Black Kurta</h3>
            <p className="text-red-500 font-extrabold mt-3 text-lg">Rs 44,500</p>
            <button className="mt-2 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
              Quick Buy
            </button>
          </motion.div>

          <motion.div
            className="p-4 shadow-lg rounded-2xl bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0565/1169/2936/files/RR1586K_533x.jpg?v=1695905187"
              alt="Vicky Kaushal In Chikankari Short Kurta"
              className="rounded-lg w-full h-58 object-cover"
            />
            <h3 className="text-md font-semibold mt-3">Vicky Kaushal In Chikankari Short Kurta</h3>
            <p className="text-red-500 font-extrabold mt-3 text-lg">Rs 24,500</p>
            <button className="mt-2 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
              Quick Buy
            </button>
          </motion.div>

          <motion.div
            className="p-4 shadow-lg rounded-2xl bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0565/1169/2936/products/1_ef3e8f34-e441-4063-996c-0c9bb09703d2_533x.jpg?v=1669881787"
              alt="Ranveer Singh In Wildflower Embellished Tuxedo"
              className="rounded-lg w-full h-58 object-cover"
            />
            <h3 className="text-sm font-semibold mt-3">Ranveer Singh In Wildflower Embellished Tuxedo</h3>
            <p className="text-red-500 font-extrabold mt-3 text-lg">Rs 145,000</p>
            <button className="mt-2 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
              Quick Buy
            </button>
          </motion.div>

          <motion.div
            className="p-4 shadow-lg rounded-2xl bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0565/1169/2936/files/MSH4751_2_fef4033c-dba0-4032-9b7d-fe88e244ab8e_533x.jpg?v=1729324607"
              alt="Jasprit Bumrah In Pyrrhus Sherwani Set"
              className="rounded-lg w-full h-58 object-cover"
            />
            <h3 className="text-md font-semibold mt-3">Jasprit Bumrah In Pyrrhus Sherwani Set</h3>
            <p className="text-red-500 font-extrabold mt-3 text-lg">Rs 345,000</p>
            <button className="mt-2 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
              Quick Buy
            </button>
          </motion.div>

          <motion.div
            className="p-4 shadow-lg rounded-2xl bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0565/1169/2936/products/IshaanKhatterwearingRohitGandhi_RahulKhanna_2_533x.png?v=1673603061"
              alt="Ishaan Khattar In Supernova Tuxedo"
              className="rounded-lg w-full h-58 object-cover"
            />
            <h3 className="text-md font-semibold mt-3">Ishaan Khattar In Supernova Tuxedo</h3>
            <p className="text-red-500 font-extrabold mt-3 text-lg">Rs 115,000</p>
            <button className="mt-2 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
              Quick Buy
            </button>
          </motion.div>

        </div>
        <br />
        {/* women */}
        <div data-aos="fade-up" className="grid grid-cols-2 md:grid-cols-6 gap-6">
          
          <motion.div
            className="p-4 shadow-lg rounded-2xl bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0565/1169/2936/files/GW6166_f1218f8d-7707-43a7-bd6c-ebcba42a0474_533x.jpg?v=1729324489"
              alt="Ananya Panday In Mist Crossover Panels Gown"
              className="rounded-lg w-full h-58 object-cover"
            />
            <h3 className="text-md font-semibold mt-3">Ananya Panday In Mist Crossover Panels Gown</h3>
            <p className="text-red-500 font-extrabold mt-3 text-lg">Rs 395,000</p>
            <button className="mt-2 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
              Quick Buy
            </button>
          </motion.div>

          <motion.div
            className="p-4 shadow-lg rounded-2xl bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0565/1169/2936/files/GW6100_349de73e-cd10-4c72-9678-8c7742c31fc1_533x.jpg?v=1729324524"
              alt="Dia Mirza In Starry Glitch Gown"
              className="rounded-lg w-full h-58 object-cover"
            />
            <h3 className="text-md font-semibold mt-3">Dia Mirza In Starry Glitch Gown</h3>
            <p className="text-red-500 font-extrabold mt-3 text-lg">Rs 195,000</p>
            <button className="mt-2 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
              Quick Buy
            </button>
          </motion.div>

          <motion.div
            className="p-4 shadow-lg rounded-2xl bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0565/1169/2936/files/JKT14003_533x.jpg?v=1683551150"
              alt="Sanjana Sanghi In Galactic Black Paneled Jacket"
              className="rounded-lg w-full h-58 object-cover"
            />
            <h3 className="text-md font-semibold mt-3">Sanjana Sanghi In Galactic Black Paneled Jacket</h3>
            <p className="text-red-500 font-extrabold mt-3 text-lg">Rs 64,500</p>
            <button className="mt-2 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
              Quick Buy
            </button>
          </motion.div>

          <motion.div
            className="p-4 shadow-lg rounded-2xl bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0565/1169/2936/files/GW6122_2_533x.jpg?v=1688393612"
              alt="Amy Jackson In Venus Embellished Gown"
              className="rounded-lg w-full h-58 object-cover"
            />
            <h3 className="text-sm font-semibold mt-3">Amy Jackson In Venus Embellished Gown</h3>
            <p className="text-red-500 font-extrabold mt-3 text-lg">Rs 185,000</p>
            <button className="mt-2 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
              Quick Buy
            </button>
          </motion.div>

          <motion.div
            className="p-4 shadow-lg rounded-2xl bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0565/1169/2936/products/DishaF4_533x.jpg?v=1671541024"
              alt="Disha Patani In Axio Jumpsuit"
              className="rounded-lg w-full h-58 object-cover"
            />
            <h3 className="text-md font-semibold mt-3">Disha Patani In Axio Jumpsuit</h3>
            <p className="text-red-500 font-extrabold mt-3 text-lg">Rs 225,000</p>
            <button className="mt-2 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
              Quick Buy
            </button>
          </motion.div>

          <motion.div
            className="p-4 shadow-lg rounded-2xl bg-white"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src="https://cdn.shopify.com/s/files/1/0565/1169/2936/products/TamannaahBhatiawearingRohitGandhi_RahulKhannaandVandals_2_533x.jpg?v=1671529585"
              alt="Tamannaah Bhatia In Twilight Jacket Set"
              className="rounded-lg w-full h-58 object-cover"
            />
            <h3 className="text-md font-semibold mt-3">Tamannaah Bhatia In Twilight Jacket Set</h3>
            <p className="text-red-500 font-extrabold mt-3 text-lg">Rs 93,000</p>
            <button className="mt-2 w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
              Quick Buy
            </button>
          </motion.div>

        </div>
      </section>

      {/* Trending Colors & Styles Section */}

      <section>
        <h2 className="text-2xl font-bold mb-4">Trending Colors & Styles 🎨</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(colorStyles).map(([colorName, colorHex], index) => (
            <div
              key={index}
              className="p-4 shadow-lg rounded-2xl bg-white text-center"
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
