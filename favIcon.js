const favContainer = document.querySelector("#favorites");
const favAdd = document.querySelector("#favLinkSearch");
const favSubmit = document.querySelector("#favSubmit");
const addBtn = document.querySelector("#add-favorite");
const links = []; // Array to store the entered links

favSubmit.addEventListener("click", () => {
    const link = favAdd.value; // Add the protocol prefix
    const favIcon = 'https://www.google.com/s2/favicons?domain=' + link;
    const favId = `fav${Date.now()}`; // Generate a unique id using the current timestamp

    // Validate the entered URL
    if (isValidURL(link)) {
        favContainer.classList.remove = "errorMsg"; // Clear the container
        links.push({ id: favId, link: link }); // Store the link in the array
        favContainer.innerHTML += `<div class="favorite-link" id="${favId}"><img src="${favIcon}"><a href="${link}">${link}</a></div>`;
        favAdd.value = ""; // Clear the input field
    } else {
        console.log("Invalid URL");
        favContainer.innerHTML = `<p class="errorMsg">Invalid URL</p>`;
    }
});

// Example: Display all the entered links
function displayLinks() {
    favContainer.innerHTML = ""; // Clear the container
    links.forEach(({ id, link }) => {
        const favIcon = 'https://www.google.com/s2/favicons?domain=' + link;
        favContainer.innerHTML += `<div class="favorite-link" id="${id}"><img src="${favIcon}"><a href="${link}">${link}</a></div>`;
    });
}

// Example: Call the displayLinks function to show all the entered links
displayLinks();

// Function to validate URL using regex
function isValidURL(str) {
    var a  = document.createElement('a');
    a.href = str;
    return (a.host && a.host != window.location.host);
 }

 addBtn.addEventListener("click", () => {
    
 })