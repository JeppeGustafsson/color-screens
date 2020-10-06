const weatherHolder = document.getElementById('weatherHolder');
const weatherIconHolder = document.getElementById('weatherIconHolder');
const weatherKey = 'ca7c2a6b5e24df2ffdc982aae27838aa';


function getLocation() {
    if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
    } else {
        console.error('Geolocation is not supported in your browser');
    }
    setTimeout(function() {
        getLocation();
    }, 6000)
}
getLocation();


function geoSuccess(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const weatherAPI = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${weatherKey}`;
    
    fetch(weatherAPI)
        .then(response => response.json())
        .then(data => setWeather(data));
}

function geoError() {
    console.error('Geocoder failed');
}

function setWeather(data) {
    const weather = (data.main.temp - 273.15).toString().slice(0,4) + "°c" + "<br>" + data.weather[0].description;
    const icon = `./images/weather-icons/${data.weather[0].icon}.svg`;
    weatherHolder.innerHTML = weather;
    weatherIconHolder.src = icon;
    console.log(data);
}