import Slider from "react-slick";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { BsChatSquareQuote } from "react-icons/bs";

const TestimonialData = [
  {
    id: 1,
    name: "Amit Sharma",
    location: "New Delhi",
    text: "The product quality was top-notch, and the delivery was super fast. Loved the experience!",
    img: "https://www.shutterstock.com/image-photo/happy-handsome-young-indian-man-260nw-2315729087.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Mehta",
    location: "Mumbai",
    text: "The shopping experience was seamless! The checkout process was smooth, and I got exactly what I ordered.",
    img: "https://www.shutterstock.com/image-photo/headshot-close-portrait-smiling-young-260nw-1994148899.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Rahul Mehta",
    location: "Pune",
    text: "Ordered a formal shirt and trousers for my office wear, and they fit perfectly. The fabric is breathable and comfortable for    all-day wear. SwiftCart is now my go-to online store for fashion!",
    img: "https://www.shutterstock.com/image-photo/closeup-portrait-young-smiling-hispanic-260nw-2327799157.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Neha Gupta",
    location: "Bangalore",
    text: "Amazing variety and high-quality products. SwiftCart is my new go-to shopping site!",
    img: "https://www.shutterstock.com/image-photo/profile-picture-calm-smiling-indian-260nw-1863568432.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Ananya Reddy",
    location: "Hyderabad",
    text: "Loved the ethnic wear collection on SwiftCart! Ordered a lehenga for a wedding, and it looked exactly as shown on the website. The embroidery work was beautiful, and the fitting was great. Worth every penny!",
    img: "https://www.shutterstock.com/image-photo/close-horizontal-front-portrait-attractive-600nw-1505922530.jpg",
    rating: 5,
  },
];

const StarRating = ({ rating }) => (
  <div className="flex justify-center mt-2">
    {Array.from({ length: 5 }).map((_, index) => (
      <FaStar key={index} className={`text-sm ${index < rating ? "text-yellow-400" : "text-gray-500"}`} />
    ))}
  </div>
);

const Testimonials = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      { breakpoint: 10000, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="py-20 md:w-[95%] w-[90%] md:mx-10 mx-5 rounded-3xl bg-gradient-to-r from-blue-100 via-purple-200 to-pink-200 dark:from-gray-500 dark:via-purple-300 dark:to-blue-300">
      <div className="container mx-auto mt-[-20px]">
        <div data-aos="zoom-in" className="text-center mb-12">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="md:text-4xl text-2xl font-extrabold text-gray-900 dark:text-black">
            𝑾𝒉𝒂𝒕 𝒐𝒖𝒓 𝒄𝒖𝒔𝒕𝒐𝒎𝒆𝒓𝒔 𝒂𝒓𝒆 𝒔𝒂𝒚𝒊𝒏𝒈 💬
          </motion.h1>
          <p className="text-gray-600 mt-2 md:text-lg dark:text-gray-900">
            𝑯𝒐𝒏𝒆𝒔𝒕 𝒐𝒑𝒊𝒏𝒊𝒐𝒏𝒔 𝒇𝒓𝒐𝒎 𝒓𝒆𝒂𝒍 𝒔𝒉𝒐𝒑𝒑𝒆𝒓𝒔!
          </p>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <motion.div key={data.id} className="px-4 flex justify-center">
                <div data-aos="zoom-in" className="w-full max-w-xs min-h-[380px] flex flex-col justify-between p-6 bg-white dark:bg-gray-300 shadow-xl rounded-2xl items-center text-center transition-transform duration-500">
                  <motion.img src={data.img} alt={data.name} className="rounded-full w-16 h-16 border-4 border-blue-500 shadow-md" />
                  <h2 className="mt-3 text-lg font-semibold text-gray-900">{data.name}</h2>
                  <p className="text-sm text-gray-500">{data.location}</p>
                  <StarRating rating={data.rating} />
                  <p className="text-sm text-gray-700 mt-3">{data.text}</p>
                  <BsChatSquareQuote className="text-blue-500 text-3xl mt-4" />
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;