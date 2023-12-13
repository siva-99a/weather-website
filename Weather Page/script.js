const input = document.querySelector("#locationInput");
const place = document.querySelector("#cityName");
const temp = document.querySelector("#temperatureValue");
const description = document.querySelector("#description");
const humidity = document.querySelector("#humidityValue");
const speed = document.querySelector("#speedValue");
const searchBtn = document.getElementById("searchBtn");

async function checkWeather(city){
  const apikey = "9fad1f0fd60ce7b94d3fa32dc87630a5";
  const apiurl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=${city}&appid=${apikey}`;
  
  const weather_data = await fetch(`${apiurl}`).then(response => response.json());
  console.log(weather_data);

  place.innerHTML = `${weather_data.name}`;
  temp.innerHTML = `${Math.round(weather_data.main.temp)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;
  humidity.innerHTML = `${weather_data.main.humidity}%`;
  speed.innerHTML = `${Math.round((weather_data.wind.speed + Number.EPSILON)*10)/10} Km/h`;

}

searchBtn.onclick = ()=>{checkWeather(input.value);}