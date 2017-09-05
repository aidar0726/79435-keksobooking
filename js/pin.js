'use strict';

(function () {
  var containerRivalInfo = document.querySelector('.dialog');
  // var containerMarker = document.querySelector('.tokyo__pin-map');
  var ENTER_CODE = 13;

  var blockCardVisible = function (indexMarker, evt) {
    window.card.insertContentTemplate(window.data.arrayRival, indexMarker);
    addClassActive(evt);
    containerRivalInfo.style.display = 'block';
  };

  // функция для навешивания событии(клики,нажатие клавиш)  маркерам
  var handleMarkerEvent = function (markerTag, indexCurrentRival) {
    markerTag.addEventListener('click', function (evt) {
      blockCardVisible(indexCurrentRival, evt);
    });

    markerTag.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ENTER_CODE) {
        blockCardVisible(indexCurrentRival, evt);
      }
    });
  };

  // функция для удаления активного класса
  var removeClassActive = function () {

    var pinActive = document.querySelector('.pin--active');
    if (pinActive) {
      pinActive.classList.remove('pin--active');
    }
  };


  // функция для добавления активного класса маркеру
  var addClassActive = function (currentMarker) {
    removeClassActive();
    currentMarker.currentTarget.classList.add('pin--active');
  };

  // функция для отрисовки маркера
  var renderMarker = function (element, index) {
    var newMarker = document.createElement('div');
    newMarker.classList.add('pin');
    newMarker.style = 'left: ' + element.location.x + 'px;' + ' top:' + element.location.y + 'px;';
    newMarker.innerHTML = '<img src=' + element.author.avatar + ' class=\'rounded\' width=\'40\' height=\'40\'>';
    newMarker.setAttribute('tabindex', 0);
    handleMarkerEvent(newMarker, index);
    return newMarker;
  };

  window.pin = {
    removeClassActive: removeClassActive,
    renderMarker: renderMarker,
    handleMarkerEvent: handleMarkerEvent
  };
})();

