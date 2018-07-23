import itemsGroupedByAlphabetLettersRenderer from './itemsGroupedByAlphabetLettersRenderer.js';
import {DishesComponent} from './dishes.component.js';

export default function({lettersObject: itemsGrouedpByLetters, listOfDishes}) {
    return `
        <div class="dishes-container">
            <div class="header">
                <div class="header-left-panel">
                    <div class="header-logo"></div>
                    <div class="header-title">Breakfast Dnipro</div>
                </div>
            <div class="header-empty"></div>
            <div class="header-right-panel">
                14:40
                <span>26C</span>
                <span class="icon"></span>
            </div>
        </div>
            ${DishesComponent(listOfDishes)}
        </div>
            ${itemsGroupedByAlphabetLettersRenderer(itemsGrouedpByLetters)}
         `;
}
