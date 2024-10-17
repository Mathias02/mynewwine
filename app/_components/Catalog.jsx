import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const Catalog = ({list}) => {
    
  return (
    <div>
        <Link href={`/categories/${list.attributes?.Name}`} className='p-2 text-center flex gap-3 flex-col bg-gray-200 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'>
            <h2>{list.attributes?.Name}</h2>
            <Image src={list.attributes?.Icon?.data[0]?.attributes?.url} alt='img' width={200} height={200} className='object-cover w-full h-32 p-2 mt-3 rounded-s-sm' />       
        </Link>
    </div>
  )
}

export default Catalog