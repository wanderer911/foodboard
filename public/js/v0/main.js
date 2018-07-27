import containerRenderer from './containerRenderer.js';
import getCity from './getCity.js';
import loadTodayDataByCity from './loadTodayDataByCity.js';

const city = getCity()
loadTodayDataByCity(city).then(data => {
    document.body.innerHTML = containerRenderer(data);

    document.documentElement.style.setProperty(`--amount-of-items`, data.usersList.length);
});
