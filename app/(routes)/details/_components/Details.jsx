
import React from 'react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'



const Details = ({data}) => {

const path = usePathname();
const oneByOne = path.split('/')[2];

  return (
        <div className='h-screen mt-3'>
              <Command>
                <CommandInput placeholder="Type a command or search..." />
                  <CommandList className='overflow-visible'>
                    <CommandEmpty>No results found.</CommandEmpty>
                    <CommandGroup className=''>
                      {
                        data.map((item, index) =>{
                            return(
                              <CommandItem key={index} >
                              <Link href={'/details/'+ item.attributes?.Name} className={`w-full pl-5 lg:flex justify-around gap-2 items-center border border-primary py-2 lg:p-4 lg:px-6 cursor-pointer ${oneByOne==item.attributes?.Name&&'bg-gray-200'}`}>
                                <label className='lg:font-semibold' >{item.attributes?.Name}</label>
                                 <Image src={item.attributes?.Icon?.data[0]?.attributes?.url} width={70} height={70} alt='list' className='h-[50] w-[50] object-cover rounded-lg'/>   
                              </Link>
                            </CommandItem>
                            )
                        })
                      }
                    </CommandGroup>
                  </CommandList>
                </Command>
        </div>
  )
}

export default Details