let weather = {
    apikey:"95dc5e83429861a52e2129827f85e355",
fetchweather: function (city) {
    fetch("https://api.openweathermap.org/data/2.5/weather?q="
     + city 
     + "&units=metric&appid="
     + this.apikey
    
        
    )
    .then((response) => response.json())
    .then((data) =>  this.displayWeather(data));
},
displayWeather: function(data){
const { name } = data;
const { icon,description } = data.weather[0];
const { temp,humidity} = data.main;
const { speed } =data.wind;
console.log(name,icon,description,temp,humidity,speed);
document.querySelector(".city").innertext = "Weather in" + name;
document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png"
document.querySelector(".description").innerText = description;
document.querySelector(".temp").innerText = temp + "°C";
document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
document.querySelector(".wind").innerText = "Wind speed:" + speed + "km/h"; 
},
search: function(){
this.fetchweather(document.querySelector(".search-bar").value);
}
};
document.querySelector(".search-button").addEventListener("click",function(){
    weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup",function(event){
    if (event.key=="Enter")
        weather.search();
    })