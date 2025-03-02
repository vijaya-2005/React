import React from 'react';
import './App.css';
import Header from './components/header'; 
import Summary from './components/summary';
import Skills from './components/skills';
import Internships from './components/internships';
import Education from './components/education';
import Practice from './components/practice';
import data from './components/data';  
import Certificates from './components/certifications';
// import Project from "./components/projects"

function App() {
  console.log(data);

  return (
    <div className="App">
      <hr></hr><br></br>
      {/* Pass personalInfo to Header */}
      <Header {...data.personalInfo} />
      <div className='header'>
        <Summary summary={data.summary} />
        <Skills skills={data.skills} />
        <Education education={data.education} />
        <Internships internships={data.internships} />    
        {/* <Project project={data.projects}/> */}
        <Certificates certifictes= {data.certifications} />
        <Practice practice={data.practicePlatforms} />
       
      </div> 
      <hr></hr>
    </div>
  );
}

export default App;
