import {LettersContainer} from './letters.container.js';

const start = new LettersContainer('dp');

start.setMenu().then(()=>{
    start.render();
});