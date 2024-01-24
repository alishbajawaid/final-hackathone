import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

// Components for different pages
const Home = () => <h2>Home</h2>;
const Projects = () => <h2>Projects</h2>;
const About = () => <h2>About</h2>;

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Project Management App</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Switch>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
