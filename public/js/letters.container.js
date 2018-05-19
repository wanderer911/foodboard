import {LetterComponent} from './letters.component.js';

export class LettersContainer{
    constructor(city){
        this.city = city;

    }
    fetchMenu(){
        return fetch('https://frozen-hamlet-77034.herokuapp.com/api/userOrders/today?location='+this.city); 
    }

}
/*

function getMenu(city){
    return fetch('https://frozen-hamlet-77034.herokuapp.com/api/userOrders/today?location='+city)
    .then(result=>(result.json())).catch(e=>({error:e}))
}
*/