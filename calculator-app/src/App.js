import React, { Component } from 'react';
import StatsCard from './components/calculator';
import './App.css';

class App extends Component {
  state = {  }

  componentDidMount() {
    document.title = 'Calculator';
  }

  render() { 
    return (
      <React.Fragment>
        <StatsCard />
      </React.Fragment>
    );
  }
}
 
export default App;
