import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
let data;
class App extends Component{

  constructor(props){
    super(props);
    this.state={post: [],post1 : [],dummy : ''}
  }

  componentDidMount(){
      // curl -F 'client_id=CLIENT_ID' \
      // -F 'client_secret=CLIENT_SECRET' \
      // -F 'grant_type=authorization_code' \
      // -F 'redirect_uri=AUTHORIZATION_REDIRECT_URI' \
      // -F 'code=CODE' \
      // https://api.instagram.com/oauth/access_token
  }

  getData = () => {
    //likes count: me?fields=feed{object_id,likes.summary(true).limit(0)}
    //comments: me?fields=feed{object_id,likes,comments
    //shares count: "me?fields=feed{object_id,likes,comments,shares}"
    window.FB.api("me?fields=feed{storyID=thelarch}", (response) => {
      console.log('response for likes',response);
      let a = response;
      console.log('response for likes',a);
      // console.log('response for likes',a[0].comments.data[0].message);
      // this.setState({dummy:a[0].comments.data[0].message});
      // console.log('response for likes',Object.keys(a.likes).map((val) => {
      //   return(
      //     console.log('val is',val)
      //   )
      // }));
      // console.log('a is',a.map((val) => {
      //   return console.log('map values are',val.likes)
      // }))
    })
  }

  getPic = () => {
    window.FB.api(
      "me?fields=posts{message,picture}",
      {
          "redirect": false,
          "height": "200",
          "type": "large",
          "width": "200"
      },
      function (response) {
        if (response && !response.error) {
          // console.log('pic res',response)
          let a;
          a = response;
          console.log(a.posts.data)
          this.setState({post1:a.posts.data});
          // this.setState({post1 : a.})
          // console.log('set state val',this.state.post1)
        }
      }.bind(this)
  );
  }
  

  render(){
    return(
      <div className="App">
        <h1>My FB posts: {this.state.dummy}</h1>

        {/* {this.state.post.map((val,i) => {
          return (
            <tr key={i}>
              <td>{val.comments}</td>
              <td>{val.likes}</td>
            </tr>
          )
        })} */}
        {this.state.post1.map((val,i) => {
            return (
            <tr key={i}>
              <td>{val.message}</td>
              <td><img src={val.picture} /></td>
             </tr>
            )
          })}
          
        <button onClick={this.getData}>Click</button>
        <button onClick={this.getPic}>Picture</button>
      </div>
    )
  }
}
export default App;
