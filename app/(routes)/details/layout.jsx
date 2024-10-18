"use client"

import React, { useEffect, useState } from 'react'
import Details from './_components/Details'
import GlobalApi from '@/app/_utils/GlobalApi';

const layout = ({children}) => {
    const[detail,setDetail]= useState([]);

    useEffect(() => {
        detailedData()
    },[]);

    const detailedData = () => {
        GlobalApi.getCategories().then((resp) => {
            setDetail(resp.data.data)
        });
    }
  return (
    <div className='grid grid-cols-4 w-full'>
        <div className='border-[3px]'>
           <Details data={detail}/>
        </div>

        <div className='col-span-3'>
            {children}
        </div>
    </div>
  )
}

export default layout