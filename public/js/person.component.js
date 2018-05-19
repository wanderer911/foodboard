/*<div class="person">
<div class="person__textbar">
  <p>
   Stepan Petrovskis
  </p>
</div>
<div class="food-number">
  <p>34</p>
</div>
</div>
*/
/*
@props.usersname = string
@props.foodNumber = numbers
*/
export function PersonComponent(props){
    return `
    <div class="person">
        <div class="person__textbar">
            <p>${props.username}</p>
        </div>
        </div class="person__food-number">
            <p>${props.foodNumber}</p>
        </div>
    </div>
    `;
}