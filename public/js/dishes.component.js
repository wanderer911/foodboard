import {DishComponent} from './dish.components.js';

export function DishesComponent(listOfDishes){
    return `
        <div class="dishes">
            ${
listOfDishes.map(DishComponent).join('')}
        </div>
    `
    
}