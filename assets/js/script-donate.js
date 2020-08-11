"use strict";

/* Set the value of the data-amt attribute on each donation card.  Used by <form> to insert the donation amount upon submission. */
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
// function myFunction() {
//   myForm.amount.value =
//     this.parentElement.parentElement.parentElement.parentElement.parentElement
//       .dataset.amt ||
//     this.parentElement.parentElement.querySelector("input").value;
//   myForm.submit();
// }

const nameInput = document.querySelector(".kt-don-cust-el input");

// const form = document.querySelector('form');

//Add onclick to button which submits the form.
// const buttons = document.querySelectorAll("button");
// for (i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", checkValid);
// }

//Add constraint validation API code to validate <input> field on form submission.
nameInput.addEventListener("input", () => {
  nameInput.setCustomValidity("");
  nameInput.checkValidity();
});

nameInput.addEventListener("invalid", () => {
  if (nameInput.value === "") {
    nameInput.setCustomValidity("This field cannot be blank.");
  } else {
    // nameInput.setCustomValidity(
    //   "Usernames can only contain upper and lowercase letters. Try again!"
    // );
  }
});
function myFunction() {
  const buttCustom = document.querySelector("#kt-amt-cust button");

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

// const nameInput = document.querySelector("input");
