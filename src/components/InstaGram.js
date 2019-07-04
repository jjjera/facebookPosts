import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody, Button } from 'reactstrap';

class InstaGram extends Component{
constructor(props){
    super(props);
    this.state = {
        data: []
    }
}


    getResponse = () => {
        axios.get('http://api.instagram.com/v1/users/self/media/recent/?access_token=5665661776.48362ab.2886c69624414053b342c4f85fbe3463')
        .then((res) => {
           console.log('res', res.data.data);
           this.setState({data:res.data.data});
           console.log('state value',this.state.data.map((val) => {
               return console.log('map val',val)
           }));

        })
        .catch((err) => {
            console.log('err is',err)
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
                      <CardImg top src={val.images.standard_resolution.url} alt="" />
                      <CardText>Liked :{val.likes.count}</CardText>
                      <CardText>Comments count :{val.comments.count}</CardText> 
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