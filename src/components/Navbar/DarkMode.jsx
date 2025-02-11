import  { useEffect, useState } from 'react';
// import  DarkButton from "../../../public/light-photoroom.png";
// import LightButton from "../../../public/dark-photoroom.png";

function DarkMode() {


    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement;

    useEffect(() => {
        if(theme == "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else {
            element.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    })


  return (

    <div className='relative'> 
        <img src="https://static-00.iconduck.com/assets.00/mode-light-icon-2048x2048-n3gewm0l.png"  alt="Light" onClick={() => {
            setTheme(theme == "light" ? "dark" : "light")
        }} 
         className={`w-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${theme == "dark" ? "opacity-0": "opacity-100"}`}
        />
        <img src="https://cdn0.iconfinder.com/data/icons/multimedia-solid-30px/30/sun_light_mode_day-512.png" alt="Dark" onClick={() => {
            setTheme(theme == "light" ? "dark" : "light")
        }} 
        className='w-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300' 
         />
    </div>

  )
};

export default DarkMode
