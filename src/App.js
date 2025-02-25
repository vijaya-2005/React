import './App.css';
import Header from "./components/header"; 
import Summary from "./components/summary";
import Skills from "./components/skills";
import Experince from "./components/exprince";
import Education  from './components/education';
import Practice from './components/practice';
import data from "./components/data";  


function App() {
  console.log(data); 
  
  return (
    <div className="App">
      {/* Pass personalInfo to Header */}
      <div className='header'>
      <Header {...data.personalInfo} />
      <Summary summary={data.summary} /></div>
      <Skills skills={data.skills} />
      <Practice practice={data.practicePlatforms} />
      <Experince experience={data.experience} />
      <Education education={data.education} />
    </div>
  );
}

export default App;
