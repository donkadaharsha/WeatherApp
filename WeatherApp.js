let currCity="Norman";
let units = "metric";
let form = document.querySelector('weather__search')
let city = document.querySelector('.weather__city');
let search_city = document.querySelector('.weather__searchform')
let update_city = document.querySelector('.weather__city')

function getWeather(currCity){
  const API_KEY = '34004a8f4ca7c3fed70917671d9b3170'
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`).then
  (res => res.json()).then(data => 
    {
      currCity = search_city.value 
      console.log(`${currCity}`) 
      console.log(data)
      update_city.innerHTML = `${data.name}` + ", " +  `${data.sys.country}`
      var today = new Date();
      console.log(today.toString().slice(0,14));
      document.querySelector('.weather__datetime').innerHTML = today;
      document.querySelector('.weather__temperature').innerHTML = data.main.temp + "&#176"
      document.querySelector('.weather__minmax').innerHTML = "Min: " + `${data.main.temp_min}` + "&nbsp&nbsp&nbsp&nbsp" + "Max: " + `${data.main.temp_max}`
      document.querySelector('.weather__realfeel').innerHTML = data.main.feels_like + "&#176";
      document.querySelector('.weather__humidity').innerHTML = data.main.humidity + "%";
      document.querySelector('.weather__wind').innerHTML = data.wind.speed + " km/h";
      document.querySelector('.weather__pressure').innerHTML = data.main.pressure;
      form.reset();
    }) 
}

let celcius = document.querySelector('.weather__unit_celcius');
let farenheit = document.querySelector('.weather__unit_farenheit');


search_city.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault(); // Prevent the default form submission behavior
    console.log("entered");
    
    currCity = search_city.value 
    document.body.addEventListener('load',getWeather(currCity))
    
  }
});


function defaultWeather(){
  const API_KEY = '34004a8f4ca7c3fed70917671d9b3170'
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currCity}&appid=${API_KEY}&units=${units}`).then
  (res => res.json()).then(data => 
    {
      currCity = search_city.value 
      console.log(`${currCity}`) 
      console.log(data)
      update_city.innerHTML = `${data.name}` + ", " +  `${data.sys.country}`
      var today = new Date();
      console.log(today.toString().slice(0,14));
      document.querySelector('.weather__datetime').innerHTML = today;
      document.querySelector('.weather__temperature').innerHTML = data.main.temp + "&#176"
      document.querySelector('.weather__minmax').innerHTML = "Min: " + `${data.main.temp_min}` + "&nbsp&nbsp&nbsp&nbsp" + "Max: " + `${data.main.temp_max}`
      document.querySelector('.weather__realfeel').innerHTML = data.main.feels_like + "&#176";
      document.querySelector('.weather__humidity').innerHTML = data.main.humidity + "%";
      document.querySelector('.weather__wind').innerHTML = data.wind.speed + " km/h";
      document.querySelector('.weather__pressure').innerHTML = data.main.pressure;
      s=1;
      // form.reset();
    }) 
}



defaultWeather();
