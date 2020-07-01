"use strict";


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





const amounts = []
  amounts['a'] = 10
  amounts['b'] = 50
  amounts['c'] = 100



for (let key in amounts) {
  let amtId = `kt-amt-${key}`  
  let amtEl = document.getElementById(amtId)
  amtEl.setAttribute("data-amt", `${amounts[key]}`);
}






const myEls = document.querySelectorAll('.kt-amt');

for (var i = 0; i < myEls.length; i++){
  myEls[i].onclick = myFunc;
  // myEls[i].addEventListener("mouseenter", myScript);
  // myEls[i].addEventListener("mouseleave", myScript);
}



function myFunc() {

  const donateCardElements = document.querySelectorAll('.kt-amt');

  const classHighlighted = 'kt-amt-select';

  //Loop through all donation cards, one by one.
  for (var i = 0; i < donateCardElements.length; i++){
    // If this card is not already highlighted, AND if this card is not the card that has been clicked (or mouse entered/left), then ignore it and cycle to the next iteration in the loop.
    if (!donateCardElements[i].classList.contains(classHighlighted) && donateCardElements[i] !== this) {continue}

    // if (donateCardElements[i].classList.contains(classHighlighted)) {//If this particular donation card is already highlighted, do the following.
      // if(donateCardElements[i] !== this) {
        donateCardElements[i].classList.toggle(classHighlighted);
        // const test = document.querySelectorAll('.kt-don-row-but img')
        // const test = donateCardElements[i].querySelectorAll('.kt-don-row-but img')
        let test
        test = donateCardElements[i].querySelectorAll('.kt-don-row-but .donBut')
        for (let j = 0; j < test.length; j++){
          console.log(j)
          test[j].classList.toggle('testy');
        }
        test = donateCardElements[i].querySelectorAll('.kt-don-row-but img')
        for (let k = 0; k < test.length; k++){
          console.log(k)
          test[k].classList.toggle('testy');
        }
      // }
    // } else {//If this particular donation card is not already highlighted, do the following.
    //   // if (donateCardElements[i] === this) {
    //     this.classList.toggle(classHighlighted);
    //     const test = document.querySelectorAll('.kt-don-row-but img')
    //     for (let j = 0; j < test.length; j++){
    //       test[j].classList.toggle('testy');
    //     }
      // }
    // }
  }
 
  const myForm = document.getElementById("myForm");
  myForm.amount.value = this.dataset.amt;
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

  