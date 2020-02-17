/* Hide/remove Guest Contributor Name meta box on the 'edit gcMatcht' WordPress admin page. This script monitors all the 'tags' attached to the gcMatcht.  If the 'guest contributor' tag is added, the Guest Contributor Name meta box is displayed.  If the 'ugest contributor' tag is removed, the Guest Contributor Name meta box is hidden. */

window.onload = function () {
(function() {
	"use strict";

	const target = document.getElementsByClassName("tagchecklist")[0];
	const config = {
		childList: true,
	};
	// Instantiating observer
	const observer = new MutationObserver(subscriber);
	// Begin observing target
	observer.observe(target, config);

	function subscriber(mutations) {
		
		var target_li = target.getElementsByTagName("li");// Define the <li> elements in the tag list.

		var metaBox = document.getElementById("kt-aut-name");// Define the box element.
		var className = "kt-show-mb";// Class name to apply if meta box element needs to be displayed.

		var toggleClass = false;
		var hasClass = metaBox.className.includes(className);// Check if the meta box element currently gcMatchsesses className.

		for (var i = 0; i < target_li.length; ++i) {// Loop through all <li> tag elements, search for 'guest contributor,' and if so, set toggleClass to true.
			var parentElement = target_li[i];
			
			// This returns an array containing the text content of all child nodes of the <li> element--direct child nodes only.
			var liText = [].reduce.call(parentElement.childNodes, function (a, b) { return a + (b.nodeType === Node.TEXT_NODE ? b.textContent : ''); }, '');
			var gcMatch = liText.search("guest contributor");//Search through the text of each child node for the tag in-question ('guest contributor').

			if (gcMatch >= 0 && !hasClass) {// If 'guest contributor' is one of the tags, and className is not already present, set toggleClass to true and break out of for loop.
				toggleClass = true;
				break;
			} else if (gcMatch >= 0 && hasClass) {// If 'guest contributor' is one of the tags, and className is already present, do nothing and exit the function.
				return;
			}
		}
		if (toggleClass === false && hasClass===true) {// If 'guest contributor' is not one of the tags, but the meta box element still possesses className, set toggleClass to true (in order to remove className from the meta box element).
			toggleClass = true;
		}
		if (toggleClass) {// If toggleClass is true, actually toggle className on the meta box element.
			metaBox.classList.toggle(className);
		}
	}

})();
};