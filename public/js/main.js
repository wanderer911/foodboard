import containerRenderer from './containerRenderer.js';
import getCity from './getCity.js';
import loadTodayDataByCity from './loadTodayDataByCity.js';
//import getWeather from './getWeather.js';
import startTimer from './timer.js';
const city = getCity();
// Promise.all([
//     loadTodayDataByCity(city),
//     getWeather()
//     ])
//     .then((dataByCity,weather)=>{
//         console.log
//         document.body.innerHTML = containerRenderer(dataByCity,weather);
//     });






loadTodayDataByCity(city).then(data => {
    document.body.innerHTML = containerRenderer(data);
    startTimer();
});
