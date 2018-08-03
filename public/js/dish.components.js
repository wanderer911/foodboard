
/*
 dish {name,imageUrl,description,index}
*/
export function DishComponent(dish, lengthOfDishes) {
    return `
    <div class="dish-container">
        <div class="dish-image" style="background-image:url('${dish.imageUrl}');">
            <div class="dish-number">
                <div class="dish-number-inner"><p>${dish.index}</p></div>
            </div>
        </div>
        <div class="dish-description">
            <div class="dish-name">${dish.name}</div>
            <div class="dish-provider">${dish.supplier.name}</div>
        </div>
    </div>
    `;
}