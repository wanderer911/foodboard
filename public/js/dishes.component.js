import {DishComponent} from './dish.components.js';

export function DishesComponent(listOfDishes){
    if (!listOfDishes.length){
        return '';
    }
    return `
        <div class="dishes">
            ${listOfDishes.map((dish,index)=>{
                return DishComponent(dish);
            }).join('')}
        </div>
    `;
    
}