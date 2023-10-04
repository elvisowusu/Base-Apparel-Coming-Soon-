import { useState, useEffect } from "react";
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
    <div className="md:flex justify-center items-center h-[100vh] sm:overflow-hidden bg-[url('./assets/bg-pattern-desktop.svg')] bg-auto">
      <div className="flex flex-col">
        <div className="pl-[1.5rem] py-9 ">
          <img className="w-[8rem]" src={logo} alt="" />
        </div>
        {screenWidth <= 768 ? <img src={MobileImage} alt="Mobile View" /> : ""}

        <div className=" flex flex-col justify-center items-center">
          <p className="flex flex-col text-center text-[2.5rem] tracking-[0.7rem] mt-[5rem] leading-[2.5rem] mb-[1rem]">
            <span className=" text-desaturatedRed">WE'RE</span>
            COMING <br />
            SOON
          </p>
          <p className="text-sm text-center px-[1.5rem] mb-5 text-desaturatedRed">
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
            <button className="px-4 text-white text-xl py-1 bg-gradient-to-r from-startGradient to-endGradient rounded-full">
              <MdKeyboardArrowRight />
            </button>
          </form>
        </div>
      </div>
      {screenWidth > 768 ? (
        <img
          className="md:max-lg:w-[30rem] md:h-full "
          src={DesktopImage}
          alt="Desktop View"
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
