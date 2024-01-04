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
         <h2>Upcoming Events</h2>
         <ul>
           {events.map(event => (
             <li key={event.id}>
               <strong>{event.eventName}</strong> <br />
               <strong>Artist:</strong> {event.artist.artistName} <br />
               <strong>Venue:</strong> {event.venue.venueName} <br />
               <strong>Price:</strong> ${event.price.toFixed(2)} <br />
               <strong>Date:</strong> {event.date} <br />
             </li>
           ))}
         </ul>
       </div>
     );
   };

export default Events;