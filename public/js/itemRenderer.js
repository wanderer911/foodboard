export default function ({name,dishId}){
    return `
    <div class="person">
        <div class="person-info">
            <div class="person-name">${name}</div>
            <div class="person-dishnumber"><p>${dishId+1}</p></div>
        </div>
    </div>
    `;
}
