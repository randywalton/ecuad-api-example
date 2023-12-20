import { Card } from "./components/card/Card.js";//import our component (e.g. a Class)


/* --------------------------------------------------
Define Globals
-------------------------------------------------- */

/* Cache DOM elements */
const cityWeather = document.getElementById('city-weather');
const citySelect = document.getElementById('city-select');

/* Var to determine city selected */
let targetCity;




/* --------------------------------------------------
Listen to the select when user changes city 
-------------------------------------------------- */
citySelect.addEventListener("change", (event) => {
    targetCity = event.target.value;//update value
    getWeather(targetCity);//call function to build weather card
});



/* -----------------------------
Function to fetch the API data 
----------------------------- */

function getWeather(city) {

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=put-access-key-here`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            
            console.log('All data from API ', data);

            //pass info to Function that will build the card
            buildWeatherCard(
                data.name,
                data.main.temp,
                data.main.feels_like,
                data.main.temp_max,
                data.main.temp_min,
                data.main.humidity
            );
            
        })
        .catch((error) => {
            console.error('Category Error:', error);
        }); 
}



/* --------------------------------------- 
Create card using a class (e.g. component) 
--------------------------------------- */
function buildWeatherCard(city, temp, feel, max, min, humidity){
    const card = new Card(
        cityWeather,
        city,
        temp,
        feel,
        max,
        min,
        humidity
    );
    card.createCard();

}



