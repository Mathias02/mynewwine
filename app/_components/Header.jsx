import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { SearchIcon } from 'lucide-react'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"



const Header = () => {
  return (
    <div className='flex items-center justify-between pr-10 shadow-md'>
        <div className='flex gap-6 items-center justify-between'>
            <Link href={'/'}><Image src="/winelogo.jpg" alt='logo' width={150} height={150} /></Link>
            <ul className='hidden md:flex gap-4 items-center'>
               <Link href='/visit'><li className='hover:text-primary cursor-pointer hover:scale-105'>Visit</li></Link>
               <Link href='/contact'><li className='hover:text-primary cursor-pointer hover:scale-105'>Contact</li></Link>
            </ul>
            <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <h2 className='hover:text-primary cursor-pointer'>menu</h2>
                    </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>Subscription</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

            <div className='flex gap-1 border rounded-full items-center px-3'>
                <SearchIcon />
               <input type="text" name='search' placeholder='search here' className='outline-none p-2'/>
           </div>
        </div>
        <div>
          <Button className='bg-primary'>Get started</Button>
        </div>
    </div>
  )
}

export default Header