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
})();

