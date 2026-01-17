import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] text-[9.6vw] leading-[8.5vw] uppercase text-center '>
        <div>The spark</div>
        <div className='flex items-center justify-center'>who <div className='h-[7vw] w-[22%] rounded-full overflow-hidden '><Video /></div></div>
        <div>generates</div>
        <div>The Creativity</div>
    </div>
  )
}

export default HomeHeroText