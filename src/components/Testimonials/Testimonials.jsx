// import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Amit Sharma, New Delhi",
    text: "I recently bought a shirt from SwiftCart, and I am beyond impressed! The product was exactly as described, and the delivery was quicker than expected. I was also pleasantly surprised by the packaging – everything was secure and intact. I'm definitely going to be a regular customer. Keep up the great work!",
    img: "https://www.shutterstock.com/image-photo/happy-handsome-young-indian-man-260nw-2315729087.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
  {
    id: 2,
    name: "Priya Mehta, Mumbai",
    text: "SwiftCart is my new favorite online store! I ordered a electronic item, and it arrived in perfect condition. The product quality is amazing, and it works just as advertised. However, the delivery was slightly delayed, which is why I’m giving it 4 stars instead of 5. Nevertheless, the customer service was responsive, and I’ll definitely shop here again.",
    img: "https://www.shutterstock.com/image-photo/headshot-close-portrait-smiling-young-260nw-1994148899.jpg",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 3,
    name: "Neha Gupta, Bangalore",
    text: "SwiftCart has a great variety of products, and I’ve found some fantastic deals here. My last purchase, a fitness tracker, came in perfect condition, and I’m loving it. However, I feel the website could use a little more filtering options for easier browsing. Otherwise, it's a great platform with trustworthy service.",
    img: "https://www.shutterstock.com/image-photo/profile-picture-calm-smiling-indian-260nw-1863568432.jpg",
    rating: "⭐⭐⭐⭐",
  },
  {
    id: 5,
    name: "Karan Singh, Chandigarh",
    text: "I've been shopping online for years, but SwiftCart has really impressed me. The website is easy to navigate, and I could find everything I was looking for. My order for a laptop bag arrived within two days, and I’m really happy with the quality. Will definitely recommend it to my friends and family!",
    img: "https://www.shutterstock.com/image-photo/portrait-young-indian-male-student-260nw-2335361027.jpg",
    rating: "⭐⭐⭐⭐⭐",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mt-[-20px] mb-6 max-w-[600px] mx-auto">
          
          <h1 data-aos="fade-up" className="md:text-4xl text-2xl font-bold">
          𝑾𝒉𝒂𝒕 𝒐𝒖𝒓 𝒄𝒖𝒔𝒕𝒐𝒎𝒆𝒓𝒔 𝒂𝒓𝒆 𝒔𝒂𝒚𝒊𝒏𝒈
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600  bg-primary/10 relative"
                >
                <div >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div>
                    
                  </div>
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs dark:text-slate-300 text-gray-500 mt-[-15px]">
                        {data.text}
                      </p>
                      <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                      <div>{data.rating}</div>
                    </div>
                  </div>
                  
                  <p className="text-black/20  text-9xl font-serif absolute top-0 right-0"></p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        
      </div>
    </div>
  );
};

export default Testimonials;
