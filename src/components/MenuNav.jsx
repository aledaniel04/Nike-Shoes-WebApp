import React from 'react'

export const MenuNav = () => {
  return (
    <div className='mt-8 flex gap-4 ml-4 items-center justify-between text-[#9C9C9C] text-[1rem]'>
        <div className='bg-black text-white px-7 py-[0.3rem] rounded-[18px]'>
            <p>All</p>
        </div>
        <div>
            <p>Running</p>
        </div>
        <div>
            <p>Sneakers</p>
        </div>
        <div>
            <p>Formal</p>
        </div>
        <div>
            <p>Casual</p>
        </div>
    </div>
  )
}
