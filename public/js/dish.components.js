
/*
 dish {name,imageUrl,description,index}
*/
export function DishComponent(dish, lengthOfDishes) {
    let index;
    if(dish.index %2 === 0){//first row
        index = dish.index/2;
    }else {//second row
        index = ((lengthOfDishes/2)+(dish.index/2)).toFixed();
    }
    return `
    <div class="dish-container">
        <div class="dish-image" style="background-image:url('${dish.imageUrl}');">
            <div class="dish-number">
                <div class="dish-number-inner"><p>${+index+1}</p></div>
            </div>
        </div>
        <div class="dish-description">
            <div class="dish-name">${dish.name}</div>
            <div class="dish-provider">${dish.supplier.name}</div>
        </div>
    </div>
    `;
}