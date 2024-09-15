import Image from 'next/image'
import React from 'react'

const CategoryList = ({lists}) => {
  return (
    <div>
      <div>
         <h2 className='p-3 mb-4'>List of wine displayed</h2>
      </div>
      <div className='grid sm:grid-cols-6'>
        {lists.map((list, index) =>{
         return(
          <div key={index} className='p-2 text-center border'>
             <h2>{list.attributes?.Name}</h2>
             <Image src={list.attributes?.Icon?.data?.attributes?.url} alt='img' width={40} height={40} className='w-full rounded' />       
          </div>
            )
        })}
      </div>
    </div>
  )
}

export default CategoryList