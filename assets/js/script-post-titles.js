(function() {
"use strict";
    /*  This code applies to the all pages, ensure two things:
        1.  Widget titles (e.g.  footer/sidebar) have appropriate hyperlinks.
        2.  Post titles from guest contributors are formatted properly (with titles in italics).
    */

  	var temp_text;
    var i, i_max;
    // var len_2, mid_2, fin_2;

    // Define regular expression strings to search for when adding hyperlinks to titles. 
    var regex1 = /blog/i;
    var regex2 = /donate/i;
    var regex3 = /contact/i;
    // var regex4 = /, by /i;

    var widget_titles = document.querySelectorAll(".widget-title span");// Return all elements belonging to widget titles.
    // var blog_titles = document.querySelectorAll(".widget_recent_entries ul li a");// Return all elements belonging to post titles.
    // var upl_titles = document.querySelectorAll(".upl-post-title a");// Return all elements belonging to post titles that are also displayed via the Ultimate Post List plugin.

    var site_url = kt_script_vars.site_url;

    // Ensure widget titles have appropriate hyperlinks.
    i_max = widget_titles.length;
    for (i = 0; i <= i_max-1; i += 1){ //This loops through all widget title elements on the page..
        if (regex1.test(widget_titles[i].textContent)) { //This finds the titles containing the string 'blog.'
      temp_text = widget_titles[i].textContent;
      // widget_titles[i].innerHTML = "<a href='/dev/blog/'>" + temp_text + "</a>"; //This re-writes the HTML of those titles to include a hyperlink.
      // widget_titles[i].innerHTML = "<a href='" + kt_script_vars.site_url + "/blog/'>" + temp_text + "</a>"; //This re-writes the HTML of those titles to include a hyperlink.
        widget_titles[i].innerHTML = "<a href='" + site_url + "/blog/'>" + temp_text + "</a>"; //This re-writes the HTML of those titles to include a hyperlink.
      }
      if (regex2.test(widget_titles[i].textContent)) { //This finds the titles containing the string 'donate.'
      temp_text = widget_titles[i].innerHTML;
      // widget_titles[i].innerHTML = "<a href='http://kabultec.org/dev/donate/'>" + temp_text + "</a>"; //This re-writes the HTML of those titles to include a hyperlink.
      widget_titles[i].innerHTML = "<a href='" + site_url + "/donate/'>" + temp_text + "</a>"; //This re-writes the HTML of those titles to include a hyperlink.

      }
      if (regex3.test(widget_titles[i].textContent)) { //This finds the titles containing the string 'contact.'
      temp_text = widget_titles[i].innerHTML;
      // widget_titles[i].innerHTML = "<a href='http://kabultec.org/dev/contact/'>" + temp_text + "</a>"; //This re-writes the HTML of those titles to include a hyperlink.
      widget_titles[i].innerHTML = "<a href='" + site_url + "/contact/'>" + temp_text + "</a>"; //This re-writes the HTML of those titles to include a hyperlink.

      }
    }

    // Ensure post titles from guest contributors are formatted properly (with titles in italics).
  // i_max = blog_titles.length;
  //   for (i = 0; i <= i_max-1; i += 1){ //This loops through all post title elements on the page.
  //     if (regex4.test(blog_titles[i].textContent)) { //This finds the titles matching the appropriate sting (", by ").
  //     len_2 = blog_titles[i].innerHTML.length;// Determine the length of the innerHTML string.
  //     mid_2 = blog_titles[i].innerHTML.search(", by");// Determine where the actual title ends in the string, and where the author byline begins.
  //     fin_2 = "<span id='title-format'>" + blog_titles[i].innerHTML.slice(0,mid_2) + "</span>" + blog_titles[i].innerHTML.slice(mid_2,len_2);// Create the new innerHTML, inserting <span> around the text to be italicized.
  //     blog_titles[i].innerHTML = fin_2; // Re-write the innerHTML of the element in-question.
  //       }
  // }

  //   // Ensure blog titles from guest contributors are formatted properly (with titles in italics) when displayed by the plugin 'Ultimate Posts List.'
  // i_max = upl_titles.length;
  //   for (i = 0; i <= i_max-1; i += 1){
  //     if (regex4.test(upl_titles[i].textContent)) {//This finds the titles matching the appropriate sting (", by ").
  //     len_2 = upl_titles[i].innerHTML.length;// Determine the length of the innerHTML string.
  //     mid_2 = upl_titles[i].innerHTML.search(", by");// Determine where the actual title ends in the string, and where the author byline begins.
  //     fin_2 = "<span id='title-format'>" + upl_titles[i].innerHTML.slice(0,mid_2) + "</span>" + upl_titles[i].innerHTML.slice(mid_2,len_2);// Create the new innerHTML, inserting <span> around the text to be italicized.
  //     upl_titles[i].innerHTML = fin_2; // Re-write the innerHTML of the element in-question.
  //       }
  // }
})();
