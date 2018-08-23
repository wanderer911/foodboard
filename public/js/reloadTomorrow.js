export default () => {
  const getDay = () => (new Date()).getDay() 
  const today = getDay()
  const interval = 1000 * 60 * 60;

  setInterval(() => {
   if (getDay() !== today) {
     location.reload()
   }
  }, interval)

}
