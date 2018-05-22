const alphabetString ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
export const alphabet = alphabetString.split('');

export function transform(menu){
    // const lettersObject = fillLettersObject(generateLettersObject(),generateAllUsersList(menu));
    // const listOfDishes = generateListOfDishes(menu);
    // return {lettersObject,listOfDishes};

    const usersList = generateAllUsersList(menu)
    const listOfDishes = generateListOfDishes(menu)
    const boardStructure = createBoardStructure(usersList)

    return {boardStructure, listOfDishes}
}

function generateAllUsersList(menu){
    let allUsersList = [];
    menu.forEach((order,index)=>{
        const users = order.users.map(user=>{
            return {...user,dishId:index};
        });
        allUsersList = [...allUsersList,...users];
    });
    return allUsersList;
}

const generateAllUsersList2 = menu =>
    menu.reduce((usersList, order, orderIndex) => 
        usersList.concat(
            order.users.map(user => ({...user, dishId: orderIndex}))
        )
    , []);

function createBoardStructure(usersList) {
    const alhpabetSort = (userA, userB) => userA.name[0] > userB.name[0]

    return usersList.sort(alhpabetSort).reduce((boardStructure, user) => {
        const letter = user.name[0].lowercase()

        if (!boardStructure[letter]) {
            boardStructure[letter] = []
        }

        boardStructure[letter].push(user)
    }, {})
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
    return menu.map(({name,imageUrl,description}, index)=> ({name,imageUrl,description,index})
    );
}

