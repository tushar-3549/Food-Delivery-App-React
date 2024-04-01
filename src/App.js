
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/Home'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';
import Cart from './pages/Cart/Cart';
import About from './components/About/About';
import Footer from './components/Footer/Footer'
import { useState } from 'react';
import LoginPopup from './components/LoginPopup/LoginPopup';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
    {
      showLogin ? <LoginPopup setShowLogin={setShowLogin}/>: <> </>
    }
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/order' element={<PlaceOrder />}/>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
