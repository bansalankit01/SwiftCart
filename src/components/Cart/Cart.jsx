// import React from 'react'

const Cart = ({ cartItems }) => {
    return (
      <div className="p-[80px] mx-auto max-w-[600px]">
        <h2 data-aos="fade-up" className="md:text-4xl text-xl mt-[-50px] mx-20 font-semibold text-gray-800 dark:text-white md:mx-32 mb-4">𝒀𝒐𝒖𝒓 𝑪𝒂𝒓𝒕</h2>
        {cartItems.length === 0 ? (
          <p data-aos="fade-up" className="text-gray-600 dark:text-gray-400 md:mx-28 md:mt-10 mx-[-20px]">Your cart is currently empty.</p>
        ) : (
          <ul data-aos="fade-up" className="md:mt-10 mt-10">
            {cartItems.map((item, index) => (
              <li key={index} className="flex justify-between items-center border-b border-t md:mt-1 py-3">
                <img src={item.img} alt={item.title} className="w-16 h-auto object-cover mx-[-60px]" />
                <span className="mx-28">{item.title}</span>
                <span className="font-bold mx-[-70px]">{item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Cart;
  
