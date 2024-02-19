import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from "@mui/material/Avatar";
import { IconButton } from '@mui/material';
import headerlogo from "../../images/Group 6012.png"
import "./HomePage.scss"


export default function Navbar() {
  return (
    <>
      <header className='header'>
        <div className="header_container">
          <div className="  ">
            <img src={headerlogo} alt="" />
          </div>
          <div className="header_input">
            <input type="text" />
            <img src="" alt="" />
          </div>
          <div className="header_links">
            <FavoriteBorderIcon />
            <ShoppingCartIcon />
            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
          </div>
        </div>
      </header>
    </>
  )
}
