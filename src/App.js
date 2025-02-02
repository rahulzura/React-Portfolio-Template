import React , {Component} from 'react';
import PersistentDrawerRight from "./components/Navigation/Navigation"
import ProjectCard from './components/ProjectCard/ProjectCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <PersistentDrawerRight />
        <ProjectCard />
      </React.Fragment>
    );
  }
}

export default App;
