const WEATHER_KEY = 'd180688fee495a43622ecaa22e844914';
let URL = '';

async function getData(latitude, longitude) {
    URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_KEY}`;
    const response = await fetch(URL);
    return await response.json();
}

const loadingScreen = document.getElementById('loading-screen');
const weatherContainer = document.getElementById('weather');

document.addEventListener('DOMContentLoaded', async () => {
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
                <div>
                    <img id="weather-icon" src="${iconUrl}" alt="Weather Icon">
                    <h2>${cityName}</h2>
                    <p>${temperature}°C</p>
                    <p>${description}</p>
                </div>`;

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
});

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

async function searchWeather() {
    const cityInput = document.getElementById('city-search');
    const cityName = cityInput.value;
    const encodedCityName = encodeURIComponent(cityName); // Kodar inmatningen för att hantera specialtecken

    const searchURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCityName}&appid=${WEATHER_KEY}`;
    const response = await fetch(searchURL);
    const data = await response.json();

    // Hantera väderdata och uppdatera gränssnittet
    if (response.ok) {
        const temperature = kelvinToCelsius(data.main.temp).toFixed(1);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;

        weatherContainer.innerHTML = `
            <div>
                <img id="weather-icon" src="${iconUrl}" alt="Weather Icon">
                <h2>${cityName}</h2>
                <p>${temperature}°C</p>
                <p>${description}</p>
            </div>`;

        const weatherIcon = document.getElementById('weather-icon');
        weatherIcon.src = iconUrl;
    } else {
        // Visa felmeddelande om sökningen misslyckades
        console.error('Fel vid sökning av väder:', data.message);
    }
}

// const searchButton = document.getElementById('search-button');
// searchButton.addEventListener('click', searchWeather);