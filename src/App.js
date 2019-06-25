import React, { Component } from 'react';
import './App.css';
import InstaGram from './components/InstaGram';

class App extends Component{

  constructor(props){
    super(props);
  }
  

  render(){
    return(
      <div className="App">
        <InstaGram/>
      </div>
    )
  }
}
export default App;