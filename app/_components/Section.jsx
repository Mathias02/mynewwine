import Image from 'next/image'
import React from 'react'

const Section = () => {
  return (
    <div className='grid grid-cols-3 gap-4 mb-8'>
        <div>
            <Image src='https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_auto,w_750/f_auto/what-is-a-dry-white-wine-php6LebyJ' width={450} height={200}  alt='section1' className='w-full'/>
            <div>
                <h2 className='text-gray-400 p-5 font-bold tracking-wide text-2xl'>White wine</h2>
                <p><span className='font-bold text-lg'>White wine</span> is a wine that is fermented without skin contact. The colour can be straw-yellow, yellow-green, or yellow-gold.
                    It is produced by the alcoholic fermentation of the non-coloured pulp of grapes, which may have a skin of any colour.
                     White wine has existed for at least 4,000 years. White wine is mainly from "white" grapes, which are green or yellow in colour, such as the Chardonnay, Sauvignon blanc and Riesling</p>
            </div>
        </div>
        <div>
            <Image src='https://www.hoteljob.vn/uploads/images/19-06-12-13/sparkling-wine-la-gi-1.jpg' width={450} height={200}  alt='section2' className='w-full'/>
            <div>
                <h2 className='text-gray-400 p-5 font-bold tracking-wide text-2xl'>Sparkling wine</h2>
                <p><span className='font-bold text-lg'>Sparkling wine</span> is a wine with significant levels of carbon dioxide in it, making it fizzy. 
                    While it is common to refer to this as champagne, European Union countries legally reserve that word for products exclusively produced in the Champagne region of France. 
                    Sparkling wine is usually either white or rosé, but there are examples of red sparkling wines such as the Italian Brachetto, Bonarda and Lambrusco, and the Australian sparkling Shiraz.</p>
            </div>
        </div>
        <div>
            <Image src='https://domf5oio6qrcr.cloudfront.net/medialibrary/9380/conversions/iStock-615737086-thumb.jpg' width={450} height={200}  alt='section3' className='w-full'/>
            <div>
                <h2 className='text-gray-400 p-5 font-bold tracking-wide text-2xl'>Red wine</h2>
                <p><span className='font-bold text-lg'>Red wine</span> is a type of wine made from dark-colored grape varieties. The color of the wine can range from intense violet, typical of young wines, through to brick red for mature 
                    wines and brown for older red wines. The juice from most purple grapes is greenish-white, the red color coming from anthocyan pigments present in the skin of the grape. Much of the red wine production process 
                    involves extraction of color and flavor components from the grape skin. </p>
            </div>
        </div>
    </div>
  )
}

export default Section