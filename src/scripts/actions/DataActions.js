var flux = require('../flux/flux');
var API = require('../api/Api');

var DataActions = {
  AsyncComponent: function (payload) {
    flux.dispatcher.dispatch(payload);
  },
  AsyncAction: function (fail) {
    flux.dispatcher.dispatch({
      actionType: 'DATA_START'
    });
    API.getServerData(fail).then(function(data){
      flux.dispatcher.dispatch({
        actionType: 'DATA_SUCCESS',
        data: data
      });
    }, function(error){
      flux.dispatcher.dispatch({
        actionType: 'DATA_FAIL',
        data: error
      });
    });
  }
}

module.exports = DataActions;