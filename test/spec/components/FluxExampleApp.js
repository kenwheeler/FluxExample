'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var FluxExampleApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    FluxExampleApp = require('../../../src/scripts/components/FluxExampleApp.js');
    component = React.createElement(FluxExampleApp);
  });

  it('should create a new instance of FluxExampleApp', function () {
    expect(component).toBeDefined();
  });
});
