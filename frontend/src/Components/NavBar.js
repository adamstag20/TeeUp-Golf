import React from 'react';
import {  Link } from "react-router-dom";

export function NavBar() {
  return (
  <div>
    <li>
      <Link to="/">Courses</Link>
    </li>
    <li>
      <Link to="/cats">Calendar</Link>
    </li>
  </div>
  );
}