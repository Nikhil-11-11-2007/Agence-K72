import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'

const Home = () => {
  return (
    <div className='h-screen w-screen bg-amber-900'>
      <div className='h-screen w-screen bg-amber-900 fixed'>
        <Video />
      </div>
      <div className='min-h-screen w-screen relative flex flex-col'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home
