import React from 'react'
import { Icon } from '@iconify-icon/react/dist/iconify.js'
import cajaNike from '../assets/caja_nike.png'

export const ProductoPopup = ({ productoseleccionado, cerrarPopup, cantidadTenis }) => {

  const totalPrecio = () =>(productoseleccionado.price * cantidadTenis)

  return (
    <div className='fixed z-10 top-0 left-0 w-screen h-screen flex justify-center items-center flex-col bg-white dark:bg-black dark:text-white'>
      <div className='flex justify-around items-center w-full pt-4'>
        <div>
          <button className='bg-[#f8fafc] border-[1px] border-[grey] pt-1 px-1 text-[1.5rem] rounded-[8px] mr-2 cursor-pointer dark:bg-black dark:border-none' onClick={() => cerrarPopup()}><iconify-icon icon="line-md:arrow-left"></iconify-icon></button>
        </div>
        <div>
          <p className='text-[1.5rem] font-bold'>{productoseleccionado.name}</p>
        </div>
        <div>
          <button className='bg-[#f8fafc] border-[1px] border-[grey] pt-1 px-1 text-[1.5rem] rounded-[8px] mr-2 cursor-pointer dark:bg-black dark:border-none'><iconify-icon icon="ri:shopping-bag-line"></iconify-icon></button>
        </div>
      </div>    
      <div className=" mt-5 h-[25rem] dark:bg-[url('../src/assets/nike_darkmode.png')] bg-[url('../src/assets/logo_nike.png')] bg-no-repeat bg-center flex justify-around items-center">
        <div className='flex flex-col text-[1rem] gap-4 ms-2'>
          <p className='font-bold text-[1.5rem]'>Size</p>
          <p className='dark:bg-white dark:text-black border-[2px] border-[grey] rounded-[15px] p-1'>UK 6</p>
          <p className='dark:bg-white dark:text-black border-[2px] border-gray-900 rounded-[15px] p-1'>UK 7</p>
          <p className='dark:bg-white dark:text-black border-[2px] border-[grey] rounded-[15px] p-1'>UK 8</p>
          <p className='dark:bg-white dark:text-black border-[2px] border-[grey] rounded-[15px] p-1'>UK 9</p>
        </div>
        <div className='rotate-[-19deg] w-[15rem] '>
          <img className=' w-full translate-y-8 translate-x-[-1rem]' src={productoseleccionado.imageUrl} alt="" />
        </div>
        <div>
          <div className='dark:bg-white dark:text-black mt-14 border-[1px] border-[grey] text-[1.8rem] rounded-[15px] flex justify-center py-2 w-[2.8rem]'>
          <iconify-icon icon="material-symbols:bookmark-outline"></iconify-icon>
          </div>
          <div className='mt-16'>
            <p className='font-bold text-[1.3rem] '>Color</p>
            <div className='dark:bg-white mt-3 border-[2px] border-gray-900 text-[1.5rem] rounded-[15px] flex justify-center py-2 w-[2.8rem]'>
            <iconify-icon icon="noto:red-square"></iconify-icon>
            </div>
            <div className='dark:bg-white mt-3 border-[1px] border-[grey] text-[1.5rem] rounded-[15px] flex justify-center py-2 w-[2.8rem]'>
            <iconify-icon icon="noto:blue-square"></iconify-icon>
            </div>
          </div>
        </div>
      </div>
      <div className='text-[2rem] font-bold w-screen text-left ms-8 mt-[-1.5rem]'>
        <p className='text-[1rem] '>Cantidad: {cantidadTenis}</p>
        <p>${totalPrecio()}</p>
        <p className='text-[1rem] text-red-500 ms-4 mt-[-0.6rem]'>10% OFF</p>
      </div>
      <div className='z-30  flex flex-col justify-center items-center'>
          <div>
            <p className='text-sm'>Swipe down to add</p>
          </div>
          <div className='bg-black w-9 text-white flex flex-col justify-center items-center text-[1.8rem] p-3 rounded-[1rem]' >
            <iconify-icon icon="ri:shopping-bag-line"></iconify-icon>
            <iconify-icon icon="uis:angle-double-down"></iconify-icon>
          </div>
      </div>
      <div className='mt-[-4.7rem]'>
        <img src={cajaNike} alt="" />
      </div>

    </div>
  )
}
