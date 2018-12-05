import React, { Component } from 'react';
import './App.css';
import ProjectMap from './components/ProjectMap'

class App extends React.Component {
  state = {
    projects: [{
      title: 'first project',
      text: 'first project text',
      left: '10px',
      top: '100px'
    },
    {
      title: 'second project',
      text: 'second project text',
      left: '50px',
      top: '100px'
    },
    {
      title: 'third project',
      text: 'third project text',
      left: '90px',
      top: '100px'
    },
    {
      title: 'fourth project',
      text: 'fourth project text',
      left: '130px',
      top: '100px'
    }]
  }

  render() {
    return (
      <div>
        <ProjectMap {...this.state} />
        
      </div>
    );
  }
}

export default App;
