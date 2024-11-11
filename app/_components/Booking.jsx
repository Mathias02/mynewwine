"use client"

import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { AlarmClockPlus, CalendarDays } from 'lucide-react'

  

const BookingApp = () => {
    const [date, setDate] = useState(new Date());
    const [timeSlot,setTimeSlot] = useState();

    useEffect(() =>{
        workingHours()
    },[])

    const workingHours = () => {

        const workingTime = [];

         for(let i = 9; i <= 12; i++){
            workingTime.push({
                time: i + ':00 AM'
            })
            workingTime.push({
                time: i + ':30 AM'
            })
         }
         for(let i = 13; i <= 17; i++){
            workingTime.push({
                time: i + ':00 PM'
            })
            workingTime.push({
                time: i + ':30 PM'
            })
         }

         setTimeSlot(workingTime)
    }
  return (
    <Dialog>
  <DialogTrigger>
        <Button className='rounded-full cursor-pointer'>Book appointment</Button> 
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Book your appointment</DialogTitle>
      <DialogDescription>
        <div>
            <div className=' grid grid-cols-2 gap-2 items-center'>
                <div className='flex flex-col flex-baseline'>
                    <h2 className='flex gap-2 items-center py-2'>
                      <CalendarDays size={25} /> Select Date
                    </h2>
                 <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                />
                </div>
                <div>
                    <h2 className='flex gap-2 items-center py-2'>
                       <AlarmClockPlus size={30} /> Select Time
                    </h2>
                    <div className='grid grid-cols-3 gap-2 border py-5 px-2 rounded-lg'>
                        {timeSlot?.map((item, index) =>{
                           return(
                              <h2 key={index} className='p-2 border rounded-full text-center cursor-pointer hover:bg-primary hover:text-white'>{item?.time}</h2>  
                           ) 
                        })}
                    </div>
                </div>
            </div>
        </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

  )
}

export default BookingApp