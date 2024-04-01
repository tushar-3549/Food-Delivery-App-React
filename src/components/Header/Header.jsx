import React from 'react'
import './Header.css'
// import { assets } from '../../assets/assets'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-contents">
                {/* <img src={assets.header_img} alt="header image" style={{background: "no-repeat"}} /> */}
                <h2>Order your favourite food here</h2>
                {/* <p>Welcome to our fast-food website! We offer a delicious selection of mouth-watering dishes, including burgers, fries, pizzas, salads, sandwiches, and more. Whether you're craving a classic cheeseburger or a hearty chicken sandwich, we have something for everyone.</p> */}
                <p>Explore our menu to discover your favorite items, and don't forget to check out our special deals and combos for great savings. Ready to place your order? Simply browse our menu, select your desired items, and proceed to checkout. We offer convenient delivery and pickup options to ensure you get your food exactly how you want it, when you want it.</p>
                <button style={{cursor: "pointer"}}>View menu</button>
            </div>
        </div>
    )
}

export default Header