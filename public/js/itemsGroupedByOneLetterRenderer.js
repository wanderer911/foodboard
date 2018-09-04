import itemRenderer from './itemRenderer.js'
import letterRenderer from './letterRenderer.js'

export default function (letter, items,length) {
    items = items.map(item=>{
        if(item.dishId %2 === 0){//first row
            item.dishId = item.dishId/2+1;
        }else {//second row
            item.dishId = +((length/2)+(item.dishId/2)).toFixed()+1;
        }
        return item;
    });
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
