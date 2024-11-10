"use client"

import GlobalApi from '@/app/_utils/GlobalApi'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const page = ({params}) => {
    const[prod, setProd] = useState([]);

    useEffect(() =>{
        console.log(params.wineId);
        product()
    },[])

    const product = () => {
        GlobalApi.productCategory(params.wineId).then((resp) =>{
            console.log(resp.data.data);
            setProd(resp.data.data)
        })
    }

  return (
    <div className='grid md:grid-cols-3 mt-9 gap-3 justify-center items-center px-2'>
       {prod.map((item, index) => {
            return(
                <div key={index} className='border p-3 rounded-lg hover:border-gray-700 cursor-pointer'>
                    <Image src={item.attributes?.icons?.data[0]?.attributes?.url} width={350} height={350} alt='img' className='object-cover h-48 transition-all rounded-lg'/> 
                    <div className='px-5 py-2 flex flex-col'>
                       <h2 className='font-bold text-xl text-gray-400 text-left'>{item.attributes?.Name}</h2>
                    </div>
                    
                    
                </div>
            )
       })}
    </div>
  )
}

export default page