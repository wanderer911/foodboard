
/*
 dish {name,imageUrl,description,index}
*/
export function DishComponent(dish,lengthOfDishes){
    let additionalClass = '';
    if(lengthOfDishes<30){
        additionalClass ='dishes-few';
    }
    return `
    <div class="dish ${additionalClass}" style="background-image:url(${dish.imageUrl})">
        <div class="dish__container"></div>
        <div class="dish__info"> 
            <div class="dish__upper-info">
                <div class="item__dish-index dish__info__number">${dish.index}</div>
                <div class="dish__info__name">${dish.name}</div>
            </div>
            <div class="dish__info__supplier">${dish.supplier.name}</div>
        </div>
    </div>
    `;
}