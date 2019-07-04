import React, { Component } from 'react';
import './App.css';
import Twitter from './components/Twitter';
// import InstaGram from './components/InstaGram';
// import FaceBook from './components/FaceBook'

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