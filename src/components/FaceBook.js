import React, { Component } from 'react';
import '../App.css';
// import axios from 'axios';
import { Card, CardImg, CardText, CardBody, Button } from 'reactstrap';


let data;
class FaceBook extends Component{

  constructor(props){
    // console.log('cns called');
    super(props);
    this.state={
      post: '',
      likes_count:'',
      fbpost1:'',
      fbpost2:'',
      caption1:'',
      caption2:'',
      likes1:'',
      likes2:'',
      userfirstname1:'',
      userlasetname1:'',
     
    }
  }

  getPostDetails = () => {
    window.FB.api(
      "me?fields=first_name,last_name,feed{picture,message,object_id,shares,likes.summary(true).limit(0)}",
       (response) => {
        if (response && !response.error) {
          // console.log('pic res',response)
        //  data = response.feed.data;
        //  this.setState({post:data});
          console.log('@',response)
          this.setState({
            fbpost1:(response.feed.data[0].picture) ? response.feed.data[0].picture : "",
            fbpost2:(response.feed.data[1].picture) ? response.feed.data[1].picture : "",
            caption1:(response.feed.data[0].message) ? response.feed.data[0].message : "",
            caption2:(response.feed.data[1].message) ? response.feed.data[1].message : "",
            likes1:response.feed.data[0].likes.summary.total_count,
            likes2:response.feed.data[1].likes.summary.total_count,
            userfirstname1:response.first_name,
            userlasetname1:response.last_name,

          })
        }
      }
  );
  }
  

  render(){
    // console.log('render called');
    return(
      <div className="App">
        <h1>My FB posts:</h1>
        {this.state.post && this.state.post.map((val,i) => {
            return (
            <Card key={i} style={{border:'solid' }}>
              <CardBody>
              {/* <video width="320" height="240" controls>
                <source src={val.picture} type="video/mp4"/>
                <source src={val.picture} type="video/ogg"/>
                Your browser does not support the video tag.
              </video> */}
                <CardImg top src={val.picture} alt="" />
                <CardText>{val.message}</CardText>
                {val.likes.summary.total_count > 0 && <CardText>Likes: {val.likes.summary.total_count}</CardText>}
                {console.log("likes_count is",val.shares && val.shares.count > 0)}
                {val.shares && val.shares.count > 0 && <CardText>Shares: {val.shares && val.shares.count}</CardText>}
              </CardBody>
           </Card>
            )
          })}
        <Button onClick={this.getPostDetails}>Picture</Button>
      </div>
    )
  }
}
export default FaceBook;