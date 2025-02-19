import { useEffect, useState } from "react";

function DarkMode() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    const element = document.documentElement;

    if (theme === "dark") {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]); 

  return (
    <div className="relative">
      {/* Toggle Button */}
      <img
        src={theme === "dark" 
          ? "https://cdn0.iconfinder.com/data/icons/multimedia-solid-30px/30/sun_light_mode_day-512.png"
          : "https://static-00.iconduck.com/assets.00/mode-light-icon-2048x2048-n3gewm0l.png"}
        alt="Toggle Theme "
        onClick={() => setTheme((prevTheme) => prevTheme === "light" ? "dark" : "light")}
        className="w-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,2)] transition-all duration-300"
      />
    </div>
  );
}

export default DarkMode;
