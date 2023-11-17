import React, { useState, useEffect} from 'react';

export function Course({course}) {
 //////////////////////////////////////////////////////////////////////
  /* 
  FUNCTIONS
  This section we will put any functions we want to add to Course component 
  */
  /////////////////////////////////////////////////////////////////////



  

  ///////////////////////////////////////////////////////////////////// 
  /* HTML SECTION

  */
  ///////////////////////////////////////////////////////////////////// 
  return (
    <div className="course">
        <h2>{course.name}</h2>
        <p>Description: {course.description}</p>
        <p>Difficulty: {course.diff}</p>
        <p>Number of Holes: {course.holes}</p>
        <p>Driving Range: {String(course.driving_range)}</p>
        <p>Food: {String(course.food)}</p>
        <p>Phone: {course.phone}</p>
    </div>
  );
}

export function Course2({course}) {
  //////////////////////////////////////////////////////////////////////
   /* 
   FUNCTIONS
   This section we will put any functions we want to add to Course component 
   */
   /////////////////////////////////////////////////////////////////////
 
 
 
   
 
   ///////////////////////////////////////////////////////////////////// 
   /* HTML SECTION
 
   */
   ///////////////////////////////////////////////////////////////////// 
   return (
     <div className="course">
         <h2>{course.name}</h2>
         <h2>Description: </h2>
         <p>{course.description}</p>
         <p>Difficulty: {course.diff}</p>
         <p>Number of Holes: {course.holes}</p>
         <p>Driving Range: {String(course.driving_range)}</p>
         <p>Food: {String(course.food)}</p>
         <p>Phone: {course.phone}</p>
     </div>
   );
 }