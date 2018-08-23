// export default () => {
//   const getDay = () => (new Date()).getDay()
//   const today = getDay()
//   const interval = 1000 * 60 * 60;

//   setInterval(() => {
//     if (getDay() !== today) {
//       location.reload()
//     }
//   }, interval)

// }


export default ()=>{
  const startDate = (() => {
    const date = new Date();
    return () => date
  })();
  const refreshDate = new Date();
  if (startDate().getHours() > 7) {
    refreshDate.setDate(startDate().getDate() + 1);
    refreshDate.setHours(8);
    refreshDate.setMinutes(0);
    refreshDate.setSeconds(0)
  } else {
    refreshDate.setHours(8)
    refreshDate.setMinutes(0);
    refreshDate.setSeconds(0)
  }
  setTimeout(()=>{
    location.reload();
  },refreshDate.getTime()-startDate().getTime());
}

