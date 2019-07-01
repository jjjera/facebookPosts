import React, { Component } from 'react';
// import axios from 'axios';
import $ from "jquery";
var bearerToken;

class Feed extends Component{

    constructor(props){
        super(props);
        this.state={}
    }    

    getDetails = () => {
        console.log('getDetails called')
        var twitter_api = "https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=twitter_user&count=50";
        $.ajax({
            url: twitter_api,
            dataType: 'json',
            success: function(response){
              //here you do whatever you want with the response variable
              console.log('succ block called',response)
            }
         });
            // var details = {
            //   'grant_type': 'client_credentials'
            // };
            // var formBody = [];
            // for (var property in details) {
            //   var encodedKey = encodeURIComponent(property);
            //   var encodedValue = encodeURIComponent(details[property]);
            //   formBody.push(encodedKey + "=" + encodedValue);
            // }
            // formBody = formBody.join("&");
            
            // var key = "9vKGMdMFgMVulRmdspgLKTdqL";
            // var secret = "7KPhAVRXSXfO0oY0rLl6f8WXUKY71YXQcVvHdxth5KqVbKN3mY";
            // // var base64 = require('base-64');
            // var credentials = encodeURIComponent(key) + ":" + encodeURIComponent(secret);
            // var encoded = new Buffer(credentials).toString('base64');
            // console.log("Created encoded credentials: " + encoded);
            // fetch('https://api.twitter.com/oauth2/token', {
            //   method: 'POST',
            //   headers: {
            //     'Accept': 'application/json',
            //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            //     'Authorization': 'Basic ' + encoded
            //   },
            //   body: formBody
            // }).then((response) => response.json())
            //   .then((responseData) => {
            //     bearerToken = responseData.access_token;
            //     console.log("Got Bearer: " + responseData.access_token);
            //     this._loadTweet();
            
            //   })
            //   .catch((error) => {
            //     console.error(error);
            //     alert('Alert Title failure' + JSON.stringify(error))
            //   });
            console.log('outside block called')

    }

    // _loadTweet = () => {
    //     console.log("start load tweet");
      
    //     fetch('https://api.twitter.com/1.1/search/tweets.json?q=love', {
    //       method: 'GET',
    //       headers: {
    //         'Authorization': "Bearer " + bearerToken
    //       }
    //     }).then((response) => response.json())
    //       .then((responseData) => {
    //         console.log(JSON.stringify(responseData));
    //       })
    //       .catch((error) => {
    //         console.error(error);
    //         alert('Alert Title failure' + JSON.stringify(error))
    //       });
    //   };


    render(){
        return(
            <div>
                <button onClick={this.getDetails}>Click</button>
            </div>
        )
    }
}

export default Feed;