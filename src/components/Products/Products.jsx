import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/G/31/img24/MA/Sep/Jupiter24/EW/BrandsinFocus/Manyavar_2_978x1419._SX564_QL85_FMpng_.png",
    title: "Men's Ethnic",
    rating: 5.0,
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/G/31/img23/WA/2024/oct/BAU/kurta/BIF/Myx_978x1419._SX564_QL85_FMpng_.png",
    title: "Women's Ethnic",
    rating: 4.0,
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/G/31/img21/Watches2024/May/SS24/Coop/Seiko-W_9._SS800_QL85_FMpng_.png",
    title: "Watches",
    rating: 4.5,
  },
  {
    id: 4,
    img: "https://m.media-amazon.com/images/G/31/img2020/img21/kids/2024/Winterflip/Brand/Tommy_Hilfiger_girls_389x629._CB542219186_.png",
    title: "Kid's Wear",
    rating: 4.7,
  },
  {
    id: 5,
    img: "https://m.media-amazon.com/images/G/31/img21/Luggage/2023/revamp/herohalo/brands/American_tourister._CB601512516_.png",
    title: "Bag & Luggage",
    rating: 4.2,
  },
  {
    id: 6,
    img: "https://m.media-amazon.com/images/G/31/img21/shoes/2024/BAUFLIPDEC/Topbran/11_758x1100._SS400_QL85_FMpng_.png",
    title: "Boots",
    rating: 4.0,
  },
  {
    id: 7,
    img: "https://m.media-amazon.com/images/G/31/img2020/img21/apparelGW/wrsdec23/eyebbd/wa/Block_buster_deals-6._SS400_QL85_FMpng_.png",
    title: "Eyewear's",
    rating: 4.8,
  },
  {
    id: 8,
    img: "https://m.media-amazon.com/images/G/31/img24/WS/brandsinfocus/bau/Bata_781x1101._SS400_QL85_FMpng_.png",
    title: "Women's Footwear",
    rating: 4.7,
  },
  {
    id: 9,
    img: "https://m.media-amazon.com/images/G/31/img2020/img21/kids/2024/Winterflip/Brand/Jack__Jones_389x629._CB542219186_.png",
    title: "Women's Footwear",
    rating: 4.7,
  },
  {
    id: 10,
    img: "https://m.media-amazon.com/images/G/31/img2021/Sportswear_21/SW_22/May/XCM_flip/Brand_Tiles/Women/brands_02._SY530_QL85_.jpg",
    title: "Women's Sportswear",
    rating: 4.5,
  },
 

];

const Products = () => {
    return (
      <div id="trendingdeal" className="mt-8 md:mt-10 mb-12 overflow-hidden">
        <div  className="container">
          <div className="text-center mb-20 max-w-[600px] mx-auto">
            <h1 className="md:text-4xl text-2xl mt-2 md:mt-10 font-bold">
              𝑻𝒓𝒆𝒏𝒅𝒊𝒏𝒈 𝑫𝒆𝒂𝒍𝒔 & 𝑶𝒇𝒇𝒆𝒓
            </h1>
          </div>
  
          {/* Moving Grid Wrapper */}
          <div className="scroll-container ">
            <div className="scroll-content">
              {/* Duplicate the array to make it loop infinitely */}
              {[...ProductsData, ...ProductsData].map((data, index) => (
                <div key={index} className="min-w-[180px] sm:min-w-[200px] space-y-3 p-2 bg-white shadow-md rounded-md bg-transparent">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="h-[200px] sm:h-[250px] w-full object-cover rounded-md"
                  />
                  {/* <div className="text-center">
                    <h3 className="font-semibold text-lg">{data.title}</h3>
                    <div className="flex justify-center items-center gap-1 text-sm">
                      <FaStar className="text-yellow-400" />
                      <span>{data.rating}</span>
                    </div>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
  
        </div>
      </div>
    );
  };

export default Products;
