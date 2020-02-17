function CalculateOrder(form) {
"use strict";
	var radG1;

	for (var i = 0; i < document.myform.os0.length; i++){
	 if(document.myform.os0[i].checked==true){radG1=document.myform.os0[i].value;}
	}

	console.log(radG1);

	if(radG1 == "10")
	 {
	 document.myform.amount.value = '10';
	 document.myform.item_number.value = "WF-10-00";
	 }
	else if(radG1 == "500")
	 {
	 document.myform.amount.value = '500.00';
	 document.myform.item_number.value = "WF-500-00";
	 }
	 else if(radG1 == "100")
	 {
	 document.myform.amount.value = '100.00';
	 document.myform.item_number.value = "WF-100-00";
	 }
	 else if(radG1 == "50")
	 {
	 document.myform.amount.value = '50.00';
	 document.myform.item_number.value = "WF-50-00";
	 }
	 else if(radG1 == "25")
	 {
	 document.myform.amount.value = '25.00';
	 document.myform.item_number.value = "WF-25-00";
	 }
	else if(radG1 == "Other")
	 {
	 document.myform.amount.value = '0.00';
	 document.myform.item_number.value = "WF-0-00";
	 }
}
