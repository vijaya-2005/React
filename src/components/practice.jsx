export default function Practice({ practice }) {
    return (
      <div className="practice-section">
      <h2>CODING PROFILE</h2>
      <ul>
        {practice.map((prac, index) => (
          <div key={index}>
            
           <li>  {prac.platform} : {prac.username}
            </li>
          </div>
          
        ))}
        </ul>
      </div>
    );
  }
  