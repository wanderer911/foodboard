/*
function transform() {
    let allUsersList = [];
    userOrders.forEach((order,index)=>{
        const users = order.users.map(user=>{
            return {...user,dishId:index};
        });
        allUsersList = [...allUsersList,users];
    });

    return {
        listOfDishes: [
            {
                name,
                imageUrl,
                description,

            }
        ],
        listOfAlphabetSections: [{
            letter: 'a',
            orders: [
                {
                    name: 'Vasya',
                    dishIndex: 12
                }
            ]
        }]
    }
}
*/

fetch(URL).then(transform).then(boardRenderer);

function getMenu(city){
    return fetch('https://frozen-hamlet-77034.herokuapp.com/api/userOrders/today?location='+city)
    .then(result=>(result.json())).catch(e=>({error:e}))
}

function generateAllUsersList(usersOrders){
    let allUsersList = [];
    userOrders.forEach((order,index)=>{
        const users = order.users.map(user=>{
            return {...user,dishId:index};
        });
        allUsersList = [...allUsersList,...users];
    });
    return allUsersList;
}

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
    return lettersObject;// {letter:[user],}
}

function generateListOfDishes(menu){
    return menu.map(dish=>{
        const {name,imageUrl,description} = dish;
        return {name,imageUrl,description};
    });
}

function transform(menu){
    const lettersObject = fillLettersObject(generateLettersObject(),generateAllUsersList(menu));
    const listOfDishes = generateListOfDishes(menu);
    return {lettersObject,listOfDishes};
}

try {
    const menu = await getMenu('dp');
    const lettersObject = fillLettersObject(generateLettersObject(),generateAllUsersList(menu));
    const listOfDishes = generateListOfDishes(menu);
} catch (e){
    console.log(e);
}
