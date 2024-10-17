import Image from 'next/image'
import React from 'react'

const Wines = ({items}) => {
  return (
    <div className='flex gap-7 flex-col items-center text-center cursor-pointer'>
      <h2 className='text-xl'>{items.attributes?.Name}</h2>
      <Image src={items.attributes?.Icon?.data[0]?.attributes?.url} width={100} height={100} alt='img' className='w-[50] h-[50] rounded-lg object-cover ' />
    </div>
  )
}

export default Wines