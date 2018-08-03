export default function(){
    return setInterval(()=>{
        const currentDate = new Date();
        const string = `${currentDate.getHours()}:${currentDate.getMinutes()}`;
        console.log(string);
        const element = document.getElementsByClassName('header-right-panel')[0];
        element.innerHTML = string;
        },10000
    )
}


