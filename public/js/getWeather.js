const key = '6866075b0c665a854c8731d19df394eb';
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=48.46&lon=35.04&appid='

export default async function () {
    console.log('here');
    const response = await fetch(url + key); 
    //const response = await fetch('static/mock.json'); 
    return await response.json()
}
