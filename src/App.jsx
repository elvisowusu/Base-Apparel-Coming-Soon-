import { useState,useEffect } from "react";
import DesktopImage from "./assets/hero-desktop.jpg";
import MobileImage from "./assets/hero-mobile.jpg";
import DesktopBgPattern from "./assets/bg-pattern-desktop.svg";
import logo from "./assets/logo.svg";
import { MdError } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
  
    window.addEventListener("resize", handleResize);
  
    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  return (
    <div className="md:flex justify-center items-center h-[100vh] overflow-hidden bg-[url('./assets/bg-pattern-desktop.svg')] bg-auto">
      <div className="flex flex-col ">
        <div>
          <img src={logo} alt="" />
        </div>
        {screenWidth <= 768 ? <img src={MobileImage} alt="Mobile View" /> : ""}

        <div>
          <h1>WE'RE COMING SOON</h1>
          <p>
            Hello follow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcement and
            our launch deals.
          </p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className=""
              required
              type="email"
              placeholder="Email Address"
            />
            <button className="px-4 text-xl py-1 bg-blue-500 rounded-full">
              <MdKeyboardArrowRight />
            </button>
          </form>
        </div>
      </div>
      {screenWidth > 768 ? 
      <img className="md:max-lg:w-[30rem] md:h-full "
       src={DesktopImage} 
       alt="Desktop View" /> 
      : ""}
    </div>
  );
}

export default App;
