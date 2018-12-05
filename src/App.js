import React from 'react';
import './App.css';
import ProjectMap from './components/ProjectMap'
import * as data from './data/data'
import personal from './images/personal.jpg'

class App extends React.Component {

  render() {

    console.log("test");
    console.log(data);
    return (
      <div className="outer">
        <img src={personal} alt="barn full of bright ideas"></img>
        <ProjectMap projects={data.default} />

      </div>
    );
  }
}

export default App;
