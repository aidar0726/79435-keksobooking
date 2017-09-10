'use strict';

(function () {
  /* ----код для обработки правильности введенных значений формы----- */
  var MAX_VALUE_ROOM = 100;
  var MIN_VALUE_GUEST = 0;
  var MINLENGTH_SYMBOL_TITLE = 30;
  var MAXLENGTH_SYMBOL_TITLE = 100;
  var notice = document.querySelector('.notice');
  var titleField = notice.querySelector('#title');
  var addressField = notice.querySelector('#address');
  var typeHouseField = notice.querySelector('#type');
  var priceField = notice.querySelector('#price');
  var amountRoomField = notice.querySelector('#room_number');
  var capacityField = notice.querySelector('#capacity');
  var timeInField = notice.querySelector('#timein');
  var timeOutField = notice.querySelector('#timeout');
  var form = notice.querySelector('.notice__form');

  var dataTimeInOut = [
    '12:00',
    '13:00',
    '14:00'
  ];

  var dataLodging = [
    'flat',
    'house',
    'bungalo',
    'palace'
  ];

  var dataMinPrice = [
    '1000',
    '5000',
    '0',
    '10000'
  ];

  var dataRoomsQuantity = [
    '100',
    '1',
    '2',
    '3'
  ];

  var dataCapacity = [
    '0',
    '1',
    '2',
    '3',
  ];


  // установка атрибутов необходимых аттрибутов для валидации.
  titleField.setAttribute('required', true);
  titleField.setAttribute('minlength', MINLENGTH_SYMBOL_TITLE);
  titleField.setAttribute('maxlength', MAXLENGTH_SYMBOL_TITLE);
  addressField.setAttribute('required', true);
  priceField.setAttribute('required', true);

  // функция коллбэк для установки значения в изменяемое поле
  var syncValues = function (element, value) {
    element.value = value;
  };

  var relateTypePrice = function () {
    window.synchronizeFields(typeHouseField, priceField, dataLodging, dataMinPrice, syncValues);
  };
  typeHouseField.addEventListener('change', relateTypePrice);

  var relateTimeinTimeout = function () {
    window.synchronizeFields(timeInField, timeOutField, dataTimeInOut, dataTimeInOut, syncValues);
  };

  var relateTimeoutTimein = function () {
    window.synchronizeFields(timeOutField, timeInField, dataTimeInOut, dataTimeInOut, syncValues);
  };

  timeInField.addEventListener('change', relateTimeinTimeout);

  timeOutField.addEventListener('change', relateTimeoutTimein);

  // функция коллбэк для соответствия значении типа квартиры и минимальной цены
  var syncValueWithMin = function (selectOut, valueSelect) {
    if ((valueSelect === MAX_VALUE_ROOM) || (valueSelect === MIN_VALUE_GUEST)) {
      selectOut.value = valueSelect;
    } else {
      selectOut.value = valueSelect;
    }
  };

  var relateRoomCapacity = function () {
    window.synchronizeFields(amountRoomField, capacityField, dataRoomsQuantity, dataCapacity, syncValueWithMin);
  };

  var relateCapacity = function () {
    window.synchronizeFields(capacityField, amountRoomField, dataCapacity, dataRoomsQuantity, syncValueWithMin);
  };

  relateRoomCapacity();

  amountRoomField.addEventListener('change', relateRoomCapacity);
  capacityField.addEventListener('change', relateCapacity);

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function () {
      form.reset();
    }, window.errorHandler);
    evt.preventDefault();
  });
})();

