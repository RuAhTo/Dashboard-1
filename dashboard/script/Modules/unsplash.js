const apiUrl = "https://api.unsplash.com/photos/random?count=1&client_id=tJ7HlQrRKoNDAlGKe62cEsw66ljdcn4ewI8sH5SSH_k";

function fetchAndApplyBackground() {
    fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            const { urls } = data[0];
            document.body.style.backgroundImage = `url(${urls.full})`;
        })
        .catch((error) => {
            console.log("Error:", error);
        });
}

window.addEventListener("load", fetchAndApplyBackground);

const rndmImg = document.getElementById("randomImg");
rndmImg.addEventListener("click", fetchAndApplyBackground);

export {fetchAndApplyBackground, rndmImg};