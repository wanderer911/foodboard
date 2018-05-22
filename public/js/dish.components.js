

export function DishComponent(dish){
    return `
    <div class="dish" style="background-image:url(${dish.imageUrl})">
        <p>${dish.index}</p>
    </div>
    `;
}