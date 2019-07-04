import React, { Component } from 'react';
import axios from 'axios';

class Feed extends Component{

    constructor(props){
        super(props);
        this.state={bearerToken:[],
        img:''}
    }    

    componentDidMount() {
        console.log('getDetails called')
        axios.get('http://localhost:8080/twitter/index.php')
        .then((response) => {
            this.setState({bearerToken:response.data});
            console.log('response i$',this.state.bearerToken[2].text);
            this.setState({
                img:response.data[0].entities.media[0].media_url_https
            })
        })
        .catch((error) => {
            console.log('error block called',error);
        })
        console.log('outside block called')
    }


    render(){
        return(
            <div>
                <li><img src={this.state.img} alt="Smiley face"/></li>
                {this.state.bearerToken.map((val,key) => {
                    return (
                        <ul key={key}>
                            <li><img src={this.state.img} alt="Smiley face"/></li>
                            <li>Comment : {val.text}</li>
                            <li>User Name : {val.user.name}</li>
                            <li>Screen Name : {val.user.screen_name}</li>
                            <li>Favourite count : {val.favorite_count}</li>
                            <li>Re_Tweet count : {val.retweet_count}</li>
                            {
                                val.extended_entities &&
                                <li>image2 : <img src={val.extended_entities.media.media_url_https} alt="Smiley face"/></li>
                            }
                        </ul>
                    )
                })} 
            </div>
        )
    }
}

export default Feed;