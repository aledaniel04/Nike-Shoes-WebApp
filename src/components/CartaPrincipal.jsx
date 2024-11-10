import React from 'react'
import tenisGris from '../assets/tenis_gris.png'

export const CartaPrincipal = () => {
  return (
    <div className='w-screen flex justify-center mt-5'>
      <div className='flex justify-center bg-[#EFEFEF] w-[20rem] rounded-[18px] dark:bg-[#615C5C] dark:text-white'>
        <div className='pl-2 py-3'>
          <p className='font-bold text-[1.2rem]'> <span className='text-[1.5rem]'>20%</span> Discount</p>
          <p className='text-[0.9rem]'>on your first purchase</p>
          <button className='bg-black text-white py-2 px-7 rounded-[20px] text-[0.757rem] mt-5'>Shop now</button>
        </div>
        <div className='w-[10.5rem]'>
          <img className='w-full'  src={tenisGris} alt="" />
        </div>
      </div>
    </div>
  )
}
