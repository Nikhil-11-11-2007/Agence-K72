import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import HomeSection from '../components/home/HomeSection'

const Home = () => {
  return (
    <div className='min-h-screen w-full overflow-hidden'>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>
      <div className='min-h-screen w-screen relative flex items-center text-white flex-col overflow-hidden px-[2vw] py-[1vw]'>
        <HomeHeroText />
        <HomeSection />
        <HomeBottomText />
      </div>
    </div>
  )
}

export default Home
