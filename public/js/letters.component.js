import {LetterComponent} from './letter.component.js';

/*
@lettersList = {'letter':[{users}]}
*/
export function LettersComponent(lettersObject,lengthUsers){
    const lettersList = Object.entries(lettersObject)
    return `
        <div class="container">
            ${lettersList.map((el)=>{
                return LetterComponent({letter:el[0],usersList:el[1],lengthUsers});
            }).join('')}
        </div>
    `;
}

