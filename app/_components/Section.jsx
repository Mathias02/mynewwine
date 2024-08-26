import Image from 'next/image'
import React from 'react'

const Section = () => {
  return (
    <div className='grid grid-cols-3 gap-4 mb-8'>
        <div>
            <Image src='/white.jpeg' width={450} height={200}  alt='section1'/>
            <div>
                <h2 className='text-gray-400 p-5 font-bold tracking-wide text-xl'>White wine</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum corrupti nesciunt fugit perferendis, consectetur nostrum provident ratione voluptatem officiis iure rem ab, impedit facere. Fuga qui at saepe porro!
                Quo commodi magni rem nihil temporibus officia recusandae, nesciunt numquam aliquam eveniet velit iusto ipsam harum esse voluptatibus iure unde quae sapiente eligendi modi aspernatur nostrum totam aliquid architecto. Rem!</p>
            </div>
        </div>
        <div>
            <Image src='/sparkling.jpg' width={450} height={200}  alt='section1'/>
            <div>
                <h2 className='text-gray-400 p-5 font-bold tracking-wide text-xl'>Sparkling wine</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum corrupti nesciunt fugit perferendis, consectetur nostrum provident ratione voluptatem officiis iure rem ab, impedit facere. Fuga qui at saepe porro!
                Quo commodi magni rem nihil temporibus officia recusandae, nesciunt numquam aliquam eveniet velit iusto ipsam harum esse voluptatibus iure unde quae sapiente eligendi modi aspernatur nostrum totam aliquid architecto. Rem!</p>
            </div>
        </div>
        <div>
            <Image src='/red.jpg' width={450} height={200}  alt='section1'/>
            <div>
                <h2 className='text-gray-400 p-5 font-bold tracking-wide text-xl'>Red wine</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis voluptatum corrupti nesciunt fugit perferendis, consectetur nostrum provident ratione voluptatem officiis iure rem ab, impedit facere. Fuga qui at saepe porro!
                Quo commodi magni rem nihil temporibus officia recusandae, nesciunt numquam aliquam eveniet velit iusto ipsam harum esse voluptatibus iure unde quae sapiente eligendi modi aspernatur nostrum totam aliquid architecto. Rem!</p>
            </div>
        </div>
    </div>
  )
}

export default Section