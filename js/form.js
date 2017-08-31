'use strict';

(function () {
  /* ----код для обработки правильности введенных значений формы----- */
  var BUNGALO_MIN_PRICE = 0;
  var FLAT_MIN_PRICE = 1000;
  var HOUSE_MIN_PRICE = 5000;
  var PALASE_MIN_PRICE = 10000;
  var MAX_VALUE_ROOM = '100';
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

  // установка атрибутов необходимых аттрибутов для валидации.
  titleField.setAttribute('required', true);
  titleField.setAttribute('minlength', MINLENGTH_SYMBOL_TITLE);
  titleField.setAttribute('maxlength', MAXLENGTH_SYMBOL_TITLE);
  addressField.setAttribute('required', true);
  priceField.setAttribute('required', true);

  // функция для соответствия значении типа квартиры и минимальной цены
  var relateTypePrice = function () {
    var indexValueTypeHouse = typeHouseField.options.selectedIndex;
    var valueTypeHouse = typeHouseField.options[indexValueTypeHouse].value;

    switch (valueTypeHouse) {
      case 'bungalo': priceField.value = BUNGALO_MIN_PRICE;
        break;

      case 'flat': priceField.value = FLAT_MIN_PRICE;
        break;

      case 'house': priceField.value = HOUSE_MIN_PRICE;
        break;

      case 'palace': priceField.value = PALASE_MIN_PRICE;
        break;
    }
  };

  relateTypePrice();

  typeHouseField.addEventListener('change', relateTypePrice);

  // функция для перебора option у select и установки соответсвующего option
  var checkValueField = function (selectIn, selectOut) {
    var indexValueSelect = selectIn.options.selectedIndex;
    var valueSelect = selectIn.options[indexValueSelect].value;

    if (valueSelect === MAX_VALUE_ROOM) {
      selectOut.value = MIN_VALUE_GUEST;
    } else {
      selectOut.value = valueSelect;
    }
  };

  // функция для соответствия значении полей везда и выезда

  var relateTimeinTimeout = function () {
    checkValueField(timeInField, timeOutField);
  };

  var relateTimeoutTimein = function () {
    checkValueField(timeOutField, timeInField);
  };

  relateTimeinTimeout();

  timeInField.addEventListener('change', relateTimeinTimeout);

  timeOutField.addEventListener('change', relateTimeoutTimein);

  // функция для соответствия значении типа жилья и минимальной цены
  var relateRoomCapacity = function () {
    checkValueField(amountRoomField, capacityField);
  };

  relateRoomCapacity();

  amountRoomField.addEventListener('change', relateRoomCapacity);
})();

