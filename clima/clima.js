const axios = require("axios").default;
const {api_key} = require("../config/claves")
const getClima = async (lat,lon) =>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`)
    return resp.data.main.temp;

}

module.exports = {
    getClima
}