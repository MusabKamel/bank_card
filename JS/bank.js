const nameInputElement = document.getElementById("nameInput");
const numberInputElement = document.getElementById("numberInput");
const monthInputElement = document.getElementById("monthInput");
const yearInputElement = document.getElementById("yearInput");
const cvcInputElement = document.getElementById("cvcInput");
const nameErrorElement = document.getElementById("nameError");
const numberErrorElement = document.getElementById("numberError");
const yearErrorElement = document.getElementById("yearError");
const monthErrorElement = document.getElementById("monthError");
const cvcErrorElement = document.getElementById("cvcError");
const cardNumberElement = document.getElementById("cardNumber");
const cardNameElement = document.getElementById("cardName");
const cardMonthElement = document.getElementById("cardMonth");
const cardYearElement = document.getElementById("cardYear");
const cardCvcElement = document.getElementById("cardCvc");
const buttonElement = document.getElementById("button");
const butSuccessElement = document.getElementById("butSuccess");
const formElement = document.getElementById("form");
const successElement = document.getElementById("success");

function addText(value, place) {
  place.innerHTML = value;
}

function spasNumber(number) {
  let x = number.slice(0, 4);
  let y = number.slice(4, 8);
  let z = number.slice(8, 12);
  let a = number.slice(12, 16);
  let result = x + " " + y + " " + z + " " + a;
  return result;
}

nameInputElement.oninput = function (e) {
  addText(nameInputElement.value, cardNameElement);
};
numberInputElement.oninput = function (e) {
  addText(spasNumber(numberInputElement.value), cardNumberElement);
};
monthInputElement.oninput = function (e) {
  addText(monthInputElement.value, cardMonthElement);
};
yearInputElement.oninput = function (e) {
  addText(yearInputElement.value, cardYearElement);
};
cvcInputElement.oninput = function (e) {
  addText(cvcInputElement.value, cardCvcElement);
};

function addError(placeError, inputError, error) {
  placeError.innerHTML = error;
  inputError.classList.add("input-Error");
}

function removeError(error, inputError) {
  error.innerHTML = "";
  inputError.classList.remove("input-Error");
}

function isCardNameValid(username) {
  if (username.length <= 2) {
    return { valid: false, error: "not valid name" };
  }
  if (/^[a-zA-Z_\.]+$/.exec(username)) {
    return { valid: true };
  } else {
    return { valid: false, error: "wrang format, later only" };
  }
}

function isNumber(number) {
  return /^[0-9_\.]+$/.exec(number);
}

function isCardNumberValid(number) {
  if (number.length != 16) {
    return { valid: false, error: "Length is not equal 16" };
  }
  if (isNumber(number)) {
    return { valid: true };
  } else {
    return { valid: false, error: "wrang format, numbers only" };
  }
}

function isEmpty(value) {
  return value.length == 0;
}

function isYearValid(year) {
  if (isEmpty(year)) {
    return { valid: false, error: "can't be blank" };
  }
  if (year.length > 2) {
    return { valid: false, error: "Length is not allowed" };
  }
  if (isNumber(year)) {
    return { valid: true };
  } else {
    return { valid: false, error: "wrang format, numbers only" };
  }
}

function isMonthValid(month) {
  if (isEmpty(month)) {
    return { valid: false, error: "can't be blank" };
  }
  if (month > 0 && month < 12) {
    return { valid: true };
  } else {
    return { valid: false, error: "wrang format, numbers only" };
  }
}

function isCvcValid(cvc) {
  if (isEmpty(cvc)) {
    return { valid: false, error: "can't be blank" };
  }
  if (cvc.length > 3) {
    return { valid: false, error: "Length is not allowed" };
  }
  if (isNumber(cvc)) {
    return { valid: true };
  } else {
    return { valid: false, error: "wrang format, numbers only" };
  }
}

function addResult(block, none) {
  block.classList.add("block");
  none.classList.add("none");
}

butSuccessElement.onclick = function (e) {
  formElement.classList.remove("none");
  successElement.classList.remove("block");
};

buttonElement.onclick = function (e) {
  e.preventDefault();
  let cardNameValid = isCardNameValid(nameInputElement.value);
  let cardNumberValid = isCardNumberValid(numberInputElement.value);
  let cardYearValid = isYearValid(yearInputElement.value);
  let cardMonthValid = isMonthValid(monthInputElement.value);
  let cardCvcValid = isCvcValid(cvcInputElement.value);

  if (cardNameValid.valid) {
    removeError(nameErrorElement, nameInputElement);
  } else {
    addError(nameErrorElement, nameInputElement, cardNameValid.error);
  }
  if (cardNumberValid.valid) {
    removeError(numberErrorElement, numberInputElement);
  } else {
    addError(numberErrorElement, numberInputElement, cardNumberValid.error);
  }
  if (cardYearValid.valid) {
    removeError(yearErrorElement, yearInputElement);
  } else {
    addError(yearErrorElement, yearInputElement, cardYearValid.error);
  }
  if (cardMonthValid.valid) {
    removeError(monthErrorElement, monthInputElement);
  } else {
    addError(monthErrorElement, monthInputElement, cardMonthValid.error);
  }
  if (cardCvcValid.valid) {
    removeError(cvcErrorElement, cvcInputElement);
  } else {
    addError(cvcErrorElement, cvcInputElement, cardCvcValid.error);
  }

  if (
    cardNameValid.valid &&
    cardNumberValid.valid &&
    cardYearValid.valid &&
    cardMonthValid.valid &&
    cardCvcValid.valid
  ) {
    addResult(successElement, formElement);
  }
};
