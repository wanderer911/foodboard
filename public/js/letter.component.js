
import {PersonComponent} from './person.component.js';

/*
@props.letter = string
@props.usersList = Array[]
*/
export function LetterComponent(props){
    const users = props.usersList.map((user,index)=>{
        return PersonComponent(user);
    });
    const joinedUsers = users.join('');
    return `
        <div class="letter">
            <p class="letter__symbol">${props.letter}</p>
            ${joinedUsers}
        </div>
    `;
}