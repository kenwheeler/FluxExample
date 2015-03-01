'use strict';

var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

// CSS
require('../../styles/normalize.css');
require('../../styles/main.css');

var FluxExampleApp = React.createClass({
  render: function() {
    return (
      <div className='main'>
        <ul>
          <li><Link to="/">Async In Component</Link></li>
          <li><Link to="action">Async In Action</Link></li>
          <li><Link to="local">Async With Local Loading State</Link></li>
        </ul>
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = FluxExampleApp;
