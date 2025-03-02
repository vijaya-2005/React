export default function Project({ project}) {
    return (
      <div className="project section-section">
          <h2>PROJECTS</h2>
        {project.map((pro, index) => (
            <>
          <p>{pro.des}</p>
          <a href = {pro.git} > GitHub</a>
          </>
          
        ))}
      </div>
    );
  }
