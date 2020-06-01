const axios = require("axios").default;

const getData = async (location) =>{
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${location}`,
        headers: {'X-RapidAPI-Key':'0ebcff3c7emsh7228fbb286884cdp105ec0jsn164cbad833e5'}
    });
    const resp = await instance.get()
    if(resp.data.Results.length===0){
        throw new Error(`No hay resultados para: ${location}`);
    }
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;
    return {
        direccion,
        lat,
        lon
    }
}
module.exports= {
    getData
}