import itemRenderer from './itemRenderer.js'
import letterRenderer from './letterRenderer.js'

export default function (letter, items) {
    const firstItem = items[0];
    const otherItems = items.slice(1);
    return `
    <div class="letter-container">
        <div class="person">
            ${letterRenderer(letter)}
            <div class="person-info">
                <div class="person-name">${firstItem.name}</div>
                <div class="person-dishnumber"><p>${firstItem.dishId}</p></div>
            </div>
            
        </div>
        ${otherItems ? otherItems.map(itemRenderer).join('') : ''}
    </div>
   

    `;
}

    // <div>
    //     ${letterRenderer(letter)}
    //     ${itemRenderer(firstItem)}
    // </div>
    // ${otherItems ? otherItems.map(itemRenderer).join('') : ''}


// {<div class="letter-container">
// <div class="person">
//     <div class="letter">A</div>
//     <div class="person-info">
//         <div class="person-name">Hello world</div>
//         <div class="person-dishnumber"><p>40</p></div>
//     </div>
// </div>
// </div>}


{/* <div class="letter-container">
    <div class="person">
        <div class="letter">A</div>
        <div class="person-info">
            <div class="person-name">Hello world</div>
            <div class="person-dishnumber"><p>40</p></div>
        </div>
    </div>
</div> */}