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
                <div key={index} className='p-2'>
                    <h2>{item.attributes?.Name}</h2>
                    {/* <Image src={item.attributes.} width={200} height={200} alt='img' /> */}
                </div>
            )
       })}
    </div>
  )
}

export default page