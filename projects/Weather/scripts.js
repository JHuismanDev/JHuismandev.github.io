//Link the weather API
const apiKEY = "a1d2d506b588b338d2e6e4c2c4a5cd76";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
  const response = await fetch(apiURL + city + `&appid=${apiKEY}`);

  //Show the error message and hide the weather when the input is invalid
  if(response.status == 404){
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }else {
    var data = await response.json();

    //Gather the information from the API and the input bar
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + " km/h";

    //Change the picture based off the weather API
    if(data.weather[0].main == "Clouds"){
      weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
      weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
      weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
      weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
      weatherIcon.src = "images/mist.png";
    }

    //Show the weather display when the input is valid
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }

}

searchBtn.addEventListener("click", ()=>{
  checkWeather(searchBox.value);
})
