
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
        <p>${dish.index}</p>
    </div>
    `;
}