import React from 'react'
import {MdLockOutline} from 'react-icons/md'
const DemoGenerations = ({isProt}:{isProt:boolean}) => {
  return (
    <div className='md:w-[400px] rounded-xl shadow-xl p-[2px] my-4 flex justify-center items-center rounded-full overflow-hidden bg-gradient-to-r from-cyan-500 via-red-500 to-white animate-gradient-x relative'>
        {isProt&&<MdLockOutline className='text-2xl absolute left-[5%] top-[5%] z-20 text-yellow-600'/>}
    <div className={`${isProt&&"blur-sm"} bg-dark_color rounded-xl p-4`}>
    <h4 className='text-xl semibold'>Generation Name</h4>
    <p className='my-2 text-sm'>About the Generation Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates temporibus dolore natus autem libero quam minus optio quaerat obcaecati eligendi aperiam voluptas, perspiciatis at id sint. Porro officiis placeat atque.</p>
    <div className='text-left my-2'>
      <h5 className='semibold my-2'>
        generation Details:
      </h5>
      <div className='my-2 w-4/5'>
        <h4 className='flex justify-between'>Strength: <span className='text-theme_color semibold'>120</span></h4>
        <h4 className='flex justify-between'>Total Generations: <span className='text-theme_color semibold'>7</span></h4>
        <h4 className='flex justify-between'>Gen-Z strength:<span className='text-theme_color semibold'>20</span></h4>
        <h4 className='flex justify-between'>Generation data Since: <span className='text-theme_color semibold'>1940</span></h4>
      </div>
    </div>
  </div>
  </div>
  )
}

export default DemoGenerations