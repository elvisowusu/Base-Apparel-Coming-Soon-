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
    <div><img src={logo} alt="" /></div>
    <div></div>
    
   </div>
  )
}

export default App
