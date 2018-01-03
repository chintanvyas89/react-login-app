"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var LogoutContent = require('./common/LogoutContent');
var LoginContent = require('./common/LoginContent');

var Home = React.createClass({
   render: function() {
      if(sessionStorage.getItem('uid') > 0) {
          return (
            <div>
              <LoginContent />
            </div>
          );
      }
      else {
          return (
          <div>
            <LogoutContent />
          </div>
          );
      }
   }
});

module.exports = Home;