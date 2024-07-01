"use client"
import React,{useState} from 'react'
import {toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
//Toasted is used for write a popup message 
import { v4 as uuidv4} from 'uuid';  
//create automate unique id used for uuid


export default function NewEvent() {
  const [eventName,setEventName] = useState("")
  const [eventDate,setEventDate] = useState("")
  const [eventDescription,setEventDescription] = useState("")
  const [eventLocation,setEventLocation] = useState("")
  const [eventOrganizer,setEventOrganizer] = useState("")

function handleSubmit(e){

  e.preventDefault();
  try{
  if(!eventName)
    {
    toast.error("Event name is required");
  }
  else if(!eventDate)
    {
    toast.error("Event Date is required");
  }
  else if(!eventDescription)
    {
    toast.error("Event Description is required");
  }

else if(!eventLocation)
    {
    toast.error("Event Location is required");
  }
  else if(!eventOrganizer)
    {
    toast.error("Event Organizer is required");
  }
  else{
    const newEvent={
      id:uuidv4(),
      name:eventName,
      date:eventDate,
      description:eventDescription,
      location:eventLocation,
      organizer:eventOrganizer
    };
   const events = JSON.parse(localStorage.getItem("events")) || [];
   events.push(newEvent);   // add events is used for local Storage 
   localStorage.setItem("events",JSON.stringify(events));
  setEventName("");
  setEventDate("");
  setEventLocation("");
  setEventDescription("");
  setEventOrganizer("");
   toast.success("New Event is added!");
  }

  }
  catch(error){
        toast.error("An error is contained in the component")
  }
}
  return (
    <>
   <ToastContainer  theme='colored' autoClose={2000} />
  <section className='flex
   items-center justify-center py-7 px-6 lg:py-20 '>
    <form  onSubmit={handleSubmit} className='space-y-8'>
      <div className='grid gap-4 md:grid-cols-2'>
        <div>
    <label htmlFor='event-name'>Event Name</label>
      <input 
      type="text"
      name='event-name' 
      id='event-name' required 
      placeholder='What is the name of event?'
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />
        
        </div>
        <div>
    <label htmlFor='event-date'>Event Date</label>
      <input 
      type="date" 
      name='event-date' 
      id='event-date' required 
     value={eventDate}
     onChange={(e) =>setEventDate(e.target.value)}
    placeholder='What is the date of event?'/>
    
     </div>
        <div>
    <label htmlFor='event-description'>Event Description</label>
    <textarea name='event-description' 
    id='event-description' 
    cols="30" rows='6' required
    value={eventDescription}
    onChange={(e) => setEventDescription(e.target.value)}
    placeholder='Give a short description about the event?'></textarea>
        </div>
        <div>
    <label htmlFor='event-location'> Event Location</label>
      <input 
      type="text" 
      name='event-location' 
      id='event-location'
      value={eventLocation}
      onChange={(e) => setEventLocation(e.target.value)}
       required 
      placeholder='What is the location of event?'/>
        </div>
        <div>
    <label htmlFor='event-organizer'>Event Organizer</label>
      <input 
      type="text" 
      name='event-organizer' 
      id='event-organizer' required 
      value={eventOrganizer}
      onChange={(e) => setEventOrganizer(e.target.value)}
      placeholder='Who is the primary organizer of the event?'/>
        </div>
      </div>
     <button onClick={handleSubmit} type='submit' className='mt-4 bg-white  px-6 py-4 
     w-full rounded-lg  text-neutral-900 
     font-semibold hover:animate-pulse outline-none'>
      Create New Event
     </button>
    </form>
  </section> 
   </>
  );
}


