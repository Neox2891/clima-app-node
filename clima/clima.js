const axios = require('axios');


let getClima = async(lat, lng) => {

    let res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=3dc77eb20193f0af4060b0b6f4cdd6ca`);
    // console.log(res.data);
    if (res.data.cod === '400') {
        throw new Error(`Error: ${resParse.message}`);
    }

    return {
        main: res.data.main
    }

}

module.exports = {
    getClima
}