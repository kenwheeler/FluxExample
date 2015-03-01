var flux = require('../flux/flux');

var _data = {};
var _loading = false;

function setData(data) {
  _data = data;
}

function setLoading(loading) {
  _loading = loading;
}

var DataStore = flux.createStore({
  getData: function () {
    return _data
  },

  isLoading: function () {
    return _loading
  },
}, function(payload){
  if(payload.actionType == 'DATA_START'){
    setLoading(true);
    DataStore.emitChange();
  }

  if(payload.actionType == 'DATA_SUCCESS'){
    setData(payload.data);
    setLoading(false);
    DataStore.emitChange();
  }

  if(payload.actionType == 'DATA_FAIL'){
    setData(payload.data);
    setLoading(false);
    DataStore.emitChange();
  }
});

module.exports = DataStore;