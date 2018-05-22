/*
@props.usersname = string
@props.foodNumber = numbers
@index = 
*/
export function PersonComponent(props,index){
    if(!index){
        return `
        <div>
            <p class="letter__symbol">${props.name[index]}</p>
            <div class="person">
                <div class="person__textbar">
                    <p>${props.name}</p>
                </div>
                <div class="person__food-number">
                    <p>${props.dishId}</p>
                </div>
            </div>
        </div>
        `;
    }
    return `
    <div class="person">
        <div class="person__textbar">
            <p>${props.name}</p>
        </div>
        <div class="person__food-number">
            <p>${props.dishId}</p>
        </div>
    </div>
    `;
}