import React from "react";
import a from "./a.jpg"

 // In Header.jsx
export default function Header(props) {
  console.log(props);  // Log to see all props

  return (
    <div className="header-section">
      <div><img src={a} alt="Image_user" className="class_img" /></div>
      <div>
        <h1>{props.name}</h1>  {/* Check if this renders correctly */}
        <h2>{props.title}</h2>
        <h4>Email: {props.email}</h4>
        <h4>Phone: {props.phone}</h4>
        <h4>LinkedIn: {props.linkedin}</h4>
      </div>
    </div>
  );
}



