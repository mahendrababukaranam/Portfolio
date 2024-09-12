/**
* Template Name: iPortfolio
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Updated: Jun 29 2024 with Bootstrap v5.3.3
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/

(function() {
  "use strict";

  /**
   * Header toggle
   */

  // Select the element with the class 'header-toggle' and store it in the variable
  const headerToggleBtn = document.querySelector('.header-toggle');

  // Define the function to toggle the header visibility and button icon
  function headerToggle() {
    // Toggle the 'header-show' class on the element with the ID 'header'
    document.querySelector('#header').classList.toggle('header-show');

    // Toggle between 'bi-list' and 'bi-x' classes on the header toggle button
    headerToggleBtn.classList.toggle('bi-list');
    headerToggleBtn.classList.toggle('bi-x');
  }

  // Add an event listener to the header toggle button
  // When the button is clicked, the headerToggle function is called
  headerToggleBtn.addEventListener('click', headerToggle);




  /**
   * Hide mobile nav on same-page/hash links
   */

  // Select all anchor (`<a>`) elements within the element with the ID 'navmenu'
  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    // Add a click event listener to each anchor element
    navmenu.addEventListener('click', () => {

      // Check if there is an element with the class 'header-show'
      if (document.querySelector('.header-show')) {

        // If such an element exists, call the 'headerToggle' function
        headerToggle();
      }
    });

  });





  /**
   * Toggle mobile nav dropdowns
   */

  //// Select all elements with the class 'toggle-dropdown' that are children of elements with the class 'navmenu'
  document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {
    // Add a click event listener to each of these elements
    navmenu.addEventListener('click', function(e) {
      // Prevent the default action of the event (e.g., following a link)
      e.preventDefault();

      // Toggle the 'active' class on the parent element of the clicked element
      this.parentNode.classList.toggle('active');

      // Toggle the 'dropdown-active' class on the next sibling element of the parent
      this.parentNode.nextElementSibling.classList.toggle('dropdown-active');

      // Stop the event from propagating further up the DOM tree
      e.stopImmediatePropagation();
    });
  });




  /**
   * Preloader
   */
  // Select the element with the ID 'preloader' and store it in the variable
const preloader = document.querySelector('#preloader');

// Check if the 'preloader' element exists in the document
if (preloader) {
    // Add an event listener for the 'load' event on the window object
    window.addEventListener('load', () => {
        // Remove the 'preloader' element from the DOM
        preloader.remove();
    });
}



  /**
   * Scroll top button
   */

  // Select the element with the class 'scroll-top' and store it in the variable
  let scrollTop = document.querySelector('.scroll-top');

  // Function to toggle the visibility of the 'scroll-top' button
  function toggleScrollTop() {
    // Check if the 'scrollTop' element exists
    if (scrollTop) {
      // Add the 'active' class if the page has been scrolled more than 100 pixels
      // Remove the 'active' class if the page has been scrolled less than or equal to 100 pixels
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }

  // Add a click event listener to the 'scroll-top' element
  scrollTop.addEventListener('click', (e) => {
    // Prevent the default action of the click event (e.g., navigating to a link if it is an anchor tag)
    e.preventDefault();

    // Smoothly scroll to the top of the page when the 'scroll-top' button is clicked
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // Add an event listener to the window that triggers when the page is loaded
  window.addEventListener('load', toggleScrollTop);

  // Add an event listener to the document that triggers when the page is scrolled
  document.addEventListener('scroll', toggleScrollTop);



  
  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600, // Duration of the animation in milliseconds
        easing: 'ease-in-out', // Easing function for the animation
        once: true, // Animation will only occur once per element
        mirror: false // Do not mirror animations (i.e., no reverse animations when scrolling back)
    });
  }

  // Add an event listener to initialize AOS when the page loads
  window.addEventListener('load', aosInit);



  /**
   * Init typed.js library
   */

  const selectTyped = document.querySelector('.typed');

  // Check if the element with the class 'typed' exists
  if (selectTyped) {
    // Get the data attribute 'data-typed-items' which contains the strings for typing animation
    let typed_strings = selectTyped.getAttribute('data-typed-items');

    // Split the string into an array of individual strings using ',' as the delimiter
    typed_strings = typed_strings.split(',');

    // Create a new Typed.js instance for the element with the class 'typed'
    new Typed('.typed', {
      strings: typed_strings, // Array of strings to be typed
        loop: true, // Loop the typing animation indefinitely
        typeSpeed: 100, // Speed of typing in milliseconds per character
        backSpeed: 50, // Speed of backspacing in milliseconds per character
        backDelay: 2000 // Delay before starting the backspace animation in milliseconds
    });
  }



  /**
   * Initiate Pure Counter
   */
  new PureCounter();



  /**
   * Animate the skills items on reveal
   */

  // Select all elements with the class 'skills-animation' and store them in the variable
  let skillsAnimation = document.querySelectorAll('.skills-animation');

  // Iterate over each element in the NodeList
  skillsAnimation.forEach((item) => {
    // Create a new Waypoint instance for each element
    new Waypoint({
      element: item, // Specify the element to watch
      offset: '80%', // Set the offset to 80% of the viewport height

      // Define the handler function that will be triggered when the element is scrolled into view
      handler: function(direction) {
        // Select all progress bars within the current 'item'
        let progress = item.querySelectorAll('.progress .progress-bar');

        // Iterate over each progress bar element
        progress.forEach(el => {
          // Set the width of the progress bar based on the 'aria-valuenow' attribute
          el.style.width = el.getAttribute('aria-valuenow') + '%';
        });
      }
    });
  });

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Init isotope layout and filters
   */
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        initIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
        if (typeof aosInit === 'function') {
          aosInit();
        }
      }, false);
    });

  });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll('.navmenu a');

  function navmenuScrollspy() {
    navmenulinks.forEach(navmenulink => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
        navmenulink.classList.add('active');
      } else {
        navmenulink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navmenuScrollspy);
  document.addEventListener('scroll', navmenuScrollspy);

})();


function searchPosts() {
  let input = document.getElementById('searchInput').value.toLowerCase();
  let cards = document.querySelectorAll('.card');
  let found = false;

  // Remove previous highlights
  document.querySelectorAll('.highlight').forEach(el => {
      el.innerHTML = el.innerHTML.replace(/<\/?span class="highlight">/g, '');
      el.classList.remove('highlight');
  });

  cards.forEach(card => {
      let titleElement = card.querySelector('.card-header span');
      let bodyElement = card.querySelector('.card-body p');

      let title = titleElement.textContent.toLowerCase();
      let bodyText = bodyElement.textContent.toLowerCase();

      // Reset content
      titleElement.innerHTML = titleElement.textContent;
      bodyElement.innerHTML = bodyElement.textContent;

      // Highlight and show/hide cards
      if (title.includes(input) || bodyText.includes(input)) {
          card.style.display = '';
          found = true;

          // Highlight text in title
          if (title.includes(input)) {
              highlightText(titleElement, input);
          }

          // Highlight text in body
          if (bodyText.includes(input)) {
              highlightText(bodyElement, input);
          }

          // Scroll the first matching card into view
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
          card.style.display = 'none';
      }
  });

  if (!found) {
      alert('No matching results found.');
  }
}

// Function to wrap matching text with a span to highlight
function highlightText(element, text) {
  let innerHTML = element.innerHTML;
  let index = innerHTML.toLowerCase().indexOf(text);

  if (index >= 0) {
      innerHTML = innerHTML.substring(0, index) +
          '<span class="highlight">' +
          innerHTML.substring(index, index + text.length) +
          '</span>' +
          innerHTML.substring(index + text.length);
      element.innerHTML = innerHTML;
  }
}
