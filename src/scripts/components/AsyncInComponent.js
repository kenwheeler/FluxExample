var React = require('react/addons');
var DataStore = require('../stores/DataStore');
var DataActions = require('../actions/DataActions');
var API = require('../api/Api');

function getState () {
    return {
      data: DataStore.getData(),
      loading: DataStore.isLoading()
    }
}

var AsyncInComponent = React.createClass({
  mixins: [DataStore.mixin],
  getInitialState: function () {
    return getState()
  },
  storeDidChange: function () {
    this.setState(getState());
  },
  updateState: function(fail) {
    DataActions.AsyncComponent({
      actionType: 'DATA_START'
    });

    API.getServerData(fail).then(function(data){
      DataActions.AsyncComponent({
        actionType: 'DATA_SUCCESS',
        data: data
      });
    }, function(error){
      DataActions.AsyncComponent({
        actionType: 'DATA_FAIL',
        data: error
      });
    });
  },
  render: function () {
    return (
      <div>
        <h2>Async In Component</h2>
        <p>This example shows a fetch with async being handled in-component.</p>
        <p>Loading: {this.state.loading.toString()}</p>
        <p>State: {this.state.data}</p>
        <button
          type="button"
          onClick={this.updateState.bind(this,false)}
        >Fetch State</button>
        <button
          type="button"
          onClick={this.updateState.bind(this, true)}
        >Fetch State (Fail)</button>
      </div>
    )
  }
})

module.exports = AsyncInComponent;