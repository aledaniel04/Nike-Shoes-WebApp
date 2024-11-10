import { Icon } from '@iconify-icon/react/dist/iconify.js'
import React from 'react'

export const MenuInferior = ({modoOscurof, stateOscuro}) => {
  return (
    <div className='bg-[#ebe9e9] fixed bottom-0 w-screen flex justify-around text-[2rem] p-3 rounded-t-[20px] dark:bg-[#2F2F2F] dark:text-white'>
        <div>
            <iconify-icon icon="gravity-ui:house"></iconify-icon>
        </div>
        <div>
        <iconify-icon icon="material-symbols:bookmark-outline"></iconify-icon>
        </div>
        <div>
        <iconify-icon icon="mdi:bell-outline"></iconify-icon>
        </div>
        <div>
        <iconify-icon icon="mdi:user-outline"></iconify-icon>
        </div>
        <div>
          <button onClick={() => { modoOscurof() }}
            className="dark:text-yellow-200 text-[#76766d]"
          >
            {stateOscuro ? <iconify-icon icon="line-md:sun-rising-filled-loop"></iconify-icon> : <iconify-icon icon="line-md:moon-rising-filled-loop"></iconify-icon>}</button>
        </div>
    </div>
  )
}
