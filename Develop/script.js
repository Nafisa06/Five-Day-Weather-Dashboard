// set up functions to fetch info for the 5 day forecast"
function GetInfo() {

    var newName = document.getElementById("city-search-form");
    var cityName = document.getElementById("cityName");
    cityName.innerHTML = "--"+newName.value+"--";

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+newName.value+'&appid=e3497886710fe25a18c64173a4cff560')
.then(response => response.json())
.then(data => {

    //Getting the temperature values for each day
    for(i = 0; i<5; i++){
        document.getElementById("temp" + (i+1)).innerHTML = "Temp: " + Number(data.list[i].main.temp - 281.35).toFixed(1)+ "°";
    {

    for(i = 0; i<5; i++){
        document.getElementById("wind" + (i+1)).innerHTML = "wind: " + Number(data.list[i].wind.speed - 6.4).toFixed(2) + "MPH";
    }
    for(i = 0; i<5; i++){
        document.getElementById("humidity" + (i+1)).innerHTML = "humidity: " + Number(data.list[i].main.humidity - 43).toFixed(3) + "%";
    }
   
   
    //Getting Weather Icons
     for(i = 0; i<5; i++){
        document.getElementById("img" + (i+1)).src = "http://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon +".png";
    }
        console.log(data)
