const modal = document.querySelector("#form-modal");
const modalBtn = document.querySelector("#new-post-button");
const span = document.querySelector(".close");

const priceInput = document.querySelector("#price-input");

const postDescriptions = document.querySelectorAll(".post-description")
const posts = document.querySelectorAll(".post")

function setTwoNumberDecimal(event) {
  this.value = parseFloat(parseFloat(this.value).toFixed(0));
}

function textCounter(field, field2, maxLimit) {
  const countField = document.querySelector(`#${field2}`);
  if (field.value.length > maxLimit) {
    field.value = field.value.substring(0, maxLimit);
    return false;
  } else {
    if (maxLimit - field.value.length <= 50)
      countField.innerHTML = maxLimit - field.value.length;
    else
      countField.innerHTML = '';
  }
}

priceInput.onchange = setTwoNumberDecimal;

modalBtn.addEventListener('click', () => {
  modal.style.display = "block";
});

span.addEventListener('click', () => {
  modal.style.display = "none";
});