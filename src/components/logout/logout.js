"use strict";

var React = require('react');
var Router = require('react-router');
var toastr = require('toastr');
var axios = require('axios');
var toastr = require('toastr');

var Logout = React.createClass({
    mixins: [
        Router.Navigation
    ],

    componentWillMount: function() {
      var i = sessionStorage.length;
      while(i--) {
          var key = sessionStorage.key(i);
          sessionStorage.removeItem(key);
      }
    },

    redirectToHome: function() {
      toastr.success('You are now Logged out', 'Logout Success');
      this.transitionTo('app');
    },
    
    render: function() {
      this.redirectToHome();
       return (
          <h1 className="loading-text">
            Logging out...
          </h1>
       );
    }
});

module.exports = Logout;