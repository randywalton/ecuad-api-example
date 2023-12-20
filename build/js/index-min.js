!function(){"use strict";function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(a=i.key,r=void 0,"symbol"==typeof(r=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(a,"string"))?r:String(r)),i)}var a,r}var e,n=function(){function e(t,n,i,a,r,c,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.target=t,this.city=n,this.currentTemp=i,this.feelsLike=a,this.min=r,this.max=c,this.humidity=o}var n,i,a;return n=e,(i=[{key:"createCard",value:function(){var t='\n\n            <article class="weather-card">\n                <h2>'.concat(this.city,'</h2>\n\n                <div class="main-info">\n                    <div class="current-temp">\n                        <h3>Current Temp</h3>\n                        <p>').concat(this.feelsLike,'<span>&#8451</span></p>\n                    </div>\n\n                    <div class="feels-like-temp">\n                        <h3>Feels Like</h3>\n                        <p>').concat(this.currentTemp,' <span>&#8451</span></p>\n                    </div>\n                </div>\n\n                <div class="secondary-info">\n                    \n                    <p class="max-temp">Max Daily Temperature: ').concat(this.min,'&#8451</p>\n                    <p class="min-temp">Min Daily Temperature: ').concat(this.max,'&#8451</p>\n                    <p class="humidity">Humidity: ').concat(this.humidity,"%</p>\n              \n                </div>\n            </article>\n        \n        ");this.target.innerHTML=t}}])&&t(n.prototype,i),a&&t(n,a),Object.defineProperty(n,"prototype",{writable:!1}),e}(),i=document.getElementById("city-weather");document.getElementById("city-select").addEventListener("change",(function(t){var a;e=t.target.value,a=e,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&units=metric&appid=a532f5f97f798ba375363a1e3dc89417")).then((function(t){return t.json()})).then((function(t){console.log("All data from API ",t),function(t,e,a,r,c,o){var s=new n(i,t,e,a,r,c,o);s.createCard()}(t.name,t.main.temp,t.main.feels_like,t.main.temp_max,t.main.temp_min,t.main.humidity)})).catch((function(t){console.error("Category Error:",t)}))}))}();