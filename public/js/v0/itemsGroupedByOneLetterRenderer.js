import itemRenderer from './itemRenderer.js'
import letterRenderer from './letterRenderer.js'

export default function (letter, items) {
    const firstItem = items[0]
    const otherItems = items.slice(1)

    return `
        <div>
            ${letterRenderer(letter)}
            ${itemRenderer(firstItem)}
        </div>
        ${otherItems ? otherItems.map(itemRenderer).join('') : ''}
    `;
}
