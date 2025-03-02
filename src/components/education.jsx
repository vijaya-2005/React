export default function Education({ education }) {
    return (
      <div className="education-section">
          <h2>EDUCATION</h2>
        {education.map((edu, index) => (
          <div   key={index}>
          
            <h3> {edu.degree}</h3>
            <h4> {edu.university} </h4><p>Percentage :{edu.percentage}</p>
            <p>{edu.graduationDate}</p>
            <hr></hr>
          </div>
          
        ))}
      </div>
    );
  }
  