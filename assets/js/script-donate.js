"use strict";
// console.log(555);


// window.addEventListener('load', function () {
  // alert("It's loaded!")
const myEls = document.querySelectorAll('.amt');

for (var i = 0; i < myEls.length; i++){
  console.log(i)
  console.log(myEls[i])

  myEls[i].onclick = myFunc;
}





// document.querySelectorAll('.amt').onclick = myFunc;

// })

function myFunc() {
    // console.log(555)
    // console.log(this)
    
  const theEls = document.querySelectorAll('.amt');

  const classSelect = 'kt-amt-select';  

  for (var i = 0; i < theEls.length; i++){
    if (theEls[i].classList.contains(classSelect)) {
      // theEls[i].classList.remove(classSelect);
      theEls[i].classList.toggle(classSelect);

      console.log('removed ' + i)
    } else {
      if (theEls[i] === this) {
        this.classList.toggle(classSelect);
        console.log('added ' + i);
      }
    }
  }


  
  // const myForm = document.getElementById("myForm");
  // myForm.amount.value = 10;
  // alert(myForm.amount.value)
}


// form = document.getElementById('myForm');



// document.getElementById("donBut").onclick = calculateOrder;






// document.getElementById("donBut").onclick = displayDate;


// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
// }

// function CalculateOrder(form) {
// function calculateOrder(myform) {
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
