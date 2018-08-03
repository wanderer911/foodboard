export default function(){
    setInterval(()=>{
        const string = getFormatedDate();
        const element = document.getElementById('time');
        element.innerHTML = string;
        },1000
    )
    return getFormatedDate();
}


function getFormatedDate(){
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const string = `${hours.toString().length === 2? hours:`0${hours}`}:${minutes.toString().length === 2?minutes:`0${minutes}`}`;
    return string;
}