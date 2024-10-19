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
    <div>
       {prod.map((item, index) => {
            return(
                <div key={index} className='px-5 py-7 grid grid-cols-2 gap-3'>
                    <Image src={item.attributes?.media?.data[0]?.attributes?.url} width={250} height={250} alt='img' className='w-full object-contain w-[250] h-[250]'/> 
                    <h2>{item.attributes?.Name}</h2>
                    
                </div>
            )
       })}
    </div>
  )
}

export default page