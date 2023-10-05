import { useState, useEffect } from "react";
import DesktopImage from "./assets/hero-desktop.jpg";
import MobileImage from "./assets/hero-mobile.jpg";
import DesktopBgPattern from "./assets/bg-pattern-desktop.svg";
import logo from "./assets/logo.svg";
import { MdError } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";

function App() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    email:"",
  })
  const handleChange =(e)=>{
    const {name, value} = e.target;
    setFormData({ ...formData, [name]:value});

    if(!isValidEmail(value)){
        setErrorMessage("Please provide a valid email");
    }else{
      setErrorMessage("");
    }

  }

  const isValidEmail = (email)=>{
    // Checking for basic validation using Regular Expression(RegExp)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
};



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
    <div className="md:flex justify-center items-center h-[105vh] md:overflow-hidden bg-[url('./assets/bg-pattern-desktop.svg')]  ">
      <div className="flex flex-col  md:pl-[4rem] lg:pl-[5rem] xl:pl-[10rem]">
        <div className="pl-[1.5rem] py-9 md:mb-[1rem] xl:pl-0">
          <img className="w-[8rem] md:w-auto" src={logo} alt="" />
        </div>
        {screenWidth <= 768 ? <img src={MobileImage} alt="Mobile View" /> : ""}

        <div className=" flex flex-col justify-center items-center  md:items-start md:mb-[6rem] md:mr-8">
          <p className="flex flex-col text-center text-[2.5rem] tracking-[0.7rem] mt-[5rem] leading-[2.5rem] mb-[1rem] md:text-left md:text-[2.5rem] md:leading-[3.1rem] xl:text-[3.5rem] xl:leading-[4rem]">
            <span className=" text-desaturatedRed">WE'RE</span>
            COMING <br />
            SOON
          </p>
          <p className="text-sm text-center px-[1.5rem] mb-5 md:mb-9 text-desaturatedRed sm:text-[0.9rem] sm:max-px-[5rem] md:text-start md:px-0 xl:text-[1rem] xl:pr-[14rem] xl:leading-7">
            Hello follow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcement and
            our launch deals.
          </p>
          <form 
            className="flex justify-center"
            onSubmit={(e) => e.preventDefault()}>
            <input
              className="relative border-2 active:border-softRed focus:border-softRed rounded-full px-[1.2rem] py-[0.5rem] w-[18rem] lg:px-[1.5rem] lg:py-[0.8rem] lg:w-[24rem] xl:px-[2.5rem] xl:w-[26.5rem]"
              required
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              placeholder="Email Address"
              onChange={handleChange}
            />
            <button className="absolute flex justify-center items-center text-[2rem] bg-gradient-to-tr from-startGradient to-endGradient shadow-xl shadow-red-100 hover:shadow-red-200 px-3  text-white text-xl py-1 rounded-full h-[2.7rem] w-[3.6rem] ml-[15rem] lg:text-2xl lg:w-[5.5rem] lg:h-[3.3rem] lg:ml-[19.6rem] xl:w-[5rem] xl:ml-[22.5rem] xl:h-[3.4rem]">
              <MdKeyboardArrowRight/>
            </button>
            {errorMessage && <MdError className="z-10 absolute ml-[10rem] mt-[0.9rem]"/>}
          </form>
            {errorMessage && <div className="mr-[4rem] md:ml-6 text-red-400 text-sm">{errorMessage}</div>}
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
