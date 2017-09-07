'use strict';

(function () {
  var SERVER_URL = 'https://1510.dump.academy/keksobooking';
  var timeOut = 10000;

  var setup = function (onSucces, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        onSucces(xhr.response);
      } else {
        onError(xhr.response);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = timeOut;
    return xhr;
  };

  window.backend = {
    save: function (data, onSucces, onError) {
      var xhr = setup(onSucces, onError);

      xhr.open('POST', SERVER_URL);
      xhr.send(data);
    },
    load: function (onSucces, onError) {
      var xhr = setup(onSucces, onError);

      xhr.open('GET', SERVER_URL + '/data');
      xhr.send();
    }
  };
})();
