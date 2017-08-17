'use strict';

// массив конкурентов
var arrayRival = [
  {
    'author': {
      'avatar': 'img/avatars/user01.png'
    },

    'offer': {
      'title': 'Большая уютная квартира',
      'address': 'location.x, location.y',
      'price': 1000,
      'type': 'flat',
      'rooms': 1,
      'guests': 4,
      'checkin': '14:00',
      'checkout': '15:00',
      'features': ['wifi', 'parking'],
      'description': '',
      'photos': ''
    },

    'location': {
      'x': 300,
      'y': 400,
    }
  },

  {
    'author': {
      'avatar': 'img/avatars/user02.png'
    },

    'offer': {
      'title': 'Большая уютная квартира',
      'address': 'location.x, location.y',
      'price': 2000,
      'type': 'bungalo',
      'rooms': 3,
      'guests': 2,
      'checkin': '14:00',
      'checkout': '15:00',
      'features': ['wifi', 'parking'],
      'description': '',
      'photos': ''
    },

    'location': {
      'x': 600,
      'y': 300,
    }
  },

  {
    'author': {
      'avatar': 'img/avatars/user03.png'
    },

    'offer': {
      'title': 'Большая уютная квартира',
      'address': 'location.x, location.y',
      'price': 1000,
      'type': 'house',
      'rooms': 1,
      'guests': 4,
      'checkin': '14:00',
      'checkout': '15:00',
      'features': ['wifi', 'parking'],
      'description': '',
      'photos': ''
    },

    'location': {
      'x': 300,
      'y': 400,
    }
  },

  {
    'author': {
      'avatar': 'img/avatars/user04.png'
    },

    'offer': {
      'title': 'Большая уютная квартира',
      'address': 'location.x, location.y',
      'price': 1000,
      'type': 'bungalo',
      'rooms': 1,
      'guests': 4,
      'checkin': '14:00',
      'checkout': '15:00',
      'features': ['wifi', 'parking'],
      'description': '',
      'photos': ''
    },

    'location': {
      'x': 200,
      'y': 500,
    }
  },

  {
    'author': {
      'avatar': 'img/avatars/user05.png'
    },

    'offer': {
      'title': 'Большая уютная квартира',
      'address': 'location.x, location.y',
      'price': 3000,
      'type': 'bungalo',
      'rooms': 1,
      'guests': 4,
      'checkin': '14:00',
      'checkout': '15:00',
      'features': ['wifi', 'parking'],
      'description': '',
      'photos': ''
    },

    'location': {
      'x': 400,
      'y': 400,
    }
  },

  {
    'author': {
      'avatar': 'img/avatars/user06.png'
    },

    'offer': {
      'title': 'Большая уютная квартира',
      'address': 'location.x, location.y',
      'price': 8000,
      'type': 'house',
      'rooms': 1,
      'guests': 4,
      'checkin': '14:00',
      'checkout': '15:00',
      'features': ['wifi', 'parking'],
      'description': '',
      'photos': ''
    },

    'location': {
      'x': 500,
      'y': 500,
    }
  },

  {
    'author': {
      'avatar': 'img/avatars/user07.png'
    },

    'offer': {
      'title': 'Большая уютная квартира',
      'address': 'location.x, location.y',
      'price': 10000,
      'type': 'flat',
      'rooms': 1,
      'guests': 4,
      'checkin': '14:00',
      'checkout': '15:00',
      'features': ['wifi', 'parking'],
      'description': '',
      'photos': ''
    },

    'location': {
      'x': 100,
      'y': 100,
    }
  },

  {
    'author': {
      'avatar': 'img/avatars/user08.png'
    },

    'offer': {
      'title': 'Большая уютная квартира',
      'address': 'location.x, location.y',
      'price': 4000,
      'type': 'house',
      'rooms': 1,
      'guests': 4,
      'checkin': '14:00',
      'checkout': '15:00',
      'features': ['wifi', 'parking'],
      'description': '',
      'photos': ''
    },

    'location': {
      'x': 200,
      'y': 200,
    }
  }
];

var containerMarker = document.querySelector('.tokyo__pin-map');
// функция для отрисовки маркеров
var renderMarker = function (arrayUsers, contentMarker) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < arrayUsers.length; i++) {
    var newMarker = document.createElement('div');
    newMarker.classList.add('pin');
    newMarker.style = 'left: ' + arrayUsers[i].location.x + 'px;' + ' top:' + arrayUsers[i].location.y + 'px;';
    newMarker.innerHTML = '<img src=' + arrayUsers[i].author.avatar + ' class=\'rounded\' width=\'40\' height=\'40\'>';

    fragment.appendChild(newMarker);
  }

  contentMarker.appendChild(fragment);
};

renderMarker(arrayRival, containerMarker);

// функция для отрисовки содержимого в шаблон конкурентов

var insertContentTemplate = function (arrayСompetitor, contentTag) {
  var containerTemplate = document.querySelector('#lodge-template').content;
  var containerRivalInfo = document.querySelector(contentTag);

  var createTypePlace = function (typePlace) {
    var result = '';
    switch (typePlace) {
      case 'house': result = 'Дом'; break;
      case 'flat': result = 'Квартира'; break;
      case 'bungalo': result = 'Бунгало'; break;
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

    for (var i = 0; i < arrayBoon.length; i++) {
      var spanBoon = document.createElement('span');
      spanBoon.classList.add('feature__image');
      spanBoon.classList.add('feature__image--' + arrayBoon[i]);
      fragmentBoon.appendChild(spanBoon);
    }

    boonContent.appendChild(fragmentBoon);
  };


  for (var i = 0; i < arrayСompetitor.length; i++) {
    var rivalTemplate = containerTemplate.cloneNode(true);
    var boonContainer = rivalTemplate.querySelector('.lodge__features');
    rivalTemplate.querySelector('.lodge__title').textContent = arrayСompetitor[i].offer.title;
    rivalTemplate.querySelector('.lodge__address').textContent = arrayСompetitor[i].location.x + ' ' + arrayСompetitor[i].location.y;
    rivalTemplate.querySelector('.lodge__price').innerHTML = arrayСompetitor[i].offer.price + ' &#x20bd;/ночь';
    rivalTemplate.querySelector('.lodge__type').textContent = createTypePlace(arrayСompetitor[i].offer.type);
    rivalTemplate.querySelector('.lodge__rooms-and-guests').textContent = pasteGuestsRooms(arrayСompetitor[i].offer.guests, arrayСompetitor[i].offer.rooms);
    rivalTemplate.querySelector('.lodge__checkin-time').textContent = pasteCheckinCheckout(arrayСompetitor[i].offer.checkin, arrayСompetitor[i].offer.checkout);
    renderBoon(arrayСompetitor[i].offer.features, boonContainer);
    rivalTemplate.querySelector('.lodge__description').textContent = arrayСompetitor[i].offer.price.description;

    containerRivalInfo.appendChild(rivalTemplate);
  }
};

insertContentTemplate(arrayRival, '.dialog__panel');
