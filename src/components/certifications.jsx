export default function Certificates({ certifictes}) {
  return (
    <div className="certifications-section">
        <h2>CERTIFICATIONS</h2>
      {certifictes.map((certi, index) => (
        <ul>
        <li key={index}>
        <a  href= {certi.link}>{certi.desc}</a>        
        </li>
        </ul>
        
      ))}
    </div>
  );
}