import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { SearchIcon } from 'lucide-react'


const Header = () => {
  return (
    <div className='flex items-center justify-between pr-10 shadow-md'>
        <div className='flex gap-6 items-center justify-between'>
            <Image src="/winelogo.jpg" alt='logo' width={150} height={150} />
            <ul className='hidden md:flex gap-4 items-center'>
                <li className='hover:red cursor-pointer'>Visit</li>
                <li className='hover:red cursor-pointer'>Contact</li>
                <li className='hover:red cursor-pointer'>menu</li>
            </ul>
            <div className='flex gap-1 bg-slate-50 border rounded-full items-center px-3'>
                <SearchIcon />
               <input type="text" name='search' placeholder='search here' className='outline-none p-2'/>
           </div>
        </div>
        <div>
          <Button className='bg-primary' >Get started</Button>
        </div>
    </div>
  )
}

export default Header