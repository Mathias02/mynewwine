
import React from 'react'
import Wines from './Wines'

const Details = ({data}) => {

  return (
    <div>
        <h2>Details</h2>
        <div className='h-full flex flex-col gap-6'>
            {data.map((item,index) => {
              return(
                <div key={index}>
                    <Wines items={item}/>  
                </div>
              )  
            })}
        </div>
    </div>
  )
}

export default Details