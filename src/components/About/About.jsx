// import React from 'react'
import Image1 from "../../assets/website/image1.png";
import Image2 from "../../assets/website/image2.png";
import Image3 from "../../assets/website/image3.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "𝑨𝒃𝒐𝒖𝒕 𝑺𝒘𝒊𝒇𝒕𝑪𝒂𝒓𝒕 – 𝒀𝒐𝒖𝒓 𝑼𝒍𝒕𝒊𝒎𝒂𝒕𝒆 𝑭𝒂𝒔𝒉𝒊𝒐𝒏 𝑫𝒆𝒔𝒕𝒊𝒏𝒂𝒕𝒊𝒐𝒏!",
    description:
      "𝑨𝒕 𝑺𝒘𝒊𝒇𝒕𝑪𝒂𝒓𝒕, 𝒘𝒆 𝒃𝒓𝒊𝒏𝒈 𝒚𝒐𝒖 𝒕𝒉𝒆 𝒍𝒂𝒕𝒆𝒔𝒕 𝒇𝒂𝒔𝒉𝒊𝒐𝒏 𝒕𝒓𝒆𝒏𝒅𝒔 𝒂𝒕 𝒖𝒏𝒃𝒆𝒂𝒕𝒂𝒃𝒍𝒆 𝒑𝒓𝒊𝒄𝒆𝒔! 𝑭𝒓𝒐𝒎 𝒆𝒗𝒆𝒓𝒚𝒅𝒂𝒚 𝒆𝒔𝒔𝒆𝒏𝒕𝒊𝒂𝒍𝒔 𝒕𝒐 𝒔𝒕𝒂𝒕𝒆𝒎𝒆𝒏𝒕 𝒑𝒊𝒆𝒄𝒆𝒔, 𝒘𝒆 𝒆𝒏𝒔𝒖𝒓𝒆 𝒉𝒊𝒈𝒉-𝒒𝒖𝒂𝒍𝒊𝒕𝒚, 𝒔𝒕𝒚𝒍𝒊𝒔𝒉, 𝒂𝒏𝒅 𝒂𝒇𝒇𝒐𝒓𝒅𝒂𝒃𝒍𝒆 𝒄𝒍𝒐𝒕𝒉𝒊𝒏𝒈 𝒇𝒐𝒓 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆. 𝑺𝒉𝒐𝒑 𝒘𝒊𝒕𝒉 𝒄𝒐𝒏𝒇𝒊𝒅𝒆𝒏𝒄𝒆 𝒂𝒏𝒅 𝒆𝒏𝒋𝒐𝒚 𝒆𝒙𝒄𝒍𝒖𝒔𝒊𝒗𝒆 𝒐𝒇𝒇𝒆𝒓𝒔, 𝒇𝒂𝒔𝒕 𝒅𝒆𝒍𝒊𝒗𝒆𝒓𝒚, 𝒂𝒏𝒅 𝒂 𝒔𝒆𝒂𝒎𝒍𝒆𝒔𝒔 𝒔𝒉𝒐𝒑𝒑𝒊𝒏𝒈 𝒆𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆! 🚀 ",
  },
  {
    id: 2,
    img: Image2,
    title: "𝑺𝒘𝒊𝒇𝒕𝑪𝒂𝒓𝒕 – 𝑭𝒂𝒔𝒕 & 𝑹𝒆𝒍𝒊𝒂𝒃𝒍𝒆 𝑫𝒆𝒍𝒊𝒗𝒆𝒓𝒚!",
    description:
      "𝒀𝒐𝒖𝒓 𝒔𝒕𝒚𝒍𝒆, 𝒅𝒆𝒍𝒊𝒗𝒆𝒓𝒆𝒅 𝒇𝒂𝒔𝒕! ⚡ 𝑾𝒊𝒕𝒉 𝑺𝒘𝒊𝒇𝒕𝑪𝒂𝒓𝒕, 𝒆𝒏𝒋𝒐𝒚 𝒒𝒖𝒊𝒄𝒌, 𝒉𝒂𝒔𝒔𝒍𝒆-𝒇𝒓𝒆𝒆 𝒅𝒆𝒍𝒊𝒗𝒆𝒓𝒚 𝒔𝒕𝒓𝒂𝒊𝒈𝒉𝒕 𝒕𝒐 𝒚𝒐𝒖𝒓 𝒅𝒐𝒐𝒓𝒔𝒕𝒆𝒑. 𝑺𝒉𝒐𝒑 𝒏𝒐𝒘 𝒂𝒏𝒅 𝒈𝒆𝒕 𝒚𝒐𝒖𝒓 𝒇𝒂𝒗𝒐𝒓𝒊𝒕𝒆 𝒇𝒂𝒔𝒉𝒊𝒐𝒏 𝒑𝒊𝒄𝒌𝒔 𝒊𝒏 𝒏𝒐 𝒕𝒊𝒎𝒆! 🛍️",
  },
  {
    id: 3,
    img: Image3,
    title: "𝑬𝒙𝒄𝒍𝒖𝒔𝒊𝒗𝒆 𝑫𝒆𝒂𝒍𝒔 & 𝑩𝒊𝒈 𝑺𝒂𝒗𝒊𝒏𝒈𝒔!",
    description:
      "𝑺𝒉𝒐𝒑 𝒎𝒐𝒓𝒆, 𝒔𝒂𝒗𝒆 𝒎𝒐𝒓𝒆! 🛍️ 𝑬𝒏𝒋𝒐𝒚 𝒆𝒙𝒄𝒊𝒕𝒊𝒏𝒈 𝒅𝒊𝒔𝒄𝒐𝒖𝒏𝒕𝒔, 𝒇𝒍𝒂𝒔𝒉 𝒔𝒂𝒍𝒆𝒔, 𝒂𝒏𝒅 𝒍𝒊𝒎𝒊𝒕𝒆𝒅-𝒕𝒊𝒎𝒆 𝒐𝒇𝒇𝒆𝒓𝒔 𝒐𝒏 𝒕𝒉𝒆 𝒕𝒓𝒆𝒏𝒅𝒊𝒆𝒔𝒕 𝒔𝒕𝒚𝒍𝒆𝒔. 𝑫𝒐𝒏'𝒕 𝒎𝒊𝒔𝒔 𝒐𝒖𝒕—𝒈𝒓𝒂𝒃 𝒚𝒐𝒖𝒓 𝒇𝒂𝒗𝒐𝒓𝒊𝒕𝒆𝒔 𝒃𝒆𝒇𝒐𝒓𝒆 𝒕𝒉𝒆𝒚'𝒓𝒆 𝒈𝒐𝒏𝒆! ⚡",
  },
];

const About = () => {
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
    <div>
      <div className="relative overflow-hidden min-h-[500px] sm:min-h-[500px] flex justify-center items-center duration-200">
        {/* Gradient Background based on the Theme (Light Mode vs Dark Mode) */}
        <div className="absolute inset-0 z-0">
          <div className="bg-red-100   dark:bg-gray-900 w-full h-full"></div>
        </div>

        {/* Hero Section */}
        <div className="container pb-8 sm:pb-0 relative z-10">
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
                      className="text-xl md:text-5xl font-bold md:mt-[-20px] mt-[-60px]"
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
                    ></div>
                  </div>

                  {/* 3D Image Section */}
                  <div className="order-1 sm:order-2 relative">
                    <div className="relative z-10">
                      <img
                        src={data.img}
                        alt="Sale"
                        className=" mt-[-1px] md:mt-[-20px] w-[750px] h-[300px]  sm:h-[400px] sm:w-[780px]  sm:scale-105 lg:scale-120 object-contain md:mx-auto mx-[-5px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <hr />
        <br />
        <br />
      <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
        <div className="conatiner">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
            <div data-aos="zoom-in">
              <img
                data-aos="fade-up"
                className="md:max-w-[550px] max-w-[450px] mt-[-10px] md:h-[400px] w-full mx-auto object-cover"
                src="https://img.freepik.com/free-vector/about-us-concept-illustration_114360-669.jpg?uid=R185957045&ga=GA1.1.1093141504.1716553820&semt=ais_incoming"
                alt="about us image"
              />
            </div>
            <div className="flex flex-col justify-center mx-3 gap-6 sm:pt-0">
              <h1
                data-aos="fade-up"
                className="text-2xl mx-5 sm:text-4xl font-bold"
              >
                𝑾𝒉𝒐 𝑾𝒆 𝑨𝒓𝒆
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wide leading-5 mx-5 "
              >
                𝑾𝒆𝒍𝒄𝒐𝒎𝒆 𝒕𝒐 𝑺𝒘𝒊𝒇𝒕𝑪𝒂𝒓𝒕, 𝒚𝒐𝒖𝒓 𝒖𝒍𝒕𝒊𝒎𝒂𝒕𝒆 𝒅𝒆𝒔𝒕𝒊𝒏𝒂𝒕𝒊𝒐𝒏 𝒇𝒐𝒓 𝒕𝒓𝒆𝒏𝒅𝒚,                 𝒉𝒊𝒈𝒉-𝒒𝒖𝒂𝒍𝒊𝒕𝒚, 𝒂𝒏𝒅 𝒂𝒇𝒇𝒐𝒓𝒅𝒂𝒃𝒍𝒆 𝒇𝒂𝒔𝒉𝒊𝒐𝒏. 𝑾𝒆 𝒂𝒓𝒆 𝒂 𝒕𝒆𝒂𝒎 𝒐𝒇                 𝒑𝒂𝒔𝒔𝒊𝒐𝒏𝒂𝒕𝒆 𝒇𝒂𝒔𝒉𝒊𝒐𝒏 𝒆𝒏𝒕𝒉𝒖𝒔𝒊𝒂𝒔𝒕𝒔 𝒅𝒆𝒅𝒊𝒄𝒂𝒕𝒆𝒅 𝒕𝒐 𝒃𝒓𝒊𝒏𝒈𝒊𝒏𝒈 𝒚𝒐𝒖 𝒕𝒉𝒆              𝒃𝒆𝒔𝒕 𝒄𝒍𝒐𝒕𝒉𝒊𝒏𝒈 𝒔𝒕𝒚𝒍𝒆𝒔, 𝒆𝒏𝒔𝒖𝒓𝒊𝒏𝒈 𝒚𝒐𝒖 𝒔𝒕𝒂𝒚 𝒂𝒉𝒆𝒂𝒅 𝒐𝒇 𝒕𝒉𝒆 𝒍𝒂𝒕𝒆𝒔𝒕                 𝒕𝒓𝒆𝒏𝒅𝒔 𝒘𝒊𝒕𝒉𝒐𝒖𝒕 𝒄𝒐𝒎𝒑𝒓𝒐𝒎𝒊𝒔𝒊𝒏𝒈 𝒐𝒏 𝒄𝒐𝒎𝒇𝒐𝒓𝒕 𝒐𝒓 𝒃𝒖𝒅𝒈𝒆𝒕.
              </p>
              <h1
                data-aos="fade-up"
                className="text-2xl mx-5 sm:text-4xl font-bold"
              >
                𝑶𝒖𝒓 𝑴𝒊𝒔𝒔𝒊𝒐𝒏
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wide leading-5 mx-5 "
              >
                𝑨𝒕 𝑺𝒘𝒊𝒇𝒕𝑪𝒂𝒓𝒕, 𝒐𝒖𝒓 𝒎𝒊𝒔𝒔𝒊𝒐𝒏 𝒊𝒔 𝒕𝒐 𝒎𝒂𝒌𝒆 𝒇𝒂𝒔𝒉𝒊𝒐𝒏 𝒂𝒄𝒄𝒆𝒔𝒔𝒊𝒃𝒍𝒆 𝒕𝒐                 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆. 𝑾𝒆 𝒃𝒆𝒍𝒊𝒆𝒗𝒆 𝒕𝒉𝒂𝒕 𝒔𝒕𝒚𝒍𝒆 𝒊𝒔 𝒂 𝒇𝒐𝒓𝒎 𝒐𝒇 𝒔𝒆𝒍𝒇-𝒆𝒙𝒑𝒓𝒆𝒔𝒔𝒊𝒐𝒏,                 𝒂𝒏𝒅 𝒆𝒗𝒆𝒓𝒚𝒐𝒏𝒆 𝒅𝒆𝒔𝒆𝒓𝒗𝒆𝒔 𝒕𝒐 𝒍𝒐𝒐𝒌 𝒂𝒏𝒅 𝒇𝒆𝒆𝒍 𝒕𝒉𝒆𝒊𝒓 𝒃𝒆𝒔𝒕. 𝑶𝒖𝒓 𝒄𝒂𝒓𝒆𝒇𝒖𝒍𝒍𝒚        𝒄𝒖𝒓𝒂𝒕𝒆𝒅 𝒄𝒐𝒍𝒍𝒆𝒄𝒕𝒊𝒐𝒏𝒔 𝒃𝒍𝒆𝒏𝒅 𝒆𝒍𝒆𝒈𝒂𝒏𝒄𝒆, 𝒄𝒐𝒎𝒇𝒐𝒓𝒕, 𝒂𝒏𝒅 𝒂𝒇𝒇𝒐𝒓𝒅𝒂𝒃𝒊𝒍𝒊𝒕𝒚,          𝒐𝒇𝒇𝒆𝒓𝒊𝒏𝒈 𝒔𝒐𝒎𝒆𝒕𝒉𝒊𝒏𝒈 𝒇𝒐𝒓 𝒆𝒗𝒆𝒓𝒚 𝒐𝒄𝒄𝒂𝒔𝒊𝒐𝒏—𝒃𝒆 𝒊𝒕 𝒄𝒂𝒔𝒖𝒂𝒍, 𝒇𝒐𝒓𝒎𝒂𝒍, 𝒐𝒓              𝒇𝒆𝒔𝒕𝒊𝒗𝒆.
              </p>
              <h1
                data-aos="fade-up"
                className="text-2xl mx-5 sm:text-4xl font-bold"
              >
                𝑾𝒉𝒚 𝑪𝒉𝒐𝒐𝒔𝒆 𝑺𝒘𝒊𝒇𝒕𝑪𝒂𝒓𝒕?
              </h1>
              <p
                data-aos="fade-up"
                className="text-sm text-gray-500 tracking-wide leading-5 mx-5 "
              >
                <ul>
                  <li>
                    ✅ 𝑻𝒓𝒆𝒏𝒅𝒚 & 𝑨𝒇𝒇𝒐𝒓𝒅𝒂𝒃𝒍𝒆 – 𝑮𝒆𝒕 𝒕𝒉𝒆 𝒍𝒂𝒕𝒆𝒔𝒕 𝒇𝒂𝒔𝒉𝒊𝒐𝒏 𝒘𝒊𝒕𝒉𝒐𝒖𝒕 𝒃𝒓𝒆𝒂𝒌𝒊𝒏𝒈 𝒕𝒉𝒆 𝒃𝒂𝒏𝒌.
                  </li>
                  <br />
                  <li>
                    ✅ 𝑸𝒖𝒂𝒍𝒊𝒕𝒚 𝑨𝒔𝒔𝒖𝒓𝒂𝒏𝒄𝒆 – 𝑾𝒆 𝒑𝒓𝒊𝒐𝒓𝒊𝒕𝒊𝒛𝒆 𝒑𝒓𝒆𝒎𝒊𝒖𝒎 𝒎𝒂𝒕𝒆𝒓𝒊𝒂𝒍𝒔 𝒇𝒐𝒓                   𝒍𝒂𝒔𝒕𝒊𝒏𝒈 𝒄𝒐𝒎𝒇𝒐𝒓𝒕.
                  </li>
                  <br />
                  <li>
                    ✅ 𝑺𝒆𝒂𝒎𝒍𝒆𝒔𝒔 𝑺𝒉𝒐𝒑𝒑𝒊𝒏𝒈 𝑬𝒙𝒑𝒆𝒓𝒊𝒆𝒏𝒄𝒆 – 𝑬𝒂𝒔𝒚 𝒏𝒂𝒗𝒊𝒈𝒂𝒕𝒊𝒐𝒏, 𝒔𝒆𝒄𝒖𝒓𝒆 𝒄𝒉𝒆𝒄𝒌𝒐𝒖𝒕, 𝒂𝒏𝒅 𝒇𝒂𝒔𝒕 𝒅𝒆𝒍𝒊𝒗𝒆𝒓𝒚.
                  </li>
                  <br />
                  <li>
                    ✅ 𝑪𝒖𝒔𝒕𝒐𝒎𝒆𝒓-𝑪𝒆𝒏𝒕𝒓𝒊𝒄 𝑨𝒑𝒑𝒓𝒐𝒂𝒄𝒉 – 𝒀𝒐𝒖𝒓 𝒔𝒂𝒕𝒊𝒔𝒇𝒂𝒄𝒕𝒊𝒐𝒏 𝒊𝒔 𝒐𝒖𝒓 𝒑𝒓𝒊𝒐𝒓𝒊𝒕𝒚.
                  </li>
                  <br />
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <hr />
    </div>
  );
};

export default About;
