import {DishComponent} from './dish.components.js';
/*
dishes[{name,imageUrl,description,index}]
*/
export function DishesComponent(listOfDishes){
    if (!listOfDishes.length){
        return '';
    }
    if(listOfDishes.length>24){
        let currentPage = true;
        setInterval(()=>{
            const dishesContainer = document.getElementsByClassName('dishes-container')[0];
            dishesContainer.innerHTML =  getDishes(listOfDishes);
            const pages = [listOfDishes.slice(0,24),listOfDishes.slice(24)];
            if(currentPage){
                dishesContainer.innerHTML =  getDishes(pages[1]);
            }else{
                dishesContainer.innerHTML =  getDishes(pages[0]);
            }
            currentPage = !currentPage;
        },5000);
        return getDishes(listOfDishes.slice(0,24));
    }else{
        return getDishes(listOfDishes);
    }
}


function getDishes(listofDishes){
    return `
        <div class="dishes">
            ${listofDishes.map((dish)=>{
                return DishComponent(dish, listofDishes.length);
            }).join('')}
        </div>
    `;
}