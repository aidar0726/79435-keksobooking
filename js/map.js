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
  var limitBottom = 40;
  var limitTop = 180;

  addressField.setAttribute('readonly', true);

  var canPinMove = function (pinHeihgt, pinWidth, shiftPin) {
    var result = true;
    var differenceShiftX = pinWidth - shiftPin.x;
    var differenceShiftY = pinHeihgt - shiftPin.y;

    if (differenceShiftY < limitTop) {
      result = false;
    }

    if (differenceShiftY > (mapCityHeight - limitBottom)) {
      result = false;
    }

    if (differenceShiftX < limitLeft) {
      result = false;
    }

    if (differenceShiftX > mapCityWidth) {
      result = false;
    }

    return result;
  };

  var coordinateEntryAdreesField = function (coordinateX, coordinateY, addressBox) {
    coordinateX = Math.round(coordinateX);
    coordinateY = Math.round(coordinateY);
    addressBox.value = 'x: ' + coordinateX + '  y: ' + coordinateY;
  };

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

      var pinY = pinMain.offsetTop + pinMain.offsetHeight;
      var pinX = pinMain.offsetLeft + pinMain.offsetWidth / 2;

      if (canPinMove(pinY, pinX, shift)) {
        pinMain.style.top = ((pinMain.offsetTop) - shift.y) + 'px';
        pinMain.style.left = ((pinMain.offsetLeft) - shift.x) + 'px';
        coordinateEntryAdreesField(pinX, pinY, addressField);
      }
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

