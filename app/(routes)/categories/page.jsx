'use client'


import CategoryList from '@/app/_components/CategoryList'
import GlobalApi from '@/app/_utils/GlobalApi';
import React, { useEffect, useState } from 'react'

const CategoryPage = () => {

    const [data,setData]= useState([]);

    const data1 = async () => {
     const dataBox= await GlobalApi.getCategories().then((resp) =>{
       console.log(resp);
       setData(dataBox);

     });
    }
   
  return (
    <div>
        <CategoryList lists={data}/>
    </div>
  )
}

export default CategoryPage