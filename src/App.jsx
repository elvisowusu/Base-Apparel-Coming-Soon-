import { useState } from 'react'
import DesktopImage from './assets/hero-desktop.jpg'
import MobileImage from './assets/hero-mobile.jpg'
import DesktopBgPattern from './assets/bg-pattern-desktop.svg'
import logo from './assets/logo.svg'
import {MdError} from 'react-icons/md'
import {MdKeyboardArrowRight} from 'react-icons/md'

function App() {
  const [screenWidth,setScreenWidth]=useState(window.innerWidth);

  return (
   <div>
    <div>
      <img src={logo} alt="" />
    </div>
    <div>
      {screenWidth< 600? 
        <img src={MobileImage} alt=""/>
        :<img src={DesktopImage} alt=""/>}
    </div>
    <div>
      <h1>WE'RE COMING SOON</h1>
      <p>
        Hello follow shoppers! We're currently building our new fashion store. 
        Add your email below to stay up-to-date with announcement and our launch deals.
      </p>
    </div>
    
   </div>
  )
}

export default App
