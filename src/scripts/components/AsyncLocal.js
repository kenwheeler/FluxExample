var React = require('react/addons');
var DataStore = require('../stores/DataStore');
var DataActions = require('../actions/DataActions');
var API = require('../api/Api');

function getState () {
    return {
      data: DataStore.getData(),
      loading: false
    }
}

var AsyncLocal = React.createClass({
  mixins: [DataStore.mixin],
  getInitialState: function () {
    return getState()
  },
  storeDidChange: function () {
    this.setState(getState());
  },
  updateState: function(fail) {
      this.setState({
        data: this.state.data,
        loading: true
      })
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
        <h2>Async With Local Loading State</h2>
        <h4>This example shows a fetch with a component local loading state.</h4>
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

module.exports = AsyncLocal;