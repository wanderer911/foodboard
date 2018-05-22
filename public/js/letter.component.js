import {PersonComponent} from './person.component.js';
import {alphabet} from './my.transform.js';

/*
@props.letter = string
@props.usersList = Array[]
*/
export function LetterComponent(props){
    if (props.usersList[alphabet[props.letter]].length){
        return `
            ${
                props.usersList[alphabet[props.letter]].map((user,index)=>{
                return PersonComponent(user,index);
                }).join('')
            }
            `;
    }
    return '';
}