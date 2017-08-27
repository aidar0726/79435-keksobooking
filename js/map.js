'use strict';
var ESC_CODE = 27;
var ENTER_CODE = 13;

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
      'x': 400,
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
      'x': 300,
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
      'x': 400,
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
      'x': 300,
      'y': 200,
    }
  }
];

var containerMarker = document.querySelector('.tokyo__pin-map');
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


// функция для навешивания событии(клики,нажатие клавиш)  маркерам
var handleMarkerEvent = function (markerTag, indexCurrentRival) {
  markerTag.addEventListener('click', function () {
    insertContentTemplate(arrayRival, indexCurrentRival);
    addClassActive(markers, event);
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

renderMarker(arrayRival, containerMarker);

var markers = document.querySelectorAll('.pin');
var dialogClose = document.querySelector('.dialog__close');
dialogClose.setAttribute('tabindex', 0);

dialogClose.addEventListener('click', function () {
  containerRivalInfo.style.display = 'none';
  removeClassActive(markers);
});

dialogClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_CODE) {
    containerRivalInfo.style.display = 'none';
  }
});

document.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ESC_CODE) {
    containerRivalInfo.style.display = 'none';
    removeClassActive(markers);
  }
});


