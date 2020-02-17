window.onload = function () {
	(function() {
		"use strict";

		const slideOneDesc = document.getElementsByClassName('entry-content')[0].getElementsByTagName('p')[0];
		const slideOneTitle = document.getElementsByClassName('entry-title')[0].getElementsByTagName('a')[0].getElementsByTagName('span')[0];

		slideOneDesc.innerHTML = "Friend<br />Kabultec Board of Directors";
		slideOneTitle.innerHTML = "Eleanor De Paola<br />1935 - 2019";
	})();
}