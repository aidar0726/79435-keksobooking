'use strict';

(function () {
  var containerRivalInfo = document.querySelector('.dialog');
  // var containerMarker = document.querySelector('.tokyo__pin-map');
  var markers = document.querySelectorAll('.pin');
  var ENTER_CODE = 13;
  // функция для навешивания событии(клики,нажатие клавиш)  маркерам
  var handleMarkerEvent = function (markerTag, indexCurrentRival) {
    markerTag.addEventListener('click', function (evt) {
      window.card.insertContentTemplate(window.data.arrayRival, indexCurrentRival);
      addClassActive(markers, evt);
      containerRivalInfo.style.display = 'block';
    });

    markerTag.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ENTER_CODE) {
        containerRivalInfo.style.display = 'block';
      }
    });
  };

  // функция для удаления активного класса
  var removeClassActive = function (markerArray) {
    for (var i = 0; i < markerArray.length; i++) {
      if (markerArray[i].classList.contains('pin--active')) {
        markerArray[i].classList.remove('pin--active');
      }
    }
  };


  // функция для добавления активного класса маркеру
  var addClassActive = function (AllMarkers, currentMarker) {
    removeClassActive(AllMarkers);
    currentMarker.currentTarget.classList.add('pin--active');
  };

  // функция для отрисовки маркеров
  var renderMarker = function (arrayUsers, contentMarker) {
    var fragment = document.createDocumentFragment();

    arrayUsers.forEach(function (element, index) {
      var newMarker = document.createElement('div');
      newMarker.classList.add('pin');
      newMarker.style = 'left: ' + element.location.x + 'px;' + ' top:' + element.location.y + 'px;';
      newMarker.innerHTML = '<img src=' + element.author.avatar + ' class=\'rounded\' width=\'40\' height=\'40\'>';
      newMarker.setAttribute('tabindex', 0);
      handleMarkerEvent(newMarker, index);

      fragment.appendChild(newMarker);
    });

    contentMarker.appendChild(fragment);
  };


  window.pin = {
    removeClassActive: removeClassActive,
    renderMarker: renderMarker
  };
})();

