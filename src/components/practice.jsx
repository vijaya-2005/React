export default function Practice({ practice }) {
    return (
      <>
      <h2>Practice</h2>
      <ul>
        {practice.map((prac, index) => (
          <div key={index}>
            
           <li> <p>Platform: {prac.platform}</p>
            <p>Username: {prac.username}</p></li>
          </div>
          
        ))}
        </ul>
      </>
    );
  }
  