import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">

      <div className="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">You are welcome <span className='text-primary'>to taste my wine</span> via a booking</h2>

        <p className="mt-4 text-gray-600">
        Traveling to wine regions is one way of increasing skill in tasting. Many wine producers in wine regions all over
         the world offer tastings of their wine. Depending on the country 
         or region, tasting at the winery may incur a small charge to allow
          the producer to cover costs.</p>

        <Link
          href="/categories"
          className="mt-8 inline-block rounded bg-primary px-12 py-3 text-sm font-medium text-white transition hover:bg-
           focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Get Started
        </Link>
      </div>

      <Image src='https://wineninjas.org/wp-content/uploads/2019/03/red-wine-for-beginners.jpg?w=950' width={650} height={400} alt='heroimg' className='w-full'/>
    </div>
  </div>
</section>

  )
}

export default Hero