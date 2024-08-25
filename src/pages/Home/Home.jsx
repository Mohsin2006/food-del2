import { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import AppDownlad from '../../components/AppDownload/AppDownlad'
const Home = () => {
    const[category, setCategory]=useState("All")
  return (
    <div className='home'>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category}/>
      <AppDownlad/>
    </div>
  )
}

export default Home
