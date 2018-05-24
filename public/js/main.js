import {LettersContainer} from './letters.container.js';


let city;
(function (){
    const path = location.pathname.split('/')[1];
    const cities = ['ki','dp'];
    const index = cities.findIndex(el=> el === path);
    if (index === -1){
        city = 'dp';
    }else{
        city = cities[index];
    }
})();

const start = new LettersContainer(city);

start.setMenu().then(()=>{
    start.render();
});