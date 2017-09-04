'use strict';
(function () {
  var containerMarker = document.querySelector('.tokyo__pin-map');
  var fragment = document.createDocumentFragment();
  var rivals = window.data.arrayRival;

  rivals.forEach(function (rival, index) {
    var pin = window.pin.renderMarker(rival, index);
    fragment.appendChild(pin);
  });

  containerMarker.appendChild(fragment);

  /* ---  код для перетаскивания заполняемого pina по карте и нахождение его координат ---*/
  var pinMain = document.querySelector('.pin__main');
  var mapCity = document.querySelector('.tokyo');
  var addressField = document.querySelector('#address');
  var mapCityWidth = mapCity.offsetWidth;
  var mapCityHeight = mapCity.offsetHeight;
  var limitLeft = 0;
  var limitBottom = 60;
  var limitTop = 180;

  addressField.setAttribute('readonly', true);


  pinMain.addEventListener('mousedown', function (evt) {
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      var pinHeihgt = pinMain.offsetTop + pinMain.offsetHeight;
      var pinWidth = pinMain.offsetLeft + pinMain.offsetWidth / 2;
      pinWidth = Math.round(pinWidth);
      pinHeihgt = Math.round(pinHeihgt);

      if ((pinHeihgt - shift.y) < limitTop) {
        return;
      }

      if ((pinHeihgt - shift.y) > (mapCityHeight - limitBottom)) {
        return;
      }

      if ((pinWidth - shift.x) < limitLeft) {
        return;
      }

      if ((pinWidth - shift.x) > mapCityWidth) {
        return;
      }

      pinMain.style.top = ((pinMain.offsetTop) - shift.y) + 'px';
      pinMain.style.left = ((pinMain.offsetLeft) - shift.x) + 'px';

      addressField.value = 'x: ' + pinWidth + '  y: ' + pinHeihgt;
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();

