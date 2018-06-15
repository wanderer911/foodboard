export default function ({name, dishId}, index){
    const [firstName, lastName] = name.split(' ')
    return `
        <div class="item">
            <div class="item__name"> 
                <div class="item__first-name">
                    ${firstName}
                </div>

                <div>
                    ${lastName}
                </div>
            </div>
            <div class="item__dish-index"> ${dishId} </div>
        </div>
        `;
}
