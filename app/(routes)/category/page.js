"use client"

import CategoryList from '@/app/_components/CategoryList';
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'

const dataPage = () => {

 const [lists, setLists] = useState([]);

  useEffect(()=>{
    fetchData()
  },[]);

  const fetchData = () => {
      GlobalApi.getCategories().then(resp =>{
        console.log(resp.data.data);
        setLists(resp.data.data)
      })
  }

  return (

    <div>
      <CategoryList lists={lists} />
    </div>
  )
}

export default dataPage
