import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody, Button } from 'reactstrap';

var a = [];
class InstaGram extends Component{
constructor(props){
    super(props);
    this.state = {
        data: []
    }
}

//access_token=15419785679.788f7d4.b4e879012aba491b940a47ff01c83f89

    getResponse = () => {
        console.log('getResponse called');
        axios.get('http://api.instagram.com/v1/users/self/?access_token=15419785679.e954fd9.0f78c54bb6f34eecab54ad67c7b4b05b')
        .then((response) => {
            console.log('response is',response);
            a.push(response.data.data);
            console.log('a is',a);
            this.setState({data:a})
            console.log('state value is',this.state.data);
        })
        .catch((err) => {
            console.log('err called',err);
        })
    }

    render(){
        return(
            <div className="App">
            <h1>Insta posts:</h1>
            {this.state.data.map((val,i) => {
                return (
                    <Card key={i} style={{border:'solid' }}>
                    <CardBody>
                      <CardImg top src={val.profile_picture} alt="" />
                      <CardText>{val.full_name}</CardText>
                      {/* {val.likes.summary.total_count > 0 && <CardText>Likes: {val.likes.summary.total_count}</CardText>}
                      {console.log("likes_count is",val.shares && val.shares.count > 0)}
                      {val.shares && val.shares.count > 0 && <CardText>Shares: {val.shares && val.shares.count}</CardText>} */}
                    </CardBody>
                 </Card>
                )
            })}
            <button onClick={this.getResponse}>Click</button>
          </div>
        )
    }
}

export default InstaGram;