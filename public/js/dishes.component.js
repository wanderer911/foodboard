import {DishComponent} from './dish.components.js';
/*
dishes[{name,imageUrl,description,index}]
*/
export function DishesComponent(listOfDishes){
    if (!listOfDishes.length){
        return '';
    }
    if(listOfDishes.length>24){
        const additionalAmount = listOfDishes.slice(24).length;
        if(additionalAmount%2 === 0 ){
            document.documentElement.style.setProperty(`--excess-amount-of-dishes`, -70*additionalAmount+'px');
        }else{
            document.documentElement.style.setProperty(`--excess-amount-of-dishes`, -70*(additionalAmount + 1)+'px');
        }
        document.documentElement.style.setProperty(`--slider-time`, 20+ additionalAmount*3 +'s' );
    }
    return `
        <div class="dishes">
            ${listOfDishes.map((dish)=>{
                return DishComponent(dish, listOfDishes.length);
            }).join('')}
        </div>
    `;
}
