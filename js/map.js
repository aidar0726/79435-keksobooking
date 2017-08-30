'use strict';
(function () {
  var containerMarker = document.querySelector('.tokyo__pin-map');
  var containerRivalInfo = document.querySelector('.dialog');
  var markers = document.querySelectorAll('.pin');
  var ESC_CODE = 27;
  var ENTER_CODE = 13;

  window.pin.renderMarker(window.data.arrayRival, containerMarker);

  var dialogClose = document.querySelector('.dialog__close');
  dialogClose.setAttribute('tabindex', 0);

  dialogClose.addEventListener('click', function () {
    containerRivalInfo.style.display = 'none';
    window.pin.removeClassActive(markers);
  });

  dialogClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_CODE) {
      containerRivalInfo.style.display = 'none';
    }
  });


  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_CODE) {
      containerRivalInfo.style.display = 'none';
      window.pin.removeClassActive(markers);
    }
  });
})();

