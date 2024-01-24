import React, { useState } from 'react';
import './App.css';

function App() {
  const [projectName, setProjectName] = useState('');
  const [projects, setProjects] = useState([
   
    { id: 1, name: 'Project 1' },
    { id: 2, name: 'Project 2' },
    { id: 3, name: 'Project 3' },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

   
    const newProject = { id: projects.length + 1, name: projectName };
    setProjects([...projects, newProject]);

    
    setProjectName('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Management System</h1>
      </header>

      <form onSubmit={handleSubmit}>
        <label htmlFor="projectName">Project Name:</label>
        <input
          type="text"
          id="projectName"
          name="projectName"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      <div className="project-container">
        {projects.map((project) => (
          <div key={project.id} className="card">
            <h2>{project.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;