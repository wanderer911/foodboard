import {alphabet,colors} from './consts.js';

export default function (letter) {
    return `<div class="letter b-${colors[alphabet.indexOf(letter)]}"><p> ${letter} </p></div>`
}
