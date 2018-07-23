import {alphabet,colors} from './consts.js';

export default function ({name, dishId}, index){
    const [firstName, lastName] = name.split(' ')
    return `
        <div class="item b-${colors[alphabet.indexOf(firstName[0].toUpperCase())]}">
            <div class="item__name"> 
                <div class="item__first-name">
                    <p>${firstName}</p>
                </div>

                <div class="item__last-name">
                    <p>${lastName}</p>
                </div>
            </div>
            <div class="item__dish-index"> ${dishId} </div>
        </div>
        `;
}
