import {LetterComponent} from './letter.component.js';

/*
@lettersList = {'letter':[{users}]}
*/
export function LettersComponent(lettersObject){
    return `
        <div class="container">
            ${Object.entries(lettersObject).map((el)=>{
                return LetterComponent({letter:el[0],usersList:el[1]});
            }).join('')}
        </div>
    `;
}

