// Skills.js
import React from "react";

export default function Skills({ skills }) {
  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
