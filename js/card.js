'use strict';

(function () {
  var containerRivalInfo = document.querySelector('.dialog');
  var ENTER_CODE = 13;
  var ESC_CODE = 27;
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

  var insertContentTemplate = function (element) {
    var containerTemplate = document.querySelector('#lodge-template').content;
    document.querySelector('.dialog__panel').remove();
    var avatar = containerRivalInfo.querySelector('img');
    var rivalTemplate = containerTemplate.cloneNode(true);
    var boonContainer = rivalTemplate.querySelector('.lodge__features');
    rivalTemplate.querySelector('.lodge__title').textContent = element.offer.title;
    rivalTemplate.querySelector('.lodge__address').textContent = element.location.x + ' ' + element.location.y;
    rivalTemplate.querySelector('.lodge__price').innerHTML = element.offer.price + ' &#x20bd;/ночь';
    rivalTemplate.querySelector('.lodge__type').textContent = createTypePlace(element.offer.type);
    rivalTemplate.querySelector('.lodge__rooms-and-guests').textContent = pasteGuestsRooms(element.offer.guests, element.offer.rooms);
    rivalTemplate.querySelector('.lodge__checkin-time').textContent = pasteCheckinCheckout(element.offer.checkin, element.offer.checkout);
    renderBoon(element.offer.features, boonContainer);
    rivalTemplate.querySelector('.lodge__description').textContent = element.offer.description;
    avatar.src = element.author.avatar;

    containerRivalInfo.appendChild(rivalTemplate);
  };

  var dialogClose = document.querySelector('.dialog__close');
  dialogClose.setAttribute('tabindex', 0);

  dialogClose.addEventListener('click', function () {
    containerRivalInfo.style.display = 'none';
    window.pin.removeClassActive();
  });

  dialogClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_CODE) {
      containerRivalInfo.style.display = 'none';
    }
  });

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC_CODE) {
      containerRivalInfo.style.display = 'none';
      window.pin.removeClassActive();
    }
  });

  window.card = {
    insertContentTemplate: insertContentTemplate
  };

})();

