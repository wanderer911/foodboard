const alphabetString ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const alphabet = alphabetString.split('');

export function transform(usersOrders){
    const usersList = generateAllUsersList(usersOrders);
    const lettersObject = fillLettersObject(generateLettersObject(),usersList);
    const listOfDishes = generateListOfDishes(usersOrders);
    return {lettersObject, listOfDishes, usersList};
}

//return sorted users list
function generateAllUsersList(usersOrders){
    const allUsersList = usersOrders.reduce((accumulator,current,index)=>{
        const users = current.users.map(user=>{
            return {...user,dishId:index};
        });
        return [...accumulator,...users];
    },[]);
    allUsersList.sort((a,b)=>{
        if(a.name < b.name){ return -1; }
        if(a.name > b.name){ return 1; }
        return 0;
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
        const letter = alphabet.findIndex(l=> l === person.name[0].toUpperCase());
        lettersObject[letter][person.name[0].toUpperCase()].push(person);
    });
    return lettersObject;// {letter:[user],}
}

function generateListOfDishes(usersOrders){
    return usersOrders.map((dish,index)=>{
        const {name,imageUrl,description} = dish;
        return {name,imageUrl,description,index};
    });
}

