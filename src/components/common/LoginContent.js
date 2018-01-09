"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var axios = require('axios');

var LoginContent = React.createClass({
  getInitialState: function() {
      return {
            user: { uid: '', name: '', picture: '', fullName: ''}
        };
  },

  componentDidMount: function() {
    this.serverRequest = axios.get('http://drupal.docker.localhost:8000/user/' + sessionStorage.getItem('uid') + '?_format=json')
       .then( response => {
           this.setState({
              user: {
                uid: response.data.uid[0].value,
                name: response.data.name[0].value,
                picture: response.data.user_picture[0].url,
                fullName: response.data.field_full_name[0].value
              }
           });
       })
       .catch(function (error) {
           console.log(error);
       });
  },

  render: function() {
     
     return (
         <div>
            <div className="col-sm-8">
              <h2>React login app using drupal rest Api</h2>
            </div>
            <div className="col-sm-4">
                <div className="col-sm-8">
                  <div className="col-sm-4">
                      <img width="75px" src= {this.state.user.picture} />
                  </div>
                   <div className="col-sm-8">
                        <strong>{this.state.user.fullName}</strong><br /> <Link to="logout">Logout</Link>
                   </div>
                 </div>
            </div>    
         </div>
     );
}
});

module.exports = LoginContent;
