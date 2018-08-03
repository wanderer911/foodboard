export default function ({name,dishId}){
    return `
    <div class="person">
        <div class="person-info">
            <div class="person-name">${name}</div>
            <div class="person-dishnumber"><p>${dishId}</p></div>
        </div>
    </div>
    `;
}
