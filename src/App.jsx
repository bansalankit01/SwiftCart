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

function App() {
  const [cartItems, setCartItems] = useState([]); // Store cart items
  // const [orderPopup, setOrderPopup] = useState(false);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
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
        <Navbar cartItems={cartItems} />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <hr />
                <Products />
                <br />
                <hr />
                <Banner />
                <hr />
                <br />
                <br />
                <TopProducts addToCart={addToCart}  />
                <br />
                <br />
                <br />
                <hr />
                <Subscribe />
                <hr />
                <br />
                <Testimonials />
                <hr />
              </>
            }
          />
          <Route path="/mens" element={<Men addToCart={addToCart} />} />
          <Route path="/womens" element={<Women addToCart={addToCart} />} />
          <Route path="/kids" element={<Kids addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
        {/* <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} /> */}
      </div>
    </Router>
  );
}

export default App;
