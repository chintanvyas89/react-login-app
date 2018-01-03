"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var LogoutContent = React.createClass({
   render: function() {
       return (
           <div className="jumbotron">
               
                <p>
                    Please login to view details. <Link to="login">Login</Link>
                </p>
            </div>
       );
   }
});

module.exports = LogoutContent;