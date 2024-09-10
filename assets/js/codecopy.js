// JavaScript for Copy Functionality and Smooth Scrolling 

function copyCode(codeId) {
    var codeBlock = document.getElementById(codeId);
    var range = document.createRange();
    range.selectNode(codeBlock);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Code copied to clipboard!');
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

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
        let listItems = card.querySelectorAll('.card-body ul li');

        let title = titleElement.textContent.toLowerCase();
        let bodyText = bodyElement.textContent.toLowerCase();
        let foundInList = false;

        // Reset content
        titleElement.innerHTML = titleElement.textContent;
        bodyElement.innerHTML = bodyElement.textContent;
        listItems.forEach(item => {
            item.innerHTML = item.textContent; // Reset list item content
        });

        // Highlight and show/hide cards
        let cardMatches = false;

        // Check title
        if (title.includes(input)) {
            highlightText(titleElement, input);
            cardMatches = true;
        }

        // Check body text
        if (bodyText.includes(input)) {
            highlightText(bodyElement, input);
            cardMatches = true;
        }

        // Check list items
        listItems.forEach(item => {
            let itemText = item.textContent.toLowerCase();
            if (itemText.includes(input)) {
                highlightText(item, input);
                foundInList = true;
                cardMatches = true;
            }
        });

        // Display card and scroll into view if matches are found
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


//searchbar-old code

// function searchPosts() {
//     let input = document.getElementById('searchInput').value.toLowerCase();
//     let cards = document.querySelectorAll('.card');
//     let found = false;

//     // Remove previous highlights
//     document.querySelectorAll('.highlight').forEach(el => {
//         el.innerHTML = el.innerHTML.replace(/<\/?span class="highlight">/g, '');
//         el.classList.remove('highlight');
//     });

//     cards.forEach(card => {
//         let titleElement = card.querySelector('.card-header span');
//         let bodyElement = card.querySelector('.card-body p');

//         let title = titleElement.textContent.toLowerCase();
//         let bodyText = bodyElement.textContent.toLowerCase();

//         // Reset content
//         titleElement.innerHTML = titleElement.textContent;
//         bodyElement.innerHTML = bodyElement.textContent;

//         // Highlight and show/hide cards
//         if (title.includes(input) || bodyText.includes(input)) {
//             card.style.display = '';
//             found = true;

//             // Highlight text in title
//             if (title.includes(input)) {
//                 highlightText(titleElement, input);
//             }

//             // Highlight text in body
//             if (bodyText.includes(input)) {
//                 highlightText(bodyElement, input);
//             }

//             // Scroll the first matching card into view
//             card.scrollIntoView({ behavior: 'smooth', block: 'center' });
//         } else {
//             card.style.display = 'none';
//         }
//     });

//     if (!found) {
//         alert('No matching results found.');
//     }
// }



// Function to wrap matching text with a span to highlight


// function highlightText(element, text) {
//     let innerHTML = element.innerHTML;
//     let index = innerHTML.toLowerCase().indexOf(text);

//     if (index >= 0) {
//         innerHTML = innerHTML.substring(0, index) +
//             '<span class="highlight">' +
//             innerHTML.substring(index, index + text.length) +
//             '</span>' +
//             innerHTML.substring(index + text.length);
//         element.innerHTML = innerHTML;
//     }
// }
