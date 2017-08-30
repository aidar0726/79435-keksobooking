'use strict';

(function () {
  var containerRivalInfo = document.querySelector('.dialog');
  var createTypePlace = function (typePlace) {
    var result = '';
    switch (typePlace) {
      case 'house':
        result = 'Дом';
        break;
      case 'flat':
        result = 'Квартира';
        break;
      case 'bungalo':
        result = 'Бунгало';
        break;
    }

    return result;
  };

  var pasteGuestsRooms = function (guests, rooms) {
    return 'Для ' + guests + ' гостей в ' + rooms + ' комнатах';
  };

  var pasteCheckinCheckout = function (enter, exit) {
    return 'Заезд после ' + enter + ', выезд до ' + exit;
  };

  var renderBoon = function (arrayBoon, boonContent) {
    var fragmentBoon = document.createDocumentFragment();

    arrayBoon.forEach(function (element) {
      var spanBoon = document.createElement('span');
      spanBoon.classList.add('feature__image');
      spanBoon.classList.add('feature__image--' + element);
      fragmentBoon.appendChild(spanBoon);
    });

    boonContent.appendChild(fragmentBoon);
  };

  var insertContentTemplate = function (arrayСompetitor, сurrentRival) {
    var containerTemplate = document.querySelector('#lodge-template').content;
    document.querySelector('.dialog__panel').remove();
    var avatar = containerRivalInfo.querySelector('img');

    var element = arrayСompetitor[сurrentRival];
    var rivalTemplate = containerTemplate.cloneNode(true);
    var boonContainer = rivalTemplate.querySelector('.lodge__features');
    rivalTemplate.querySelector('.lodge__title').textContent = element.offer.title;
    rivalTemplate.querySelector('.lodge__address').textContent = element.location.x + ' ' + element.location.y;
    rivalTemplate.querySelector('.lodge__price').innerHTML = element.offer.price + ' &#x20bd;/ночь';
    rivalTemplate.querySelector('.lodge__type').textContent = createTypePlace(element.offer.type);
    rivalTemplate.querySelector('.lodge__rooms-and-guests').textContent = pasteGuestsRooms(element.offer.guests, element.offer.rooms);
    rivalTemplate.querySelector('.lodge__checkin-time').textContent = pasteCheckinCheckout(element.offer.checkin, element.offer.checkout);
    renderBoon(element.offer.features, boonContainer);
    rivalTemplate.querySelector('.lodge__description').textContent = element.offer.price.description;
    avatar.src = element.author.avatar;

    containerRivalInfo.appendChild(rivalTemplate);
  };

  window.card = {
    insertContentTemplate: insertContentTemplate
  };

})();

