
//----------Starts Copy Code functionality Code from Here-----------------

// Function to copy the text content of a code block to the clipboard
function copyCode(codeId) {
    // Retrieve the code block element by its ID
    var codeBlock = document.getElementById(codeId);

    // Create a new range object to select a portion of the document
    var range = document.createRange();

    // Select the entire content of the code block element
    range.selectNode(codeBlock);

    // Remove any existing selections from the page
    window.getSelection().removeAllRanges();

    // Add the newly created range to the current selection
    window.getSelection().addRange(range);

    // Execute the copy command to copy the selected content to the clipboard
    document.execCommand('copy');

    // Remove the selection after copying to clean up
    window.getSelection().removeAllRanges();

    // Alert the user that the code has been copied
    alert('Code copied to clipboard!');
}


//----------Ends Copy Code functionality Code-----------------




// //-------------Starts Search Functionality Code from here------------------

// // Function to smoothly scroll to a section of the page identified by its ID
// function scrollToSection(sectionId) {
    
//     // Retrieve the element with the ID provided as an argument
//     var section = document.getElementById(sectionId);

//     // Check if the element exists (i.e., section is not null)
//     if (section) {
//         // Scroll the element into view smoothly
//         section.scrollIntoView({ behavior: 'smooth' });
//     }
// }

// function searchPosts() {
//     // Retrieve the value from the input field with ID 'searchInput' and convert it to lowercase
//     let input = document.getElementById('searchInput').value.toLowerCase();

//     // Select all elements with the class 'card'
//     let cards = document.querySelectorAll('.card');

//     // Initialize a flag to keep track of whether any matches are found
//     let found = false;

//     // Remove previous highlights
//     document.querySelectorAll('.highlight').forEach(el => {
//         el.innerHTML = el.innerHTML.replace(/<\/?span class="highlight">/g, '');
//         el.classList.remove('highlight');
//     });

//     // Iterate over each card element
//     cards.forEach(card => {
//         // Select title, body text, and list items within the current card
//         let titleElement = card.querySelector('.card-header span');
//         let bodyElement = card.querySelector('.card-body p');
//         let listItems = card.querySelectorAll('.card-body ul li');

//         // Get the text content of title and body, convert to lowercase for case-insensitive comparison
//         let title = titleElement.textContent.toLowerCase();
//         let bodyText = bodyElement.textContent.toLowerCase();
//         let foundInList = false;

//         // Reset the innerHTML of title and body text, effectively removing any highlights
//         titleElement.innerHTML = titleElement.textContent;
//         bodyElement.innerHTML = bodyElement.textContent;
//         listItems.forEach(item => {
//             item.innerHTML = item.textContent; // Reset list item content
//         });

//         // Initialize a flag to check if the current card matches the search input
//         let cardMatches = false;

//         // Check if the input value is present in the title text
//         if (title.includes(input)) {
//             highlightText(titleElement, input); // Highlight matching text in title
//             cardMatches = true; // Mark card as a match
//         }

//         // Check if the input value is present in the body text
//         if (bodyText.includes(input)) {
//             highlightText(bodyElement, input); // Highlight matching text in body
//             cardMatches = true; // Mark card as a match
//         }

//         // Check each list item for a match
//         listItems.forEach(item => {
//             let itemText = item.textContent.toLowerCase();
//             if (itemText.includes(input)) {
//                 highlightText(item, input); // Highlight matching text in list item
//                 foundInList = true;
//                 cardMatches = true; // Mark card as a match
//             }
//         });

//         // If the card matches, display it and scroll it into view
//         if (cardMatches) {
//             card.style.display = ''; // Show the card
//             found = true; // Set the overall found flag to true
//             card.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Smooth scroll to the card
//         } else {
//             card.style.display = 'none'; // Hide the card if it does not match
//         }
//     });

//     // If no cards matched the search input, alert the user
//     if (!found) {
//         alert('No matching results found.');
//     }
// }

// // Function to wrap matching text with a span to highlight
// function highlightText(element, text) {

//     // Retrieve the current HTML content of the element
//     /*
//     This line stores the current HTML content of the element in a variable innerHTML. 
//     This allows you to manipulate the HTML as a string.
//     */
//     let innerHTML = element.innerHTML;

//     //Find the index of the first occurrence of the text to highlight, ignoring case
//     let index = innerHTML.toLowerCase().indexOf(text);

//     // Check if the text is found (index >= 0 means the text exists in the HTML content)
//     if (index >= 0) {
//         /* 
//         Create a new HTML string with the matching text wrapped in a <span> element
//         - `substring(0, index)` gets the text before the match
//         - `<span class="highlight">` starts the highlight span
//         - `substring(index, index + text.length)` gets the text that matches the search
//         - `</span>` ends the highlight span
//         - `substring(index + text.length)` gets the text after the match
//         */
//         innerHTML = innerHTML.substring(0, index) +
//             '<span class="highlight">' +
//             innerHTML.substring(index, index + text.length) +
//             '</span>' +
//             innerHTML.substring(index + text.length);
//         // Update the element's innerHTML with the new string that includes highlights
//         element.innerHTML = innerHTML;
//     }
// }

//-------------Ends Search Functionality Code------------------*/


// Function to smoothly scroll to a section of the page identified by its ID
function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Function to search and update posts based on the search input
function searchPosts() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.querySelectorAll('.card');
    
    // If the input is empty, display all cards and remove all highlights
    if (input === '') {
        document.querySelectorAll('.highlight').forEach(el => {
            el.innerHTML = el.innerHTML.replace(/<\/?span class="highlight">/g, '');
            el.classList.remove('highlight');
        });
        cards.forEach(card => {
            card.style.display = '';
        });
        return; // Exit the function to avoid further processing
    }

    let found = false;

    // Remove previous highlights
    document.querySelectorAll('.highlight').forEach(el => {
        el.innerHTML = el.innerHTML.replace(/<\/?span class="highlight">/g, '');
        el.classList.remove('highlight');
    });

    cards.forEach(card => {
        let titleElement = card.querySelector('.card-header span');
        let bodyElement = card.querySelector('.card-body p');
        let listItems = card.querySelectorAll('.card-body ul li');
        let ollistItems = card.querySelectorAll('.card-body ol li'); //Step-1

        let title = titleElement.textContent.toLowerCase();
        let bodyText = bodyElement.textContent.toLowerCase();
        let foundInList = false;

        // Reset the innerHTML of title and body text
        titleElement.innerHTML = titleElement.textContent;
        bodyElement.innerHTML = bodyElement.textContent;
        listItems.forEach(item => {
            item.innerHTML = item.textContent;
        });

        //Step-2
        ollistItems.forEach(item => {
            item.innerHTML = item.textContent;
        });

        let cardMatches = false;

        if (title.includes(input)) {
            highlightText(titleElement, input);
            cardMatches = true;
        }

        if (bodyText.includes(input)) {
            highlightText(bodyElement, input);
            cardMatches = true;
        }

        listItems.forEach(item => {
            let itemText = item.textContent.toLowerCase();
            if (itemText.includes(input)) {
                highlightText(item, input);
                foundInList = true;
                cardMatches = true;
            }
        });

        //Step-3
        ollistItems.forEach(item => {
            let itemText = item.textContent.toLowerCase();
            if (itemText.includes(input)) {
                highlightText(item, input);
                foundInList = true;
                cardMatches = true;
            }
        });

        if (cardMatches) {
            card.style.display = '';
            found = true;
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

// Add event listener to the search input field to trigger search on input change
document.getElementById('searchInput').addEventListener('input', searchPosts);



//searchbar-old code

/*
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



Function to wrap matching text with a span to highlight


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
    */
