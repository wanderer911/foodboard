import {PersonComponent} from './person.component.js';
import {alphabet} from './my.transform.js';

/*
@props.letter = string
@props.usersList = Array[]
*/
export function LetterComponent(props){
    const users = props.usersList[alphabet[props.letter]].map((user,index)=>{
        return PersonComponent(user);
    });
    const joinedUsers = users.join('');
    
    return `
        <div class="letter">
            <p class="letter__symbol">${alphabet[props.letter]}</p>
            ${joinedUsers}
        </div>
    `;
}