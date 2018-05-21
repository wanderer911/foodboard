// main.js
const alphabetString ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const alphabet = alphabetString.split('');

//city?
async function testMainGenerate(num=100,city='dp'){
    const personsList = generatePersonsList(num);
    let users;
    try {
        users = await getUserFromMenu(city);
        users
    }catch(e){
        console.log(e);
    }

}

function getMenu(city){
    return fetch('https://frozen-hamlet-77034.herokuapp.com/api/userOrders/today?location='+city)
    .then(result=>(result.json())).catch(e=>({error:e}))
}
/*
async function getUserFromMenu(city){
    return new Promise((resolve,reject)=>{
        try{
            const users = [];
            const menu = await getMenu(city);
            menu.forEach((food,index)=>{
                const usersList = food.users.map(user=>{
                    return {...user,number:index};
                });
                users =[...users,...usersList];
            });
            resolve(users);
        } catch(e){
            console.log({error:e});
            reject({error:e});
        }
    });
}
*/

//mock start
/*
function generatePersonsList(num){
    return new Array(num).fill().map((item,index)=>{
        const randomLetter = Math.random()*26;
        const letterNumber = +randomLetter.toString().split('.')[0];
        const randomFood = Math.random()*20;
        const foodNumber = +randomFood.toString().split('.')[0];
        return {foodNumber,username:alphabet[letterNumber]+'riedrich Abromavichus'};
    });
}
*/

function generateLettersObject(){
    return alphabet.map(letter=>{
        return {[letter]:[]}
    });
}

function fillLettersObject(lettersObject,personsList){
    personsList.forEach((person,index)=>{
        const letter = alphabet.findIndex(l=> l === person.username[0]);
        lettersObject[letter][person.username[0]].push(person);
    });
    return lettersObject;
}
