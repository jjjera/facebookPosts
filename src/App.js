import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody, Button } from 'reactstrap';


let data;
// let likes_count;
class App extends Component{

  constructor(props){
    console.log('cns called');
    super(props);
    this.state={post: '',likes_count:''}
  }

  // componentDidMount(){
  //   console.log('cdm called');
  //   axios.get('https://graph.facebook.com/v3.3/me?fields=feed{picture,message,object_id,shares,likes.summary(true).limit(0)}')
  //   .then((res) => {
  //     console.log('res is',res)
  //   })
  // }

  // getData = () => {
  //   //likes count: me?fields=feed{object_id,likes.summary(true).limit(0)}
  //   //comments: me?fields=feed{object_id,likes,comments
  //   //shares count: "me?fields=feed{object_id,likes,comments,shares}"
  //   window.FB.api("me?fields=feed{storyID=thelarch}", (response) => {
  //     console.log('response for likes',response);
  //     let a = response;
  //     console.log('response for likes',a);
  //   })
  // }

  getPostDetails = () => {
    window.FB.api(
      "me?fields=feed{picture,message,object_id,shares,likes.summary(true).limit(0)},videos",
       (response) => {
        if (response && !response.error) {
          // console.log('pic res',response)
          data = response.feed.data;
          this.setState({post:data});
          console.log('@',data)
        }
      }
  );
  }
  

  render(){
    console.log('render called');
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
export default App;