'use strict';
// модуль показа карточки
(function () {
  var containerRivalInfo = document.querySelector('.dialog');

  window.showCard = function (element) {
    window.card.insertContentTemplate(element);
    containerRivalInfo.style.display = 'block';
  };
})();
