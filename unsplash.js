// const url = `https://api.unsplash.com/photos/random?count=1&client_id=tJ7HlQrRKoNDAlGKe62cEsw66ljdcn4ewI8sH5SSH_k`;

// window.addEventListener("load", () => {
//     fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//             const { urls } = data[0];
//             document.body.style.backgroundImage = `url(${urls.full})`;
//         })
//         .catch((error) => {
//             console.log("Error:", error);
//         });
// })

// const rndmImg = document.getElementById("randomImg");

// rndmImg.addEventListener("click", () => {
//     fetch(url)
//         .then((response) => response.json())
//         .then((data) => {
//             const { urls } = data[0];
//             document.body.style.backgroundImage = `url(${urls.full})`;
//         })
//         .catch((error) => {
//             console.log("Error:", error);
//         });
// });