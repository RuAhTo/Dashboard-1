const favContainer = document.querySelector("#favorites");
const favAdd = document.querySelector("#fav-link-input");
const favTitle = document.querySelector("#fav-title-input");
const favSubmit = document.querySelector("#favSubmit");
const addBtn = document.querySelector("#add-favorite");
let links = []; // Array to store the entered links
const MAX_LINKS = 4;

// Load links from localStorage when the page is loaded
window.addEventListener("load", () => {
    const storedLinks = localStorage.getItem("links");
    if (storedLinks) {
        links = JSON.parse(storedLinks);
        displayLinks();
    }
});

favSubmit.addEventListener("click", () => {
    const link = favAdd.value; // Add the protocol prefix
    const title = favTitle.value; // Get the entered title
    const favIcon = 'https://www.google.com/s2/favicons?domain=' + link;
    const favId = `fav${Date.now()}`; // Generate a unique id using the current timestamp

    // Validate the entered URL
    if (links.length >= MAX_LINKS) {
        console.log("Maximum number of links reached");
        return; // Exit the function without adding the link
    }
    if (isValidURL(link)) {
        favContainer.classList.remove("errorMsg"); // Clear the container
        links.push({ id: favId, link: link, title: title }); // Store the link and title in the array
        saveLinksToLocalStorage(); // Save the links to localStorage
        displayLinks(); // Update the displayed links
        favAdd.value = ""; // Clear the input fields
        favTitle.value = "";
    } else {
        console.log("Invalid URL");
        favContainer.innerHTML = `<p class="errorMsg">Invalid URL</p>`;
    }
});

// Example: Display all the entered links
function displayLinks() {
    favContainer.innerHTML = ""; // Clear the container
    links.forEach(({ id, link, title }) => {
        const favIcon = 'https://www.google.com/s2/favicons?domain=' + link;
        const removeButton = document.createElement("button");
        removeButton.className = "remove-link";
        removeButton.textContent = "X";
        removeButton.addEventListener("click", () => removeLink(id));

        const linkContainer = document.createElement("div");
        linkContainer.className = "favorite-link";
        linkContainer.id = id;
        linkContainer.innerHTML = `<img src="${favIcon}"><a href="${link}">${title}</a>`;
        linkContainer.appendChild(removeButton);

        favContainer.appendChild(linkContainer);
    });
}

// Event delegation to handle remove button clicks
favContainer.addEventListener("click", (event) => {
    const removeButton = event.target.closest(".remove-link");
    if (removeButton) {
        const id = removeButton.parentNode.id;
        removeLink(id);
    }
});

// Function to remove a specific link
function removeLink(id) {
    links = links.filter(linkObj => linkObj.id !== id);
    saveLinksToLocalStorage(); // Save the links to localStorage after removing
    displayLinks(); // Update the displayed links after removing
}

// Function to save the links to localStorage
function saveLinksToLocalStorage() {
    localStorage.setItem("links", JSON.stringify(links));
}

// Function to validate URL using regex
function isValidURL(str) {
    var a  = document.createElement('a');
    a.href = str;
    return (a.host && a.host != window.location.host);
}