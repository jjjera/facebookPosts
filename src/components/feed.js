import React, { Component } from 'react';
import TweetBody from './tweet';

class Feed extends Component{

    constructor(props){
        super(props);
        this.state={}
    }
    render(){
        return(
            <div className="main-body">
            <TweetBody 
              name="Jerald George"
              handle="@jeraldgeorge"
              tweet="hello world !!"/>
            </div>
        )
    }
}

export default Feed;