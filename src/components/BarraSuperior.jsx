import React from 'react'
import { Icon } from '@iconify-icon/react/dist/iconify.js'

export const BarraSuperior = () => {
  return (
    <>
    <div className='flex justify-between px-5 pt-4 dark:text-white'>
        <div className='border-2 border-[#37495733] rounded-[10px] p-4 flex justify-center items-center w-7 h-7 text-[1.5rem]'>
        <iconify-icon icon="ri:menu-2-fill"></iconify-icon>
        </div>
        <div className='border-2 border-[#37495733] rounded-[10px] p-4 flex justify-center items-center w-7 h-7 text-[1.5rem]'>
        <iconify-icon icon="ri:shopping-bag-line"></iconify-icon>
        </div>
    </div>
    </>
  )
}
