import containerRenderer from './containerRenderer.js';
import getCity from './getCity.js';
import loadTodayDataByCity from './loadTodayDataByCity.js';
import reloadTomorrow from './reloadTomorrow.js';

const city = getCity();

loadTodayDataByCity(city).then(data => {
    document.body.innerHTML = containerRenderer(data);
});

reloadTomorrow()
