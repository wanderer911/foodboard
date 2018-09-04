import itemsGroupedByOneLetterRenderer from './itemsGroupedByOneLetterRenderer.js'

export default function (itemsGroupedByLetters,length){
    
    return `
    <div class="letters-list">
        ${
            itemsGroupedByLetters.reduce((components, oneLetterItems) => {
                const letter = Object.keys(oneLetterItems)[0]
                const items = oneLetterItems[letter]
                return items.length ? components.concat(itemsGroupedByOneLetterRenderer(letter, items,length)) : components
            }, [])
            .join('')
        }
        </div>
    `;
}

