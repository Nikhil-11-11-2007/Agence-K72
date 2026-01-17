import {Link} from 'react-router-dom'
const HomeBottomText = () => {
  return (
    <div className='flex items-center justify-center font-[font2] gap-[2vw] uppercase text-[6.7vw]'>
      <Link to='/projects' className='rounded-full hover:text-[#d3fd50] border-3 leading-[5vw] pt-4 px-[2vw]'>Projects</Link>
      <Link to='/agence' className='rounded-full hover:text-[#d3fd50] border-3 leading-[5vw] pt-4 px-[2vw]'>Agence</Link>
    </div>
  )
}

export default HomeBottomText
