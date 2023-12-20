/* JS Class are like blueprint or template, it allows you to build components */

class Card {
    constructor(target, city, currentTemp, feelsLike, min, max, humidity) {
        this.target = target;
        this.city = city;
        this.currentTemp = currentTemp;
        this.feelsLike = feelsLike;
        this.min = min;
        this.max = max;
        this.humidity = humidity;
    }
 
    createCard() {

        let template = `

            <article class="weather-card">
                <h2>${this.city}</h2>

                <div class="main-info">
                    <div class="current-temp">
                        <h3>Current Temp</h3>
                        <p>${this.feelsLike}<span>&#8451</span></p>
                    </div>

                    <div class="feels-like-temp">
                        <h3>Feels Like</h3>
                        <p>${this.currentTemp} <span>&#8451</span></p>
                    </div>
                </div>

                <div class="secondary-info">
                    
                    <p class="max-temp">Max Daily Temperature: ${this.min}&#8451</p>
                    <p class="min-temp">Min Daily Temperature: ${this.max}&#8451</p>
                    <p class="humidity">Humidity: ${this.humidity}%</p>
              
                </div>
            </article>
        
        `

        this.target.innerHTML = template;
      
    }

  }
  

  export {Card}