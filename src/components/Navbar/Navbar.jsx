import React, { useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';

const Navbar = ({setShowLogin}) => {
    const [menu, setMenu] = useState("");
  return (
    <div className='navbar'>
        {/* <img src={assets.logo} alt="" /> */}
        {/* <h1 className='logo' style={{color: "tomato", fontWeight: "bold", fontSize: "50px"}}>Yammi!</h1> */}
        <Link to='/'><h1 className='logo' style={{color: "tomato", fontWeight: "bold", fontSize: "50px"}}>Yammi!</h1></Link>
        <ul className="navbar-menu">
            {/* <li onClick={() =>setMenu("home")} className={menu === "home"?"active":""}>Home</li>
            <li onClick={() =>setMenu("about")} className={menu === "about"?"active":""}>About</li>
            <li onClick={() =>setMenu("menu")} className={menu === "menu"?"active":""}>Menu</li>
            <li onClick={() =>setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>Mobile App</li>
            <li onClick={() =>setMenu("contact-us")} className={menu === "contact-us"?"active":""}>Contact Us</li> */}


            <Link to ='/' onClick={() =>setMenu("home")} className={menu === "home"?"active":""}>Home</Link>
            <a href='#about' onClick={() =>setMenu("about")} className={menu === "about"?"active":""}>About</a>
            <a href='#explore-menu' onClick={() =>setMenu("menu")} className={menu === "menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={() =>setMenu("mobile-app")} className={menu === "mobile-app"?"active":""}>Mobile App</a>
            <a href='#footer' onClick={() =>setMenu("contact-us")} className={menu === "contact-us"?"active":""}>Contact Us</a>

        </ul>
        <div className="navbar-right">
            <img className='search-icon' src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                {/* <img src={assets.bag_icon} alt="" /> */}
                <Link to='/cart'><img src={assets.bag_icon} alt="" /></Link>
                <div className="dot"></div>
            </div>
            <button onClick={()=> setShowLogin(true)}>Sign in</button>
        </div>
    </div>
  )
}

export default Navbar