"use strict";

/* Set the value of the data-amt attribute on each donation card.  Used by <form> to insert the donation amount upon submission. */
const amounts = []
  amounts['a'] = 10
  amounts['b'] = 50
  amounts['c'] = 100

for (let key in amounts) {
  let amtId = `kt-amt-${key}`  
  let amtEl = document.getElementById(amtId)
  amtEl.setAttribute("data-amt", `${amounts[key]}`);
}




function myScript() {
  this.classList.toggle('kt-amt-select');
}

function myScriptEnter() {
  this.classList.toggle('kt-amt-select');
  document.getElementsByClassName('donBut')[0].src = '/wp-content/uploads/2020/06/Donate-Button-outline-white.png'
}

function myScriptLeave() {
  this.classList.toggle('kt-amt-select');
  document.getElementsByClassName('donBut')[0].src = '/wp-content/uploads/2020/06/Donate-Button-outline-black.png'
}


const myEls = document.querySelectorAll('.kt-amt');

for (var i = 0; i < myEls.length; i++){
  // myEls[i].onclick = myFunc;
  // myEls[i].addEventListener("mouseenter", myScript);
  // myEls[i].addEventListener("mouseleave", myScript);
  myEls[i].addEventListener("mouseenter", myFunc);
  myEls[i].addEventListener("mouseleave", myFunc);
}



// function myFunc(evt) {
function myFunc() {


  // const donateCardElements = document.querySelectorAll('.kt-amt');
  const classHighlighted = 'kt-amt-select';


  // if (evt.type !== 'click' && this.classList.contains('kt-clicked')) {
  //   return;
  // }

  // if (evt.type === 'click') {
  //   if (classList.contains(classHighlighted)) {
  //     this.classList.toggle('kt-clicked');  
  //   }
  //   this.classList.toggle('kt-clicked');
  //   return;
  // }

  //Loop through all donation cards, one by one.
  // for (var i = 0; i < donateCardElements.length; i++){
    // If this card is not already highlighted, AND if this card is not the card that has been clicked (or mouse entered/left), then ignore it and cycle to the next iteration in the loop.
    // if (!donateCardElements[i].classList.contains(classHighlighted) && donateCardElements[i] !== this) {continue}
    // // If this card is the card that was clicked, OR it was already highlighted, toggle the highlighted class on it, and ensure the correct button is displayed on it.
    // donateCardElements[i].classList.toggle(classHighlighted);
    // const buttons = donateCardElements[i].querySelectorAll('.kt-don-row-but .donBut')
    // for (let j = 0; j < buttons.length; j++){
    //   buttons[j].classList.toggle('kt-hidden');
    // }
    // if (!donateCardElements[i].classList.contains(classHighlighted) && donateCardElements[i] !== this) {continue}
    // If this card is the card that was clicked, OR it was already highlighted, toggle the highlighted class on it, and ensure the correct button is displayed on it.
    this.classList.toggle(classHighlighted);
    const buttons = this.querySelectorAll('.kt-don-row-but .donBut')
    for (let j = 0; j < buttons.length; j++){
      buttons[j].classList.toggle('kt-hidden');
    }
  // }
 
  let donAmt = 555;

  //Set the forms amount value to the value of the clicked card's data-amt attribute.
  const myForm = document.getElementById("myForm");
  // myForm.amount.value = this.dataset.amt;
  // const customAmt = document.querySelector('.kt-don-cust-el input');
  // if (this === customAmt) {

  if (this.querySelector('.kt-don-cust-el input')) {// If the hovered card has an <input> element, set donAmt to the value of that element.
    donAmt = document.querySelector('.kt-don-cust-el input').value
    console.log('equal')
  } else {
    donAmt = this.dataset.amt
  }


  myForm.amount.value = donAmt;


}

function calculateOrder() {

  // const myForm = document.getElementById("myForm");

  // const els = document.getElementsByClassName('raddy')
  // for (var i = 0; i < els.length; i++){
  //   if(els[i].checked==true){
  //     myForm.amount.value = els[i].value;
  //     return;
  //   }
  // }

  // const elsy = document.getElementsByClassName('kt-cust-amt')
  // for (var i = 0; i < els.length; i++){
  //   if(elsy[i].value){
  //     myForm.amount.value = elsy[i].value;
  //     return;
  //   }
  // }








	// var radG1;
	// console.log(radG1);

	// if(radG1 == "10")
	//  {
  //  myform.amount.value = '10';
  // myform.amount.value = '10';
  
	//  myform.item_number.value = "WF-10-00";
	//  }
	// else if(radG1 == "500")
	//  {
	//  myform.amount.value = '500.00';
	//  myform.item_number.value = "WF-500-00";
	//  }
	//  else if(radG1 == "100")
	//  {
	//  myform.amount.value = '100.00';
	//  myform.item_number.value = "WF-100-00";
	//  }
	//  else if(radG1 == "50")
	//  {
	//  myform.amount.value = '50.00';
	//  myform.item_number.value = "WF-50-00";
	//  }
	//  else if(radG1 == "25")
	//  {
	//  myform.amount.value = '25.00';
	//  myform.item_number.value = "WF-25-00";
	//  }
	// else if(radG1 == "Other")
	//  {
	//  myform.amount.value = '0.00';
	//  myform.item_number.value = "WF-0-00";
	//  }


  }

  