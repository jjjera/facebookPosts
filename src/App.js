import React, { Component } from 'react';
import './App.css';
import Twitter from './components/Twitter';

class App extends Component{

  constructor(props){
    super(props);
  }
  

  render(){
    return(
      <div className="App">
        <Twitter/>
      </div>
    )
  }
}
export default App;