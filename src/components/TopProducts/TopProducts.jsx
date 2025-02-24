import { FaStar } from "react-icons/fa";
import { useState } from "react";
import Img1 from "../../assets/shirt/product1-removebg-preview.png";
import Img2 from "../../assets/shirt/product2-Photoroom.png";
import Img3 from "../../assets/shirt/product3-Photoroom.png";
import Img4 from "../../assets/shirt/product4-Photoroom.png";
import Img5 from "../../assets/shirt/product5-Photoroom.png";
import Img6 from "../../assets/mens collection/pic15-Photoroom.png";
import Img7 from "../../assets/shirt/product6-Photoroom.png";
import Img8 from "../../assets/shirt/product7-Photoroom.png";
import Img9 from "../../assets/mens collection/pic16-Photoroom.png";
import Img10 from "../../assets/women collection/pic1-Photoroom.png";

const ProductsData = [
  { id: 1, img: Img1, title: "More & More Unisex-Adult Hooded Sweatshirt", price: "₹599", rating: 4.5 },
  { id: 2, img: Img2, title: "THE ARCHER Men's Slim Fit Vest Pack of 2", price: "₹449", rating: 4.2 },
  { id: 3, img: Img3, title: "Indya Women's Georgette Floral Kurta", price: "₹1,600", rating: 4.7 },
  { id: 4, img: Img4, title: "FEICE Watches for Men Automatic Watch", price: "₹29,749", rating: 5 },
  { id: 5, img: Img5, title: "Hopscotch Girls Viscose Blouse & Shorts Set", price: "₹899", rating: 4.3 },
  { id: 6, img: Img6, title: "Symbol Premium Men's Formal Derby Shoes", price: "₹2,399", rating: 4.6 },
  { id: 7, img: Img7, title: "Karsaer Oversized Rimless Sunglasses", price: "₹2,999", rating: 4.8 },
  { id: 8, img: Img8, title: "MODARUE Anime T-Shirt for Boys", price: "₹999", rating: 4.4 },
  { id: 9, img: Img9, title: "Pashmoda Men Jamawar Pashmina Shawl", price: "₹1,087", rating: 4.1 },
  { id: 10, img: Img10, title: "AKHILAM Women's Georgette Saree", price: "₹2,029", rating: 4.9 },
];

const TopProducts = ({ addToCart }) => {
  const [loading, setLoading] = useState(null);

  const handleAddToCart = (product) => {
    setLoading(product.id);
    setTimeout(() => {
      addToCart(product);
      setLoading(null);
    }, 500);
  };

  return (
    <div className="container py-10 px-5">
      <div data-aos="fade-up" className="text-center mb-20">
        <h1 className="md:text-4xl text-3xl md:mt-[-10px] font-extrabold text-gray-900 dark:text-white ">
        ❤️‍🔥 𝑩𝒆𝒔𝒕 𝑺𝒆𝒍𝒍𝒊𝒏𝒈 𝑷𝒊𝒄𝒌𝒔 ❤️‍🔥
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mt-4">
           𝑬𝒍𝒆𝒗𝒂𝒕𝒆 𝒚𝒐𝒖𝒓 𝒘𝒂𝒓𝒅𝒓𝒐𝒃𝒆 𝒘𝒊𝒕𝒉 𝒃𝒆𝒔𝒕-𝒔𝒆𝒍𝒍𝒊𝒏𝒈 𝒕𝒓𝒆𝒏𝒅𝒔!
        </p>
      </div>

      <div data-aos="fade-up" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 place-items-center">
        {ProductsData.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl bg-white dark:bg-gray-800 shadow-2xl p-5 flex flex-col items-center transform transition-all duration-500  w-full max-w-[270px] "
          >
            <div className="h-44 flex items-center justify-center overflow-hidden">
              <img
                src={product.img}
                alt={product.title}
                className="max-h-40 object-contain drop-shadow-lg transition-all duration-500"
              />
            </div>
            <div className="text-center w-full mt-5">
              <h1 className="text-lg font-semibold line-clamp-2 text-gray-900 dark:text-white leading-tight">
                {product.title}
              </h1>
              <div className="flex justify-center gap-1 mt-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < Math.round(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300 dark:text-gray-600"
                    }
                  />
                ))}
              </div>
              <p className="text-red-500 font-extrabold mt-3 text-lg">{product.price}</p>
              <button
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 text-white py-3 px-6 rounded-lg mt-5 w-full flex items-center justify-center gap-2 dark:hover:bg-white dark:hover:text-white transition-all duration-500 shadow-md hover:shadow-lg"
                onClick={() => handleAddToCart(product)}
                disabled={loading === product.id}
              >
                {loading === product.id ? "Adding..." : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
