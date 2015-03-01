var Promise = require('es6-promise').Promise;

var Api = {
  getServerData: function(fail) {
    var promise = new Promise(function(resolve, reject) {
      setTimeout(function(){
        if(fail) {
          reject("Data Fetch Failed");
        } else {
          resolve("New Data");
        }
      }, 1000)
    });
    return promise;
  }
}

module.exports = Api;