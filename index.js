const apiKey = "c259c38445f4965cbfee848f82b935c8"
const city = document.getElementById("city").value
// let cityname = document.getElementById("cityname").innerHTML
//  let currentTemp = document.getElementById("currenttemp").innerHTML
//  let currentIcon = document.getElementById("currentIcon").src
  //fetching and storing
  function getforecast() {
    const apiKey = 'c259c38445f4965cbfee848f82b935c8';
    const city = document.getElementById("city").value
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => displayweather( data) 
      
           
      

        )

        .catch(error => console.error('Error fetching weather data:', error));

}
//displaying the data
function displayweather( data){

           let name = data.city.name
        let currentTemp = data.list[0].main.temp
          let currentIcon = data.list[0].weather[0].icon
         let mintemp = data.list[0].main.temp_min
         let maxtemp = data.list[0].main.temp_max
           let pressure = data.list[0].main.pressure
           let humidity = data.list[0].main.humidity
           let feel = data.list[0].main.feels_like
           let wind =data.list[0].wind.speed
           document.getElementById("mintemp").innerHTML =`min: <br>${mintemp}°C`
           document.getElementById("maxtemp").innerHTML =`max: <br>${maxtemp}°C`
           document.getElementById("humidity").innerHTML =`humidity: <br>${humidity}%`
           document.getElementById("feel").innerHTML =`feels like: <br>${feel}°C`
           document.getElementById("wind").innerHTML =`wind speed: <br>${wind} m/h`
           document.getElementById("pressure").innerHTML =`pressure: <br>${pressure} hPa`
          document.getElementById("currenttemp").innerHTML =`${currentTemp} °C`
          document.getElementById("cityname").innerHTML= `${name}`
          document.getElementById("currentIcon").src =`https://openweathermap.org/img/w/${currentIcon}.png`;
          //looping for 5day forecast 
          for (let i = 0; i < data.list.length; i += 8){
           console.log(data.list[i])
           index =data.list.i
          date = data.list[i].dt_txt
          day=date.substr(0,11)
         icon =data.list[i].weather[0].icon
          description =data.list[i].weather[0].description
          tempmin =data.list[i].main.temp_min
          tempmax =data.list[i].main.temp_max
          let showforecast = document.getElementById("display")
          showforecast.innerHTML +=`
          <div id=shows${index} class="flex size ">
          <p id="today"> ${day}</p>
          <img id="icons" src ="https://openweathermap.org/img/w/${icon}.png" alt="">
          <p id="describtion"> ${description}</p>
          <p id="temp"> ${tempmin} /${tempmax}</p> 
          </div>
          `;
          closepg()        
}
} 

// closing the page with inputs and btn
function closepg(){
    let popU = document.getElementById("cover")
    popU.style.display = "none"
    
}
 //show cover page again inoder to search again
 function openpg(){
    let popU = document.getElementById("cover")
    popU.style.display = "flex"
 }
 

