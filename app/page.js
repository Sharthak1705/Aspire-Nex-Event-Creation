"use client"

import React,{ useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css" 

 export default function page() {
  const [eventList,setEventList] = useState([]);

  useEffect(()=>{
   const events = JSON.parse(localStorage.getItem("events") || "[]");
  setEventList(events);
  },[])

  const bookedEvents = JSON.parse(localStorage.getItem("bookedEvents")) || [];
  
  const handleBookEvent = (event) => {
    // Check if already booked
  if(bookedEvents.find((e) => e.name === event.name && e.date === event.date)
  ) {
  toast.error("Event has already been booked",{autoClose :2000});
  return; 
}
  const updateBookedEvents = [...bookedEvents,event];
  localStorage.setItem("bookedEvents",JSON.stringify(updateBookedEvents));
  toast.success("Event book successfully",{autoClose :2000});
  }
  return (
      <>
      <ToastContainer  theme='colored' autoClose={2000}/>
        <section className='px-6 max-w-6xl mx-auto'>
          <h2 className='font-bold text-4xl text-center mb-8 py-10'>Events</h2>
        {eventList.length === 0 ? <p className='text-neutrl-600'> No events found</p> 
        :
        <div className='grid  gap-4 grid-4 md:grid-cols-2 lg:grid-cols-3'>{eventList.map((event) =>(
        <div  className='p-4 rounded-lg border border-neutral-600'key={event.id}>
          <h2 className='font-bold my-3 text-neutral-400'>
          <strong className='text-neutral-200'>
            Event Name:</strong> {event.name}
          </h2> 
          <p className='text-neutral-600 my-3'><strong className='text-neutral-200'>Date:</strong> {event.date}</p>
          <p className='text-neutral-200 my-3'> <strong className='text-neutral-200'>Description:</strong> {event.description}</p>
          <p className=' text-neutral-400 gap-10 my-3'><strong className='text-neutral-200'>Location:</strong> {event.location}</p>
          <p className='text-neutral-400'> <strong className='text-neutral-200'>Organizer:</strong> {event.organizer}</p>
          
          <button 
          onClick={() =>handleBookEvent(event)}
          className='py-2 text-sm my-3 px-4 
          rounded-lg bg-gray-600 hover:bg-gray-500 
          text-black hover:text-white font-semibold'>
          Book Now
          </button>
          </div>
        ))}</div>
        }
        </section>
      </>
  )
}
