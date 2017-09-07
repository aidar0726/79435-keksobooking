'use strict';

(function () {
  window.synchronizeFields = function (fieldEnter, fieldDepend, dataFieldEnter, dataFieldDepend, callbackFunction) {
    var indexValue = dataFieldEnter.indexOf(fieldEnter.value);

    callbackFunction(fieldDepend, dataFieldDepend[indexValue]);
  };

})();
