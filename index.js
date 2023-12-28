
function  weather(){
    
     const ApiKey ="c259c38445f4965cbfee848f82b935c8";
     const city = document.getElementById("city").value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}`)
        .then (response=>response.json())
        .then(data => {
            const icon = data.weather[0].icon;
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            document.getElementById('icon').src = `http://openweathermap.org/img/w/${icon}.png`;
           
            document.getElementById('temperature').textContent = `Temperature: ${temperature - 273.15} °C `;
            
            document.getElementById('description').textContent = `Description: ${description}`;
          })
          .catch(error => console.error('Error fetching weather data:', error));
      }
    