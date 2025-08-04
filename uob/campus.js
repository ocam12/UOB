//Weather API
const apiKey = '3ce3fef3f81861a271e8075a8d9287ae'
const city = 'Birmingham,UK';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
fetch(url)
    .then(response => response.json())
    .then(data => {
        const iconCode = data.weather[0].icon;
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

        document.getElementById('description').innerText = `Weather: ${data.weather[0].description}`;
        document.getElementById('temperature').innerText = `${Math.round(data.main.temp)}`;
        document.getElementById('weather-icon').src = iconUrl;
    })
    .catch(error => {
        console.error('Error fetching weather: ', error);
        document.querySelector('.weather-container').innerText = 'Failed to load weather data';
    });