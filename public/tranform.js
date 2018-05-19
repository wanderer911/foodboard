function transform() {
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

fetch(URL).then(transform).then(boardRenderer)