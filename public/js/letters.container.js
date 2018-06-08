import {LettersComponent} from './letters.component.js';
import {DishesComponent} from './dishes.component.js';
import {transform} from './my.transform.js';

export class LettersContainer{
    constructor(city){
        this.city = city;//TODO get from url;
        this.setMenu();
    }
    fetchMenu(){
        return fetch('https://frozen-hamlet-77034.herokuapp.com/api/userOrders/today?location=' + this.city); 
    }
    async setMenu(){
        try{
            const fetched = await this.fetchMenu();
            const menu = await fetched.json();
            this.menu = menu;
        }
        catch(e){
            this.error = e;
        }
        return;
    }
    render(){
        const data = transform(this.menu);
        const body = document.getElementsByTagName('body');
        document.body.innerHTML+=LettersComponent(data.lettersObject,data.lengthUsers);
        document.body.innerHTML+=DishesComponent(data.listOfDishes);

        const html = document.getElementsByTagName('html')[0];
        html.style.setProperty("--items-amount", data.lengthUsers);
    }
}