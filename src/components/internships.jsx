import React from 'react';

export default function Internships({ internships }) {
  return (
    <div className="internships-section">
      <h2>INTERNSHIPS</h2>
      {internships.map((intern) => (
        <div key={intern.name + intern.offeredby}>
          <h3>{intern.name} at {intern.offeredby}</h3>
          <h4>{intern.duration}</h4>
          <ul>
            {intern.description.map((task, taskIndex) => (
              <li key={taskIndex}>{task}</li>
            ))}
          </ul>
          <h5>Certificate:<a href = {intern.certificate} > {intern.name}</a></h5>
        </div>
      ))}
    </div>
  );
}
