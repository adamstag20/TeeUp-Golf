import React from "react";
import { SPRING_CAL } from "../Data/Calendars";
import { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/calendarStyles.css";

export function TimeSlotList() {
  const [slotList, setSlotList] = useState([]);

  async function getTimeSlots() {
    axios
    .get("http://127.0.0.1:8000/teetimes/5/2023-12-21/")
    .then((response) => {
      setSlotList(response.data)
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
  };

  useEffect(() => {
    getTimeSlots()
  }, []);


  return (
    <div className="slot-body">
      <ul>
        <h2>Time Slots</h2>
        {SPRING_CAL.map((timeSlot, index) => (
          <div className="slot" key={index}>
            {timeSlot}
          </div>
        ))}
      </ul>
    </div>
  );
}

export function TimeSlot({ timeSlot }) {
  return <div className="slot-body"></div>;
}
