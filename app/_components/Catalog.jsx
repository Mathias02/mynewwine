import React from 'react'
import Image from 'next/image'

const Catalog = ({list}) => {
    
  return (
    <div>
        <div className='p-2 text-center border rounded-lg hover:scale-105 transition-all duration-300 ease-in-out'>
            <h2>{list.attributes?.Name}</h2>
            <Image src={list.attributes?.Icon?.data[0]?.attributes?.url} alt='img' width={200} height={200} className='object-cover w-full h-32 p-2 mt-3 rounded-s-sm' />       
        </div>
    </div>
  )
}

export default Catalog