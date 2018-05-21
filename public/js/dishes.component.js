import {DishComponent} from './dish.components.js';

export function DishesComponent(listOfDishes){
    //if length
    const dishes = listOfDishes.map((dish,index)=>{
        return DishComponent(dish);
    });
    const joinedDishes = dishes.join('');
    return `
        <div class="dishes">
            ${joinedDishes}
        </div>
    `
    
}