var FluxExampleApp = require('./FluxExampleApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var AsyncInComponent = require('./AsyncInComponent');
var AsyncInAction = require('./AsyncInAction');
var AsyncLocal = require('./AsyncLocal');

var content = document.getElementById('content');

var Routes = (
  <Route handler={FluxExampleApp}>
    <Route name="/" handler={AsyncInComponent}/>
    <Route name="action" handler={AsyncInAction}/>
    <Route name="local" handler={AsyncLocal}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
