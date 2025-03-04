import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner"
// import Popup from "./components/Popup/Popup";
import Cart from "./components/Cart/Cart";
import Men from "./components/Mens section/Mens";
import Women from "./components/Women section/Women";
import Kids from "./components/Kids section/Kids";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import UniqueSection from "./components/Uniquesection/UniqueSection";
import Casualwear from "./components/Style Inspiration/Casualwear";
import Streetwear from "./components/Style Inspiration/Streetwear";
import Denimedge from "./components/Style Inspiration/Denimedge";
import Athleisure from "./components/Style Inspiration/Athleisure";
import Summervibes from "./components/Shop The Look/Summervibes";
import Wintercozy from "./components/Shop The Look/Wintercozy";
import Autumnelegance from "./components/Shop The Look/Autumnelegance";
import Monsoonmagic from "./components/Shop The Look/Monsoonmagic";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Whishlist from "./components/Whishlist/Whishlist";
// import { motion } from "framer-motion";

function App() {
  const [cartItems, setCartItems] = useState([]); // Store cart items
  const [whishlistitems, setWhishlistItems] = useState([]); // Store whishlist items
  // const [orderPopup, setOrderPopup] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const addTowhishlist = (product) => {
    setWhishlistItems((prevItems) => [...prevItems, product]);
  };

  // const handleOrderPopup = () => {
  //   setOrderPopup(!orderPopup);
  // };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar cartItems={cartItems} whishlistitems={whishlistitems}  />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                {/* <hr className="w-[98%] mx-auto border-gray-300 dark:border-gray-800 my-3" /> */}
                <br />
                <br />
                <Products />
                <br />
                <hr className="md:w-[98%] w-[85%] mx-auto border-gray-300 dark:border-gray-800 my-3" />
                <Banner />
                <br />
                <hr className="md:w-[98%] w-[85%] mx-auto border-gray-300 dark:border-gray-800 my-3" />
                <br />
                <TopProducts addToCart={addToCart} addTowhishlist={addTowhishlist} />
                <br />              
                <br />              
                <br />
                <hr className="md:w-[98%] w-[85%] mx-auto border-gray-300 dark:border-gray-800 my-3" />
                <br />              
                <br />              
                {/* <Subscribe />  */}
              <UniqueSection addToCart={addToCart} addTowhishlist={addTowhishlist} />
                <hr className="md:w-[98%] w-[85%] mx-auto border-gray-300 dark:border-gray-800 my-3" />
                <br />               
                <br />               
                <br />               
                <Testimonials /> 
                <br />
                <br />
                <hr className="md:w-[98%] w-[85%] mx-auto border-gray-300 dark:border-gray-800 my-3" />            
              </>
            }
          />
          <Route path="/mens" element={<Men addToCart={addToCart} addTowhishlist={addTowhishlist} />} />
          <Route path="/womens" element={<Women addToCart={addToCart} addTowhishlist={addTowhishlist} />} />
          <Route path="/kids" element={<Kids addToCart={addToCart} addTowhishlist={addTowhishlist} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/whishlist" element={<Whishlist whishlistitems={whishlistitems} setWhishlistItems={setWhishlistItems} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/casualwear" element={<Casualwear addToCart={addToCart} addTowhishlist={addTowhishlist} />} />
          <Route path="/streetwear" element={<Streetwear addToCart={addToCart} addTowhishlist={addTowhishlist} />} />
          <Route path="/denimedge" element={<Denimedge addToCart={addToCart} addTowhishlist={addTowhishlist} />} />
          <Route path="/athleisure" element={<Athleisure addToCart={addToCart} addTowhishlist={addTowhishlist} />} />
          <Route path="/Summervibes" element={<Summervibes addToCart={addToCart} addTowhishlist={addTowhishlist} />} />
          <Route path="/Wintercozy" element={<Wintercozy addToCart={addToCart} addTowhishlist={addTowhishlist} />} />
          <Route path="/Autumnelegance" element={<Autumnelegance addToCart={addToCart} addTowhishlist={addTowhishlist} />} />
          <Route path="/Monsoonmagic" element={<Monsoonmagic addToCart={addToCart} addTowhishlist={addTowhishlist} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
        </Routes>

        <Footer />
        <br />
        <br />
      </div>
    </Router>
  );
}

export default App;
