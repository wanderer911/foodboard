const alphabetString ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const alphabet = alphabetString.split('');

export function transform(menu){
    const lettersObject = fillLettersObject(generateLettersObject(),generateAllUsersList(menu));
    const listOfDishes = generateListOfDishes(menu);
    return {lettersObject,listOfDishes};
}

function generateAllUsersList(usersOrders){
    let allUsersList = [];
    usersOrders.forEach((order,index)=>{
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
    console.log(personsList);
    personsList.forEach((person,index)=>{
        const letter = alphabet.findIndex(l=> l === person.name[0]);
        lettersObject[letter][person.name[0]].push(person);
    });
    return lettersObject;// {letter:[user],}
}

function generateListOfDishes(menu){
    return menu.map((dish,index)=>{
        const {name,imageUrl,description} = dish;
        return {name,imageUrl,description,index};
    });
}

