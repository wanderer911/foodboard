import {DishComponent} from './dish.components.js';
/*
dishes[{name,imageUrl,description,index}]
*/
export function DishesComponent(listOfDishes){
    if (!listOfDishes.length){
        return '';
    }
    let className;
    console.log(listOfDishes.length);
    if(listOfDishes.length>20){
        const additionalAmount = listOfDishes.slice(13).length/2;
        document.documentElement.style.setProperty(`--amount-of-dishes`, -60*additionalAmount.toFixed()+'px');
        //className = 'dish-container__more';
        // console.log(additionalAmount.toFixed(),listOfDishes.length,listOfDishes);
    }
    return `
        <div class="dishes ${className}">
            ${listOfDishes.map((dish,index)=>{
                return DishComponent(dish, listOfDishes.length);
            }).join('')}
        </div>
    `;
}
