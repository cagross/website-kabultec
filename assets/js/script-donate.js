"use strict";

/* Set the value of the data-amt attribute on each donation card.*/
const amounts = [];
amounts["a"] = 10;
amounts["b"] = 50;
amounts["c"] = 100;
for (let key in amounts) {
  let amtId = `kt-amt-${key}`;
  let amtEl = document.getElementById(amtId);
  amtEl.setAttribute("data-amt", `${amounts[key]}`);
}

// Assign onclick function to each button on page.  Onclick function assigns the correct donation amount to the form, then submits the form.
const myForm = document.getElementById("myForm");
const buttons = document.querySelectorAll(".kt-don-row-but button");
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", myFunction);
}

const nameInput = document.querySelector(".kt-don-cust-el input");

//Add constraint validation API code to validate <input> field on form submission.
nameInput.addEventListener("invalid", (e) => {
  const el = e.target;
  console.log(el);
  console.log(el.validity);
  if (el.validity.valueMissing) {
    el.setCustomValidity("This field cannot be blank.");
  }
  if (el.validity.rangeUnderflow) {
    el.setCustomValidity("Please enter a value greater than or equal to $1.00.");
  }
});
function myFunction() {
  const buttCustom = document.querySelector("#kt-amt-cust button");
  if (this === buttCustom) nameInput.setCustomValidity("");
  if (this !== buttCustom || (this === buttCustom && nameInput.checkValidity())) {
    myForm.amount.value =
      this.parentElement.parentElement.parentElement.parentElement.parentElement
        .dataset.amt ||
      this.parentElement.parentElement.querySelector("input").value;
    myForm.submit();
  } else {
    myForm.reportValidity();
  }
}

/* Begin code governing on-hover effect of donation cards. */
function myScript() {
  this.classList.toggle("kt-amt-select");
}

function myScriptEnter() {
  this.classList.toggle("kt-amt-select");
  document.getElementsByClassName("donBut")[0].src =
    "/wp-content/uploads/2020/06/Donate-Button-outline-white.png";
}

function myScriptLeave() {
  this.classList.toggle("kt-amt-select");
  document.getElementsByClassName("donBut")[0].src =
    "/wp-content/uploads/2020/06/Donate-Button-outline-black.png";
}

const myEls = document.querySelectorAll(".kt-amt");

for (var i = 0; i < myEls.length; i++) {
  myEls[i].addEventListener("mouseenter", myFunc);
  myEls[i].addEventListener("mouseleave", myFunc);
}

function myFunc() {
  const classHighlighted = "kt-amt-select";
  this.classList.toggle(classHighlighted);
  const buttonsCard = this.querySelectorAll(".kt-don-row-but .kt-don-but-img");

  for (let j = 0; j < buttonsCard.length; j++) {
    buttonsCard[j].classList.toggle("kt-hidden");
  }
}
/* End code governing on-hover effect of donation cards. */
