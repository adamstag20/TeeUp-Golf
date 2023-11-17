import React, { useState, useEffect } from "react";
import { Course, Course2 } from "./Course";
import axios from "axios";

export function Homepage() {
  //////////////////////////////////////////////////////////////////////
  /* 
  FUNCTIONS
  This section we will put any functions we want to add to Homepage 
  */
  /////////////////////////////////////////////////////////////////////

  // This is our array where course objects are stored. setCourses is
  // a function call that sets the courses variable for us
  const [courses, setCourses] = useState([]);
  const [Selected_courses, setSelectedCourse] = useState([]);
  // useEffect tells the frontend to go grab the courses data from backend
  // when homepage is loaded into browser
  useEffect(() => {
    // GET call to retrieve courses from backend
    axios
      .get("http://127.0.0.1:8000/api/course/")
      .then((response) => {
        setCourses(response.data);
        setSelectedCourse(response.data[0])
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedCourse(event.target.value);
  };


  //////////////////////////////////////////////////////////////////////
  /* HTML SECTION
  The return call below is what we see on the web browser page. We use 
  map function to display each course individually
  */
  //////////////////////////////////////////////////////////////////////
  return (
    <div className="App">
      <select value={Selected_courses} onChange={handleChange}>
      {courses.map((courses) => (
     <option key={courses.id} value={courses.id}>{courses.name}
     </option>
      ))}
      </select>
    </div>
  );
};
