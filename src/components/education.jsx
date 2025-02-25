export default function Education({ education }) {
    return (
      <>
        {education.map((edu, index) => (
          <div key={index}>
            <h2>Education</h2>
            <p>Degree: {edu.degree}</p>
            <p>University: {edu.university}</p>
            <p>Graduation Date: {edu.graduationDate}</p>
            <h4>Coursework</h4>
            <ul>
              {edu.coursework && edu.coursework.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>
        ))}
      </>
    );
  }
  