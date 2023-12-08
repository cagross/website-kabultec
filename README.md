# Kabultec Website Project

## Overview

This repository contains the code for the Kabultec organization's WordPress website customization: [kabultec.org](https://kabultec.org). The site is built upon WordPress, and this repository captures the customizations made to enhance its functionality and appearance.

Kabultec is a non-profit organization dedicated to promoting women's rights and education in Afghanistan.

## Project Objectives

- **Showcase Initiatives:** Highlight the organization's impactful initiatives, focusing on promoting women's rights and education in Afghanistan.

- **Raise Awareness:** Provide valuable information to the public, fostering awareness about the critical issues addressed by Kabultec.

- **Facilitate Donations:** Improve the donation process by enhancing the professionalism and user-friendliness of the website, addressing previous concerns that may have deterred potential donors.

- **Inform Stakeholders:** Keep stakeholders well-informed about ongoing Kabultec programs, upcoming events, and recaps of past activities, including fundraising events.

## Customization Highlights

Below is a curated list of key customizations applied to Kabultec's WordPress website, enhancing its functionality, appearance, and user experience.

- **Design Enhancements**: This section highlights design improvements made to Kabultec's WordPress website, enhancing its visual appeal and professionalism.

  - Logo Redesign: Implemented a redesigned logo, enhancing the organization's visual identity and conveying a more professional image across the site.

  - Theme Redesign: Collaborated with web designer to revamp the main portions of the theme, including the header, footer, and main menu, providing a more visually appealing and user-friendly experience.

  - Donate Page Redesign: Worked with DESIGNER-B to re-envision and redesign the donate page, making it more professional, visually engaging, and streamlining the donation process for a better user experience.

- **Donation Page Integration with PayPal**

  - I have enhanced the [Donations](https://kabultec.org/donate/) page to seamlessly integrate with PayPal's API, allowing users to make secure and convenient donations to support Kabultec's mission via PayPal.

- **Customizing Footer Copyright**

  - Overrides the default theme footer copyright text with a custom format including the current year and a link to the "Kabultec" website.

- **Exclude Categories from Blog Page**

  - Ensures that posts in specific categories (Events and Newsletter) do not appear on the blog page.

- **Google Analytics Script**

  - Inserts Google Analytics script for tracking page views and user interactions.

- **Adding Post Date at the Top**

  - Displays the post date at the top of each post on the single post view.

- **Modify Featured Image Size**

  - Changes the size of featured images on the blog page.

- **Widget Titles Hyperlinks**

  - Ensure widget titles in the footer and sidebar have appropriate hyperlinks by dynamically linking titles containing keywords like 'blog,' 'donate,' or 'contact' to their respective pages.

- **Post Title Formatting**

  - Format post titles from guest contributors by placing them in italics throughout the site, ensuring a consistent and visually appealing presentation.

- **Disable Emoji Support**

  - Disables the loading of Emoji scripts and styles to improve performance.

- **Dequeue Stylesheets for Some Plugins**

  - Prevents unnecessary stylesheets from loading on specific pages for certain plugins, improving performance.

- **Guest Contributor Meta Box and Related Functions**

  - Implements a meta box for adding a guest contributor's name to a post and ensures proper formatting of guest author posts.

- **Outline of Pages for Hierarchy**

  - Adds an outline of child pages to the content of parent pages to facilitate navigation and improve SEO.

  - **Adding Template Name to Footer**

  - Appends the name of the template used for a page at the bottom of that page, visible only to super admins.

- **Guest Contributor Meta Box Toggle**

  - This customization utilizes JavaScript to dynamically hide or display the "Guest Contributor Name" meta box on the WordPress 'edit post' admin page.

- **Blog Image Customization**

  - **Alt Text Enhancement:**

    - Retrieve the alt text of the featured image and use it in the alt attribute of the image.

  - **Link to Post:**

    - Add a link around the featured image that directs users to the individual post when clicked.

  - **Customized Figure Element:**

    - Enhance the HTML structure by encapsulating the featured image in a `figure` element, providing better semantics and styling opportunities.

## Technologies Used

- PHP
- JavaScript
- HTML
- CSS
