// import React from "react";
import Image1 from "../../assets/hero/wintersale.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/traditionalsale.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "𝑳𝒊𝒎𝒊𝒕𝒆𝒅-𝑻𝒊𝒎𝒆 𝑺𝒕𝒆𝒂𝒍𝒔: 𝑼𝒑 𝒕𝒐 50% 𝑶𝒇𝒇 𝒐𝒏 𝑭𝒂𝒔𝒉𝒊𝒐𝒏 𝑴𝒖𝒔𝒕-𝑯𝒂𝒗𝒆𝒔!",
    description:
      "𝑻𝒊𝒎𝒆 𝒊𝒔 𝒓𝒖𝒏𝒏𝒊𝒏𝒈 𝒐𝒖𝒕! 𝑮𝒓𝒂𝒃 𝒚𝒐𝒖𝒓 𝒇𝒂𝒗𝒐𝒓𝒊𝒕𝒆 𝒇𝒂𝒔𝒉𝒊𝒐𝒏 𝒑𝒊𝒆𝒄𝒆𝒔 𝒂𝒕 𝒅𝒊𝒔𝒄𝒐𝒖𝒏𝒕𝒔 𝒐𝒇 𝒖𝒑 𝒕𝒐 70%. 𝑭𝒓𝒐𝒎 𝒔𝒕𝒚𝒍𝒊𝒔𝒉 𝒆𝒗𝒆𝒓𝒚𝒅𝒂𝒚 𝒘𝒆𝒂𝒓 𝒕𝒐 𝒔𝒕𝒂𝒕𝒆𝒎𝒆𝒏𝒕 𝒐𝒖𝒕𝒇𝒊𝒕𝒔, 𝒇𝒊𝒏𝒅 𝒕𝒉𝒆 𝒃𝒆𝒔𝒕 𝒅𝒆𝒂𝒍𝒔 𝒃𝒆𝒇𝒐𝒓𝒆 𝒕𝒉𝒆𝒚’𝒓𝒆 𝒈𝒐𝒏𝒆. 𝑺𝒉𝒐𝒑 𝒏𝒐𝒘—𝒐𝒏𝒄𝒆 𝒕𝒉𝒆𝒚'𝒓𝒆 𝒔𝒐𝒍𝒅 𝒐𝒖𝒕, 𝒕𝒉𝒆𝒚’𝒓𝒆 𝒈𝒐𝒏𝒆 𝒇𝒐𝒓 𝒈𝒐𝒐𝒅!",
  },
  {
    id: 2,
    img: Image2,
    title: "𝑹𝒆𝒇𝒓𝒆𝒔𝒉 𝒀𝒐𝒖𝒓 𝑾𝒂𝒓𝒅𝒓𝒐𝒃𝒆: 𝑼𝒑 𝒕𝒐 40% 𝑶𝒇𝒇 𝒐𝒏 𝑻𝒓𝒆𝒏𝒅𝒚 𝑺𝒕𝒚𝒍𝒆𝒔!",
    description:
      "𝑹𝒆𝒗𝒂𝒎𝒑 𝒚𝒐𝒖𝒓 𝒇𝒂𝒔𝒉𝒊𝒐𝒏 𝒈𝒂𝒎𝒆 𝒘𝒊𝒕𝒉 𝒕𝒉𝒆 𝒍𝒂𝒕𝒆𝒔𝒕 𝒔𝒕𝒚𝒍𝒆𝒔 𝒂𝒕 𝒖𝒏𝒃𝒆𝒂𝒕𝒂𝒃𝒍𝒆 𝒑𝒓𝒊𝒄𝒆𝒔! 𝑬𝒏𝒋𝒐𝒚 𝒖𝒑 𝒕𝒐 40% 𝒐𝒇𝒇 𝒐𝒏 𝒐𝒖𝒓 𝒆𝒙𝒄𝒍𝒖𝒔𝒊𝒗𝒆 𝒄𝒍𝒐𝒕𝒉𝒊𝒏𝒈 𝒄𝒐𝒍𝒍𝒆𝒄𝒕𝒊𝒐𝒏, 𝒇𝒆𝒂𝒕𝒖𝒓𝒊𝒏𝒈 𝒕𝒓𝒆𝒏𝒅𝒚 𝒐𝒖𝒕𝒇𝒊𝒕𝒔 𝒇𝒐𝒓 𝒆𝒗𝒆𝒓𝒚 𝒐𝒄𝒄𝒂𝒔𝒊𝒐𝒏. 𝑺𝒉𝒐𝒑 𝒏𝒐𝒘 𝒃𝒆𝒇𝒐𝒓𝒆 𝒕𝒉𝒆 𝒅𝒆𝒂𝒍𝒔 𝒓𝒖𝒏 𝒐𝒖𝒕!",
  },
  {
    id: 3,
    img: Image3,
    title: "𝑬𝒕𝒉𝒏𝒊𝒄 𝑬𝒍𝒆𝒈𝒂𝒏𝒄𝒆: 𝑼𝒑 𝒕𝒐 70% 𝑶𝒇𝒇 𝒐𝒏 𝑻𝒓𝒂𝒅𝒊𝒕𝒊𝒐𝒏𝒂𝒍 𝑺𝒕𝒚𝒍𝒆𝒔!",
    description:
      "𝑪𝒆𝒍𝒆𝒃𝒓𝒂𝒕𝒆 𝒕𝒓𝒂𝒅𝒊𝒕𝒊𝒐𝒏 𝒊𝒏 𝒔𝒕𝒚𝒍𝒆! 𝑺𝒉𝒐𝒑 𝒐𝒖𝒓 𝒆𝒙𝒄𝒍𝒖𝒔𝒊𝒗𝒆 𝒆𝒕𝒉𝒏𝒊𝒄 𝒘𝒆𝒂𝒓 𝒄𝒐𝒍𝒍𝒆𝒄𝒕𝒊𝒐𝒏 𝒘𝒊𝒕𝒉 𝒅𝒊𝒔𝒄𝒐𝒖𝒏𝒕𝒔 𝒐𝒇 𝒖𝒑 𝒕𝒐 70%. 𝑭𝒓𝒐𝒎 𝒈𝒓𝒂𝒄𝒆𝒇𝒖𝒍 𝒔𝒂𝒓𝒆𝒆𝒔 𝒕𝒐 𝒆𝒍𝒆𝒈𝒂𝒏𝒕 𝒌𝒖𝒓𝒕𝒂 𝒔𝒆𝒕𝒔, 𝒇𝒊𝒏𝒅 𝒕𝒉𝒆 𝒑𝒆𝒓𝒇𝒆𝒄𝒕 𝒐𝒖𝒕𝒇𝒊𝒕 𝒇𝒐𝒓 𝒆𝒗𝒆𝒓𝒚 𝒐𝒄𝒄𝒂𝒔𝒊𝒐𝒏. 𝑯𝒖𝒓𝒓𝒚—𝒍𝒊𝒎𝒊𝒕𝒆𝒅 𝒔𝒕𝒐𝒄𝒌 𝒂𝒗𝒂𝒊𝒍𝒂𝒃𝒍𝒆!",
  },
];

const Hero = () => {
  // Slider settings
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[570px] flex justify-center items-center duration-200">
      {/* Gradient Background based on the Theme (Light Mode vs Dark Mode) */}
      <div className="absolute inset-0 z-0">
        <div className="bg-red-100   dark:bg-gray-900 w-full h-full"></div>
      </div>

      {/* Hero Section */}
      <div className="container pb-8 sm:pb-0 relative z-10 ">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id} className="relative group">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* Text Content Section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-xl md:text-6xl font-bold md:mt-1 mt-[-35px]"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-md text-red-500 dark:text-red-500 "
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"  
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    {/* <button 
                    
                      className="cursor-pointer bg-primary dark:bg-primary dark:text-black px-6 py-3 rounded-xl border-[1px] border-slate-500 text-white font-medium group rounded-full"
                    >
                      <div class="relative overflow-hidden">
                        <p class="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                          Show Now
                        </p>
                        <p class="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                          OrderNow
                        </p>
                      </div>
                    </button> */}
                  </div>
                </div>

                {/* 3D Image Section */}
                <div className="order-1 sm:order-2 relative">
                  <div className="relative z-10">
                    <img
                      src={data.img}
                      alt="Sale"
                      className="mt-1 w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
