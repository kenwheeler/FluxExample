var React = require('react/addons');
var DataStore = require('../stores/DataStore');
var DataActions = require('../actions/DataActions');


function getState () {
    return {
      data: DataStore.getData(),
      loading: DataStore.isLoading()
    }
}

var AsyncInAction = React.createClass({
  mixins: [DataStore.mixin],
  getInitialState: function () {
    return getState()
  },
  storeDidChange: function () {
    this.setState(getState());
  },
  updateState: function(fail) {
      DataActions.AsyncAction(fail);
  },
  render: function () {
    return (
      <div>
        <h2>Async In Action</h2>
        <p>This example shows a single action being fired and the aync logic taking place within the action.</p>
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

module.exports = AsyncInAction;