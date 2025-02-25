export default function Experience({ experience }) {
  return (
    <div>
      <h2>Experience</h2>
      {experience.map((exp, index) => (
        <div key={index}>
          <h3>{exp.position} at {exp.company}</h3>
          <h4>{exp.duration}</h4>
          <h5>Responsibilities:</h5>
          <ul>
            {exp.responsibilities.map((task, taskIndex) => (
              <li key={taskIndex}>{task}</li>
            ))}
          </ul>
          <h5>Github Link:{exp.githubLink}</h5>
        </div>
      ))}
    </div>
  );
}
