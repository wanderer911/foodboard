import itemsGroupedByAlphabetLettersRenderer from './itemsGroupedByAlphabetLettersRenderer.js';
import {DishesComponent} from './dishes.component.js';

export default function({lettersObject: itemsGrouedpByLetters, listOfDishes}) {
    return `
            ${itemsGroupedByAlphabetLettersRenderer(itemsGrouedpByLetters)}
            ${DishesComponent(listOfDishes)}
         `;
}
