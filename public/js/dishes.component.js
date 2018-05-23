import {DishComponent} from './dish.components.js';
/*
dishes[{name,imageUrl,description,index}]
*/
export function DishesComponent(listOfDishes){
    if (!listOfDishes.length){
        return '';
    }
    return `
        <div class="dishes">
            ${listOfDishes.map((dish,index)=>{
                return DishComponent(dish,listOfDishes.length);
            }).join('')}
        </div>
    `;
}