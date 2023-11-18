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
  const [Selected_course, setSelectedCourse] = useState([]);
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
    const courseId = Number(event.target.value);
    const course = courses.find((course) => course.id === courseId);
    setSelectedCourse(course);
  };


  //////////////////////////////////////////////////////////////////////
  /* HTML SECTION
  The return call below is what we see on the web browser page. We use 
  map function to display each course individually
  */
  //////////////////////////////////////////////////////////////////////
  return (
    <div className="App">
      <header style={{
        backgroundColor: '#ccc',
        padding: '20px',
        fontSize: '30px',
        textAlign: 'center',
        marginBottom: '40px',
        width: '100%'
      }}>
        Tee-Up Golf
      </header>
      <div style={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px auto',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
        transition: '0.3s',
        width: 'auto',
        backgroundColor: '#f1f1f1',
        display: 'inline-block'
      }}>
        <h4 style={{marginBottom: '20px'}}>Courses</h4>
        <select onChange={handleChange}>
          {courses.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name}
            </option>
          ))}
        </select>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        {Selected_course && (
          <div style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '16px',
            margin: '16px 0',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            transition: '0.3s',
            width: '70%',
            backgroundColor: '#f1f1f1'
          }}>
            <h2 style={{
              backgroundColor: '#ccc',
              margin: '-16px -16px 16px -16px',
              padding: '16px',
              fontSize: '20px',
              textAlign: 'center'
            }}>
              {Selected_course.name}
            </h2>
            <p style={{marginBottom: '8px', fontSize: '14px'}}>{Selected_course.description}</p>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
              <div>
                <p style={{marginBottom: '8px'}}>Difficulty: {Selected_course.diff}</p>
                <p style={{marginBottom: '8px'}}>Number of Holes: {Selected_course.holes}</p>
                <p style={{marginBottom: '8px'}}>Driving Range: {String(Selected_course.driving_range)}</p>
              </div>
              <div>
                <p style={{marginBottom: '8px'}}>Food: {String(Selected_course.food)}</p>
                <p style={{marginBottom: '8px'}}>Phone: {Selected_course.phone}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
    
};
