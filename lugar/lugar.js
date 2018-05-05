const axios = require('axios');

let getLugar = async(lugar) => {

    let encodedUrl = encodeURI(lugar);

    let res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}`);

    // console.log(JSON.stringify(res.data, null, 2));
    // console.log(res.data);
    if (res.data.status === 'ZERO_RESULTS') {
        throw new Error(`No se encontraron datos para ${lugar}`);
    }
    let selector = res.data.results[0];
    let direccion = selector.formatted_address;
    let latitud = selector.geometry.location.lat;
    let longitud = selector.geometry.location.lng;

    return {
        direccion,
        latitud,
        longitud
    };

}

module.exports = {
    getLugar
}