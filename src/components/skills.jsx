// Skills.js
import React from "react";

export default function Skills({ skills }) {
  return (
    <div className="skills-section">
      <h2>SKILLS</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}
