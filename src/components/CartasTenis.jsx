import React, { useState } from 'react'


export const CartasTenis = ({ indice, producto, abrirPopup }) => {
  const [amountTenis, setAmountTenis] = useState(1)
  const aumentarTenis = () =>setAmountTenis(amountTenis + 1 )
  const disminuirTenis = () =>{
    if(amountTenis > 1){
      setAmountTenis(amountTenis - 1 )
    }
    }
  return (
    <div className="w-[9rem] bg-[#EFEFEF] rounded-xl px-2 pt-6 pb-4 dark:bg-[#615C5C] dark:text-white">
      <img className="w-[10rem]" src={producto.imageUrl} alt="" />
      <h4 className="font-bold">{producto.name}</h4>
      <div className='flex justify-between'>
        <p>{producto.price}</p>
        <button onClick={() => abrirPopup(producto, amountTenis)} className='bg-[#f8fafc] border-[1px] border-[grey] pt-1 px-1 text-[0.9rem] rounded-[8px] mr-2 cursor-pointer dark:text-black'><iconify-icon icon="line-md:arrow-right"></iconify-icon></button>
      </div>
      <div className='flex justify-start bg-[#e6dddd75] max-w-max items-center gap-2 text-black'>
        <button onClick={()=>disminuirTenis()} className='dark:bg-[#f7f4f41e] dark:border-none bg-[#f8fafc83] border-[1px] text-[1rem] max-h-max pt-1'><iconify-icon icon="pepicons-pop:line-x"></iconify-icon></button>
        <p className='text-[1.2rem] font-mono'>{amountTenis}</p>
        <button onClick={()=>aumentarTenis()} className='dark:bg-[#f7f4f41e] dark:border-none bg-[#f8fafc83] border-[1px] text-[1rem] max-h-max pt-1'><iconify-icon icon="line-md:plus"></iconify-icon></button>
      </div>
    </div>
  )
}
