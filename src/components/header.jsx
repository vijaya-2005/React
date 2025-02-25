import React from "react";
import "./header.css";
import a from "./a.jpg"

 export  default function Header(props) {
  return (
    <div className="sub_header">
      <div><img src={a} alt="Image_user"className="class_img"></img></div>
      <div>
      <h1>{props.name}</h1>
      <h2>{props.title}</h2>
      <h4>Email: {props.email}</h4>
      <h4>Phone: {props.phone}</h4>
      <h4>LinkedIn: {props.linkedin}</h4></div>
    </div>
  );
}


