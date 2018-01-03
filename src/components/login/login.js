"use strict";

var React = require('react');
var Router = require('react-router');
var LoginForm = require('./loginForm');
var toastr = require('toastr');
var axios = require('axios');

var Login = React.createClass({
    mixins: [
        Router.Navigation
    ],

    getInitialState: function() {
      return {
            user: { id: '', username: '', pass: ''}
        };
    },

    setUserState: function(event) {
      var field = event.target.name;
      var value = event.target.value;
      this.state.user[field] = value;
      return this.setState({user: this.state.user});
    },

    redirectToHome: function() {
      this.transitionTo('app');
    },

    loginUser: function(event) {
        event.preventDefault();

        axios.post('http://drupal.docker.localhost:8000/user/login?_format=json', {
          name: this.state.user.username,
          pass: this.state.user.pass
        })
        .then(response => {
          sessionStorage.setItem('xcrfToken', response.data.csrf_token);
          sessionStorage.setItem('uid', response.data.current_user.uid);
          sessionStorage.setItem('logoutToken', response.data.logout_token);
          var credentials = btoa(this.state.user.username + ':' + this.state.password);
          sessionStorage.setItem('auth', credentials);

          toastr.success('You are now Logged in. Please check your info', 'Login Success');
          this.redirectToHome();
        })
        .catch(function (error) {
          console.log(error)
          toastr.error('Login failed', 'Please enter correct info.');
        });
    },

   render: function() {
       return (
           <LoginForm
               user={this.state.user}
               onChange={this.setUserState}
               onSave={this.loginUser} />
       );
   }
});

module.exports = Login;