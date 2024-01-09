import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import EventDetails from '../components/EventDetails';
import React, { useState, useEffect } from 'react';

const Events = () => {
 const [events, setEvents] = useState([]);

 const fetchData = async () => {
     try {
       const response = await fetch('http://localhost:8080/api/events', {
         method: 'GET',
         headers: {
           'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': 'http://localhost:3000'
         },
       });

       if (!response.ok) {
         throw new Error(`Error: ${response.status}`);
       }

       const data = await response.json();
       setEvents(data);
     } catch (error) {
       console.error('Error fetching events:', error);
     }
   };

   useEffect(() => {
     fetchData();
   }, []);

   return (
         <div>
             {events.map(event => (
               <div key={event.id} style={{ marginBottom: '10px' }}>
                 <Link to={`/events/${event.id}`}>
                   <strong>{event.eventName}</strong>
                 </Link>
                 <div>{event.date}</div>
               </div>
             ))}
           </div>
       );
     };

export default Events;