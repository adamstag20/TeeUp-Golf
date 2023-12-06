import React from 'react';
import {SPRING_CAL} from '../Data/Calendars'


export function TimeSlotList() {
  return (
    <div>
      <h2>Time Slots</h2>
      <ul>
        {SPRING_CAL.map((timeSlot, index) => (
          <li key={index} style={timeSlotStyle}>
            {timeSlot}
          </li>
        ))}
      </ul>
    </div>
  );
};

const timeSlotStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  margin: '5px',
  borderRadius: '5px',
};
