import {LetterComponent} from './letter.component.js';

/*
@lettersList = {'letter':[{users}]}
*/
export function LettersComponent(lettersObject){
    const list = Object.entries(lettersObject);
    const lettersList = list.map((el)=>{
        return LetterComponent({letter:el[0],usersList:el[1]});
    });
    const joinedList = lettersList.join('');
    return `
        <div class="container">
            ${joinedList}
        </div>
    `;
}

