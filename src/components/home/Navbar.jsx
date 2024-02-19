import React from 'react'
import logo from "../../images/image 910.png"
import logo1 from "../../images/Group 5287.png"
import basket from "../../images/Vector.png"
import vector from "../../images/Vector 3063 (Stroke).png"
import lupa from "../../images/Union.png"


const Navbar = () => {
  return (
    <div>
      <div className='navbar'>
        <img className='logo' src={logo} alt="" />
        <div className='playnchill'>
        Playnchill
        </div>
        <img className='logo1' src={logo1} alt="" />
        <input className='input' type="text" placeholder='Поиск'/>
        <div className='besplatno'>
          бесплатно
        </div>
        <a href=""><img src={vector} alt="" /></a>
        <a href=""><img src={basket} alt="" /></a>
        

      </div>
      
    </div>
  )
}

export default Navbar
