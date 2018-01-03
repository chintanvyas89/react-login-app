"use strict";

var React = require('react');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var routes = (
 <Route name="app" path="/" handler={require('./components/app')}>
     <DefaultRoute handler={require('./components/homePage')} />
     <Route name="login" handler={require('./components/login/login')} />
     <Route name="logout" handler={require('./components/logout/logout')} />
     <NotFoundRoute handler={require('./components/notFoundPage')} />
 </Route>
);

module.exports = routes;