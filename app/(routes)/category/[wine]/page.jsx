"use client"

import React, { useEffect } from 'react'

const page = ({params}) => {

    
    useEffect(() =>{
    console.log(params.wine)
    },[])


  return (
    <div className='border p-7'>
        <h1>One glass of wine to taste</h1>
    </div>
  )
}

export default page