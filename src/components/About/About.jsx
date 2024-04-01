import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className="about-section" id='about'>
            <div className="left-side">
                {/* <img src="https://media.giphy.com/media/kgUoG0kpDycjIRk3Af/giphy.gif" alt="Delivery Man Cycling" /> */}
                <img src="https://cdn.dribbble.com/users/2459530/screenshots/8029114/media/ec7402c26d95030fd111401b35482144.gif" alt="Delivery Man Cycling" />


                {/* <img src="https://cdn.dribbble.com/users/1197989/screenshots/5585685/delivery-boy.gif" alt="Delivery Man Cycling" /> */}
            </div>
            <div className="right-side">
                <h2>Welcome to Yammi!</h2>
                <p>At Yammi, we're passionate about bringing delicious food right to your doorstep. Whether you're craving your favorite comfort food, exploring new flavors, or simply seeking convenience, we've got you covered.</p>
                <p>From savory pizzas and burgers to fresh salads and sushi, there's something for every palate.</p>
                <p>Our dedicated team of delivery professionals ensures that your orders are delivered promptly and with care, so you can enjoy your meal hot and fresh every time.</p>
                
            </div>
        </div>
  )
}

export default About