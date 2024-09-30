import React from 'react'

const layout = ({children}) => {
  return (
    <div className='grid grid-cols-4'>
       <div>

       </div>
       <div className='col-span-3'>
          {children}
        </div>
    </div>
  )
}

export default layout