import { FaStar } from "react-icons/fa";
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
  { id: 1, img: Img1, title: "More & More Unisex-Adult Hooded Sweatshirt", price: "₹599" },
  { id: 2, img: Img2, title: "THE ARCHER Men's Slim Fit Vest Pack of 2", price: "₹449" },
  { id: 3, img: Img3, title: "Indya Women's Georgette Floral Kurta", price: "₹1,600" },
  { id: 4, img: Img4, title: "FEICE Watches for Men Automatic Watch", price: "₹29,749" },
  { id: 5, img: Img5, title: "Hopscotch Girls Viscose Blouse & Shorts Set", price: "₹899" },
  { id: 6, img: Img6, title: "Symbol Premium Mens Formal Derby Shoes", price: "₹2,399" },
  { id: 7, img: Img7, title: "Karsaer Oversized Rimless Sunglasses", price: "₹2,999" },
  { id: 8, img: Img8, title: "MODARUE Anime T Shirt for Boys", price: "₹999" },
  { id: 9, img: Img9, title: "Pashmoda Men Jamawar Pashmina Shawl", price: "₹1,087" },
  { id: 10, img: Img10, title: "AKHILAM Women's Georgette Saree", price: "₹2,029" },
];

const TopProducts = ({ addToCart }) => {
  return (
    <div>
      <div id="bestselling" className="container">
        <div className="text-center mt-[-18px] mb-12 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="md:text-4xl text-2xl mt-2 font-bold">
            𝑩𝒆𝒔𝒕 𝑺𝒆𝒍𝒍𝒊𝒏𝒈 𝑷𝒊𝒄𝒌𝒔
          </h1>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 place-items-center">
          {ProductsData.map((product) => (
            <div key={product.id} className="rounded-2xl text-center bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white shadow-xl duration-300 group w-full sm:w-[200px] md:w-[250px] h-[350px] flex flex-col justify-between">
              <div className="h-[160px] flex items-center justify-center">
                <img src={product.img} alt={product.title} className="max-w-[110px] md:mt-10 md:max-w-[150px] object-contain block mx-auto transform group-hover:scale-105 duration-300 drop-shadow-md" />
              </div>
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h1 className="text-sm font-bold line-clamp-2 md:mt-6">{product.title}</h1>
                <div className="flex gap-1 md:mx-16 md:mt-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500" />
                  ))}
                </div>
                <p className="text-red-500 font-bold md:mt-1 text-sm mt-4">{product.price}</p>
                <button 
                  className="bg-primary hover:scale-105 duration-300 md:mt-3 text-white py-1 rounded-md mt-auto group-hover:bg-white group-hover:text-primary"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
