import {transform} from './data-transformer.js';

export default async function (city) {
    //const response = await fetch('https://frozen-hamlet-77034.herokuapp.com/api/userOrders/today?location=' + city); 
    const response = await fetch('static/mock.json'); 

    return transform(await response.json())
}
