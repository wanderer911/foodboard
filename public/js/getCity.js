const cities = ['ki','dp'];
const defaultCity = 'dp'

export default function () {
    const city = location.pathname.split('/')[1];
    if (cities.includes(city)) {
        return city
    }
    return defaultCity
}
