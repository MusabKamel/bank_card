const nameInputElement = document.getElementById("nameInput");
const numberInputElement = document.getElementById("numberInput");
const monthInputElement = document.getElementById("monthInput");
const yearInputElement = document.getElementById("yearInput");
const cvcInputElement = document.getElementById("cvcInput");
const nameErorElement = document.getElementById("nameEror");
const numberErorElement = document.getElementById("numberEror");
const yearErorElement = document.getElementById("yearEror");
const monthErorElement = document.getElementById("monthEror");  
const cvcErorElement = document.getElementById("cvcEroe");
const cardNumberElement = document.getElementById("cardNumber");
const cardNameElement = document.getElementById("caedName");
const cardMonthElement = document.getElementById("cardMonth");
const cardYearElement = document.getElementById("cardYear");
const cardCvcElement = document.getElementById("cardCvc");
const buttonElement = document.getElementById("button");

function addtext(value, place) {
  place.innerHTML = value;
}

nameInputElement.oninput = function (e) {
  addtext(nameInputElement.value, cardNameElement);
};
numberInputElement.oninput = function (e) {
  addtext(numberInputElement.value, cardNumberElement);
};
monthInputElement.oninput = function (e) {
  addtext(monthInputElement.value, cardMonthElement);
};
yearInputElement.oninput = function (e) {
  addtext(yearInputElement.value, cardYearElement);
};
cvcInputElement.oninput = function (e) {
  addtext(cvcInputElement.value, cardCvcElement);
};

function addEroe(placeEror, inputAror, eror) {
  placeEror.innerHTML = eror;
  placeEror.classList.add("eror");
  inputAror.classList.add("input-eror");
}

function removeEroe(eror, inputAror) {
  eror.innerHTML = "";
  eror.classList.remove("eror");
  inputAror.classList.remove("input-eror");
}

function isUserNameValid(username) {
  if (username.length <= 2) {
    return { valid: false, eror: "not valid name" };
  } else if (/^[a-zA-Z_\.]+$/.exec(username)) {
    return { valid: true };
  } else {
    return { valid: false, eror: "wreng format, leter only" };
  }
}

function isNumberValid(number) {
  if (number.length != 16) {
    return { valid: false, eror: "Length is not equal 16" };
  } else if (/^[0-9_\.]+$/.exec(number)) {
    return { valid: true };
  } else {
    return { valid: false, eror: "wreng format, numbers only" };
  }
}

function isEmpty(value) {
  return value.length == 0;
}

function isDateValid(date) {
  if (isEmpty(date)) {
    return { valid: false, eror: "can't be blank" };
  } else if (date.length > 2) {
    return { valid: false, eror: "Length is not allowed" };
  } else if (/^[0-9_\.]+$/.exec(date)) {
    return { valid: true };
  } else {
    return { valid: false, eror: "wreng format, numbers only" };
  }
}

function isCvcValid(cvc) {
  if (isEmpty(cvc)) {
    return { valid: false, eror: "can't be blank" };
  } else if (cvc.length > 3) {
    return { valid: false, eror: "Length is not allowed" };
  } else if (/^[0-9_\.]+$/.exec(cvc)) {
    return { valid: true };
  } else {
    return { valid: false, eror: "wreng format, numbers only" };
  }
}

buttonElement.onclick = function (e) {
  e.preventDefault();
  let cardUserNameValid = isUserNameValid(nameInputElement.value);
  let cardNumberValid = isNumberValid(numberInputElement.value);
  let cardYearValid = isDateValid(yearInputElement.value);
  let cardMonthValid = isDateValid(monthInputElement.value);
  let cardCvcValid = isCvcValid(cvcInputElement.value);

  if (cardUserNameValid.valid) {
    removeEroe(nameErorElement, nameInputElement);
  } else {
    addEroe(nameErorElement, nameInputElement, cardUserNameValid.eror);
  }
  if (cardNumberValid.valid) {
    removeEroe(numberErorElement, numberInputElement);
  } else {
    addEroe(numberErorElement, numberInputElement, cardNumberValid.eror);
  }
  if (cardYearValid.valid) {
    removeEroe(yearErorElement, yearInputElement);
  } else {
    addEroe(yearErorElement, yearInputElement, cardYearValid.eror);
  }
  if (cardMonthValid.valid) {
    removeEroe(monthErorElement, monthInputElement);
  } else {
    addEroe(monthErorElement, monthInputElement, cardMonthValid.eror);
  }

  if (cardCvcValid.valid) {
    removeEroe(cvcErorElement, cvcInputElement);
  } else {
    addEroe(cvcErorElement, cvcInputElement, cardCvcValid.eror);
  }
};
