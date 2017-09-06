'use strict';
// модуль показа карточки
(function () {
  var containerRivalInfo = document.querySelector('.dialog');

  window.showCard = function (indexMarker) {
    window.card.insertContentTemplate(window.data.arrayRival, indexMarker);
    containerRivalInfo.style.display = 'block';
  };
})();
