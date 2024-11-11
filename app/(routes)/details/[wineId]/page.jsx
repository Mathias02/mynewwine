"use client"

import BookingApp from '@/app/_components/Booking';
import GlobalApi from '@/app/_utils/GlobalApi'
import { Anvil, FileText} from 'lucide-react';
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
    <div className='grid lg:grid-cols-3 mt-9 gap-3 px-2'>
       {prod.map((item, index) => {
            return(
                <div>
                    <div key={index} className='border p-2 rounded-lg hover:border-gray-700'>
                        <Image src={item.attributes?.icons?.data[0]?.attributes?.url} width={350} height={350} alt='img' className='object-cover h-48 transition-all rounded-lg'/> 
                        <div className='px-5 py-2 flex flex-col'>
                                <h2 className='font-bold text-xl mb-2 text-left'>{item.attributes?.Name}</h2>
                                <h2 className='flex items-start'><FileText className='text-primary h-12 w-12 mr-3'/>{item.attributes?.Description}</h2>
                                <h2 className='flex'><Anvil className='text-primary h-10 w-10 mr-3'/>{item.attributes?.Grape_variety}</h2>
                        </div>
                        <BookingApp />  
                    </div>
                </div>
            )
       })}
      
    </div>
  )
}

export default page