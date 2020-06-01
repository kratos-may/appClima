const {argv} = require("./config/yargs");
const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const location = encodeURI(argv.direccion);

const getInfo = async (direccion) =>{

    try {
        const coord = await lugar.getData(direccion);
        const temp = await clima.getClima(coord.lat,coord.lon);
        return `El clima de ${coord.direccion} es de ${temp}° celsius`;
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`
    }
}
getInfo(location)
    .then(console.log)
    .catch(console.log)