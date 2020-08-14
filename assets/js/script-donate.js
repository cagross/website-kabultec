"use strict";
{
  const amounts = [];
  amounts["a"] = 10;
  amounts["b"] = 50;
  amounts["c"] = 100;

  const donForm = document.getElementById("myForm");
  const buttons = document.querySelectorAll(".kt-don-row-but button");

  const nameInput = document.querySelector(".kt-don-cust-el input");
  const donCards = document.querySelectorAll(".kt-amt");

  // Set the value of the data-amt attribute on each donation card.
  for (let key in amounts) {
    const amtId = `kt-amt-${key}`;// Note that in the HTML markup, the ID on each donation card must start with `kt-amt-` and end with the donation amount of that specific card (e.g. 10, 50, etc).
    const amtEl = document.getElementById(amtId);
    amtEl.setAttribute("data-amt", `${amounts[key]}`);
  }

  // Set validation error messages, and under what conditions they should be displayed.
  nameInput.addEventListener("invalid", (e) => {
    const el = e.target;
    if (el.validity.valueMissing) {
      el.setCustomValidity("This field cannot be blank.");
    }
    if (el.validity.rangeUnderflow) {
      el.setCustomValidity("Please enter a value greater than or equal to $1.00.");
    }
  });

  // Assign onclick function to each button on page.  Onclick function assigns the correct donation amount to the form, then submits the form.
  for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", valAndSubmit);
  }

  function valAndSubmit() {
    const buttCustom = document.querySelector("#kt-amt-cust button");
    const amountEl = this.closest(".kt-amt");

    if (this === buttCustom) {
      nameInput.setCustomValidity("");
      if (nameInput.checkValidity()) {
        donForm.amount.value = amountEl.querySelector("input").value;
      } else {
        donForm.reportValidity();
        return;
      }
    } else {
      donForm.amount.value = amountEl.dataset.amt
    }
    return donForm.submit();
  }

  /* Begin code governing on-hover effect of donation cards. */
  for (var i = 0; i < donCards.length; i++) {
    donCards[i].addEventListener("mouseenter", toggleHover);
    donCards[i].addEventListener("mouseleave", toggleHover);
  }

  function toggleHover() {
    const classHighlighted = "kt-amt-select";
    this.classList.toggle(classHighlighted);
    const buttonsImg = this.querySelectorAll(".kt-don-row-but .kt-don-but-img");

    for (let j = 0; j < buttonsImg.length; j++) {
      buttonsImg[j].classList.toggle("kt-hidden");
    }
  }
  /* End code governing on-hover effect of donation cards. */
}


  // function myScript() {
  //   this.classList.toggle("kt-amt-select");
  // }

  // function myScriptEnter() {
  //   this.classList.toggle("kt-amt-select");
  //   document.getElementsByClassName("donBut")[0].src =
  //     "/wp-content/uploads/2020/06/Donate-Button-outline-white.png";
  // }

  // function myScriptLeave() {
  //   this.classList.toggle("kt-amt-select");
  //   document.getElementsByClassName("donBut")[0].src =
  //     "/wp-content/uploads/2020/06/Donate-Button-outline-black.png";
  // }
