// geting the  current weather  using the city name 
function  weather(){
     const ApiKey ="c259c38445f4965cbfee848f82b935c8";
     const city = document.getElementById("city").value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`)
        .then (response=>response.json())
        .then(data => {
            const icon = data.weather[0].icon;
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const mintemp= data.main.temp_min;
            const maxtemp= data.main.temp_max;
            const feel= data.main.feels_like;

            document.getElementById('icon').src = `http://openweathermap.org/img/w/${icon}.png`;
           
            document.getElementById('temperature').textContent = `Temperature: ${temperature } °C `;
            document.getElementById('min-temp').textContent = `min Temperature: ${mintemp} °C `;
            document.getElementById('max-temp').textContent = `max Temperature: ${maxtemp } °C `
            document.getElementById('description').textContent = `Description: ${description}`;
            document.getElementById('feel').textContent = ` feels like: ${feel} °C `;
          })
          .catch(error => console.error('Error fetching weather data:', error));
      }
    //   geolocation 
      document.getElementById("locationbtn").addEventListener('click', () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;

                getWeatherData(latitude, longitude);
            });
        } else {
            alert('Geolocation is not supported by your browser.');
        }
      });
      //getting the current weather using currentlocation geolocation
      async function getWeatherData(latitude, longitude) {
        const apiKey = 'c259c38445f4965cbfee848f82b935c8';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      
        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            displayWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
      }
      
      function displayWeatherData(data) {
        const icon = data.weather[0].icon;
        const temperature = data.main.temp;
        const description = data.weather[0].description;
        const mintemp= data.main.temp_min;
            const maxtemp= data.main.temp_max;
            const feel= data.main.feels_like;
        document.getElementById('icon').src = `http://openweathermap.org/img/w/${icon}.png`;
        document.getElementById('temperature').textContent = `Temperature: ${temperature } °C `;
        document.getElementById('min-temp').textContent = `min Temperature: ${mintemp} °C `;
        document.getElementById('max-temp').textContent = `max Temperature: ${maxtemp } °C `;
        document.getElementById('description').textContent = `Description: ${description}`;
        document.getElementById('feel').textContent = ` feels like: ${feel} °C `;
      } 