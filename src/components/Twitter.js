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

    // componentDidMount() {
    //     console.log('getDetails called')
    //     axios.get('http://localhost:8080/twitter/index.php')
    //     .then((response) => {
    //         this.setState({bearerToken:response.data});
    //         console.log('response i$',this.state.bearerToken[2].text);
    //         this.setState({
    //             img:response.data[0].entities.media[0].media_url_https
    //         })
    //     })
    //     .catch((error) => {
    //         console.log('error block called',error);
    //     })
    //     console.log('outside block called')
    // }


    render(){
        return(
            <div>
                {console.log('check',this.state.bearerToken[0])}
            </div>
        )
    }
}

export default Feed;