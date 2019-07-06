import React, { Component } from 'react';
import axios from 'axios';

class Feed extends Component{

    constructor(props){
        super(props);
        this.state={bearerToken:[],
        img:''}
    }    

    componentDidMount(){
        console.log('cdm called');
        axios.get('http://localhost:8010/api/social/twitter')
        .then((response) => {
            this.setState({bearerToken:response.data.result});
            console.log('response is',this.state.bearerToken);
        })
        .catch((error) => {
            console.log('error block called',error);
        })
    }

    render(){
        return(
            <div>
                {console.log('check',this.state.bearerToken[0])}
            </div>
        )
    }
}

export default Feed;