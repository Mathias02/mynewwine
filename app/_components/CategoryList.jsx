
import React from 'react'
import Catalog from './Catalog'
import Barrel from './Barrel';

const CategoryList = ({lists}) => {


  return (
    <div>
      <div>
         <h2 className='p-3 mb-4 text-2xl mt-6'>List of wine to taste</h2>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5 lg:grid-cols-8 bg-slate-50' >
        {lists.map((list, index) => {
         return (
           <Catalog key={index} list={list} />
            )
        })}
      </div>
      <Barrel />
    </div>
  )
}

export default CategoryList