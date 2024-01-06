import React from "react";
import { SPRING_CAL, MONTHS } from "../Data/Calendars";
import { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "react-calendar";
import "../Styles/calendarStyles.css";
import "react-calendar/dist/Calendar.css";

export function TimeSlotList() {
  const [slotList, setSlotList] = useState();
  const [date, setDate] = useState(new Date());
  const [displayDate, setDisplayDate] = useState();

  // Create function to update slotList onCLick
  function slotListCompare(takenSlots, openSlots) {
    let availSlots = [];
    for (let i = 0; i < openSlots.length; i++) {
      let j = 0;
      let check = true;
      while (j < takenSlots.length) {
        if (openSlots[i] === takenSlots[j].time.toString()) {
          check = false;
        }
        j++;
      }
      if (check === true) {
        availSlots.push(SPRING_CAL[i]);
      }
    }
    return availSlots;
  }

  // Convert display time to standard time format for compare
  function parse() {
    let compareCal = [];
    for (let i = 0; i < SPRING_CAL.length; i++) {
      let cut = 0;
      if (SPRING_CAL[i].length >= 8) {
        cut = SPRING_CAL[i].slice(0, 5);
      } else {
        cut = SPRING_CAL[i].slice(0, 4);
      }
      let val = cut.split(":");

      let time = SPRING_CAL[i].slice(5, 7);
      if (time == "PM" && val[0] != 12) {
        val[0] = Number(val[0]) + 12;
        cut = val[0] + ":" + val[1] + ":00";
        compareCal.push(cut);
      } else if (val[0] == 11 || val[0] == 10 || val[0] == 12) {
        cut = val[0] + ":" + val[1] + ":00";
        compareCal.push(cut);
      } else {
        cut = "0" + val[0] + ":" + val[1] + ":00";
        compareCal.push(cut);
      }
    }

    return compareCal;
  }

  function getTimeSlots() {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const compareDate = year + "-" + month + "-" + day;
    setDisplayDate(month + "/" + day + "/" + year);
    console.log(compareDate);

    axios
      .get(`http://127.0.0.1:8000/teetimes/5/${compareDate}/`)
      .then((response) => {
        setSlotList(slotListCompare(response.data, parse()));
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const [show, setShow] = useState(false);

  function CalendarDisplay() {
   
    if (show) {
      return (
        <div className = 'calendar-select-date'>
          <Calendar onChange={setDate} value={date} />
          <button onClick={() => {getTimeSlots(); setShow(false)}}> OK </button>
        </div>
      );
    }
    return (
      <div className ='calendar-date-selected'>
          <text className= 'calendar-select-display' onClick={() => {setShow(true)}}>view calendar </text>
          <h2>Tee Times for: {displayDate}</h2>
      </div>
    );
  }
/*
  useEffect(() => {
    //getTimeSlots()
  }, []);
*/
  return (
    <div className="slot-body">
      <ul>
        <CalendarDisplay />
        { slotList ? (
            slotList.map((timeSlot, index) => (
              <div className="slot" key={index}>
                {timeSlot}
              </div>
            ))
        ):(
          <div>No Date Selected!</div>
        )}

        
      </ul>
    </div>
  );
}


