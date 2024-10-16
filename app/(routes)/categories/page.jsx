'use client'


import CategoryList from '@/app/_components/CategoryList'
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const CategoryPage = () => {

    const [data,setData]= useState([]);

    const dataFetched = () => {
       GlobalApi.getCategories().then((resp) =>{
       setData(resp.data.data)
     });
    }

    useEffect(() => {
        dataFetched();
    },[])
   
  return (
    <div>
        <CategoryList lists={data}/>
    </div>
  )
}

export default CategoryPage