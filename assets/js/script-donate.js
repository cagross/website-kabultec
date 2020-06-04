// console.log(555);


// form = document.getElementById('myForm');
// document.getElementById("myBtn").onclick = displayDate;
document.getElementById("donBut").onclick = calculateOrder;
// document.getElementById("myBtn").onclick = calculateOrder;

// document.getElementById("donBut").onclick = displayDate;


// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
// }

// function CalculateOrder(form) {
// function calculateOrder(myform) {
function calculateOrder() {

  "use strict";
	var radG1;

  const myForm = document.getElementById("myForm");

	// i = 0; i < document.myform.os0.length; i++){
	//  nt.myform.os0[i].checked==true){radG1=document.myform.os0[i].value;}
  // }
  // const els = myform.getElementsByClassName('raddy')
  const els = document.getElementsByClassName('raddy')
  for (var i = 0; i < els.length; i++){
    if(els[i].checked==true){
      myForm.amount.value = els[i].value;
      return;
    }
  }

  const elsy = document.getElementsByClassName('kt-cust-amt')
  for (var i = 0; i < els.length; i++){
    if(elsy[i].value){
      myForm.amount.value = elsy[i].value;
      return;
    }
  }

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
