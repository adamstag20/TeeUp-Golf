import React, { useState, useEffect } from "react";
import { Course } from "./Course";
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

  // useEffect tells the frontend to go grab the courses data from backend
  // when homepage is loaded into browser
  useEffect(() => {
    // GET call to retrieve courses from backend
    axios
      .get("http://127.0.0.1:8000/api/course/")
      .then((response) => {
        setCourses(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);



  //////////////////////////////////////////////////////////////////////
  /* HTML SECTION
  The return call below is what we see on the web browser page. We use 
  map function to display each course individually
  */
  //////////////////////////////////////////////////////////////////////
  return (
    <div className="App">
      {courses.map((courses) => (
        <Course key={courses.id} course={courses} />
      ))}
    </div>
  );
}
