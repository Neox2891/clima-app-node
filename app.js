const getLugar = require('./lugar/lugar').getLugar;
const getClima = require('./clima/clima').getClima;
const argv = require('./yargs/yargs').argv;

// getLugar(argv.direccion)
//     .then((res) => {
//         console.log(res.direccion);
//         console.log(res.latitud);
//         console.log(res.longitud);
//     })
//     .catch(err => console.log(err));

// getClima(11.0041072, -74.80698129999999)
//     .then(res => console.log(res))
//     .catch(err => console.log(err));
let getClimaLugar = async(direccion) => {

    try {
        let lugar = await getLugar(direccion);
        let temp = await getClima(lugar.latitud, lugar.longitud);

        return ` La temperatura de ${lugar.direccion} es de ${temp.main.temp}°C`;
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`
    }


}

getClimaLugar(argv.direccion)
    .then(res => console.log(res))
    .catch(err => console.log(err));