import Image from 'next/image'
import React from 'react'

const Barrel = () => {
  return (
    <div className='grid md:grid-cols-2 gap-3'>
      <div className='p-1'>
          <Image src="/Delaire-Graff.jpg" alt='glass' width={450} height={300} className='h-auto w-full object-cover' />
      </div>
      <div className='flex items-start justify-start flex-col gap-3 lg:text-xl px-5 py-9 text-gray-500'>
        <h2 className='sm:text-base lg:text-2xl text-primary'>Glassware</h2>
        <p>Without having tasted the wines, one does not know if, for example, a white is heavy or light. Before taking a sip, the taster tries to determine the 
          order in which the wines should be assessed by appearance and aroma alone. Heavy wines are deeper in color and generally more intense on the nose.
           Sweeter wines, being denser, leave thick, viscous streaks (called legs or tears) down the inside of the glass when swirled.</p>
      </div>
    </div>
  )
}

export default Barrel