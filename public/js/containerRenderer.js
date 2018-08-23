import itemsGroupedByAlphabetLettersRenderer from './itemsGroupedByAlphabetLettersRenderer.js';
import {DishesComponent} from './dishes.component.js';
import timerComponent from './timer.js';



export default function({lettersObject: itemsGrouedpByLetters, listOfDishes}) {
    const weekdays = ['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday','Friday', 'Saturday'];
    return `
        <div class="header">
                <div class="header-left-panel">
                    <div class="header-logo"></div>
                    <div class="header-title">Breakfast Dnipro</div>
                </div>
            
            <div class="header-empty"></div>
            <div class="header-right-panel">${weekdays[(new Date()).getDay()]}</div> 
            <div class="header-right-panel" id="time">
                ${timerComponent()}
            </div>
        </div>

        <div class="dishes-container">
            ${DishesComponent(listOfDishes)}
        </div>

        ${itemsGroupedByAlphabetLettersRenderer(itemsGrouedpByLetters)}
         `;
}