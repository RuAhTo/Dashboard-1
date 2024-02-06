//Insert your Key below in "apiKey"
const apiKey = XXXX
let URL = '';

async function getData(latitude, longitude) {
    URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    const response = await fetch(URL);
    return await response.json();
}

const loadingScreen = document.getElementById('loading-screen');
const weatherContainer = document.getElementById('weather');

function getWeather() {
    console.log('Page loaded');
    loadingScreen.style.display = 'block'; // Show loading screen

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const data = await getData(latitude, longitude);
            const cityName = data.name;
            const temperature = kelvinToCelsius(data.main.temp).toFixed(1);
            const description = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

            weatherContainer.innerHTML = `
                <h2>Current Weather</h2>
                    <img id="weather-icon" src="${iconUrl}" alt="Weather Icon">
                    <h2>${cityName}</h2>
                    <p>${temperature}°C</p>
                    <p>${description}</p>`;

            const weatherIcon = document.getElementById('weather-icon');
            weatherIcon.src = iconUrl;

            loadingScreen.style.display = 'none'; // Hide loading screen
            const weather = document.getElementById('weather');
            weather.classList.add('fadeIn');
        }, error => {
            console.error('Fel vid hämtning av plats:', error);
            loadingScreen.style.display = 'none'; // Hide loading screen in case of error
        });
    } else {
        console.error('Geolocation stöds inte av webbläsaren.');
        loadingScreen.style.display = 'none'; // Hide loading screen in case of error
    }
};

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

export {getWeather};