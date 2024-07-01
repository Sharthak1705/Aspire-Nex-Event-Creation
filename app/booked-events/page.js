"use client"

import React, { useEffect, useState } from 'react'

 export default function BookedEvents() {
   const[bookedEvents,setBookedEvents] = useState([]);
  
  useEffect (() =>{
     const events =JSON.parse(localStorage.getItem("bookedEvents") || "[]");
     setBookedEvents(events);
  },[])
  
   return (
    <>
      <section className='max-w-6xl mx-auto py-10 px-6'>
  <h2 className='font-bold text-4xl mb-8'> Booked Events</h2>
      {bookedEvents.length=== 0 ? <p className='text-neutral-600'>No booked Events
      available</p>:(
      <table width="100%">
        <thead>
          <tr className='bg-neutral-900'>
            <td className='font-bold text-lg py-3'>Event Name</td>
            <td className='font-bold text-lg py-3'>Event Date</td>
            <td className='font-bold text-lg py-3'>Event Location</td>
            <td className='font-bold text-lg py-3'>Event Organizer</td>
          </tr>
        </thead>
        <tbody>
          {bookedEvents.map((event) => (
          <tr key={event.id} className="even:bg-neutral-600">
          <td className='py-2'>{event.name}</td>
          <td className='py-2'>{event.date}</td>
          <td className='py-2'>{event.location}</td>
          <td className='py-2'>{event.organizer}</td>

          </tr>
          ))}

        </tbody>
      </table>)}
      </section>
    </>
  )
}

