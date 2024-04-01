import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import About from '../../components/About/About'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownload from '../../components/AppDownload/AppDownload'



const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <About />
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownload />
    </div>
  )
}

export default Home