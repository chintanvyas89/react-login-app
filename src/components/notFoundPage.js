"use strict";

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var NotFoundPage = React.createClass({
    render: function() {
        return (
            <div className="jumbotron">
                <h1>Page not found</h1>
                <p>
                    Ooops! Page does not exist. Please
                    <Link to="login">Login</Link> or
                    goto <Link to="app">Home page</Link>
                </p>
            </div>
        );
    }
});

module.exports = NotFoundPage;