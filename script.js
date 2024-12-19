const searchBtn = document.getElementById('search-btn')

searchBtn.addEventListener('click', function(e) {
    e.preventDefault
    const cityInput = document.getElementById('city-input').value;
    const apiKey = '63d70eb7eac368c79d316d4f78d7865b'; 
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(weatherPromise => weatherPromise.json())
        .then(data => {
            if (data.cod === '404') {
                alert('City not found');
                return;
            }
            const currentDate = new Date().toLocaleDateString();
            const weatherInfo = document.getElementById('weather-info');
            weatherInfo.innerHTML = `
                <li><strong>Location:</strong> ${data.name}</li>
                <li><strong>Temperature:</strong> ${data.main.temp} °C</li>
                <li><strong>Description:</strong> ${data.weather[0].description}</li>
                 <li><strong>Date:</strong> ${currentDate}</li>
            `;
        })
        .catch(error => {
            console.log(error)
        });
});
