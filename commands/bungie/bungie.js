require('dotenv').config({path: '../../.env'});

// function to call bungie api in a certain path
module.exports = async function (method, path) {
    let request_path = process.env.BUNGIE_ROOT_URL + path;

    let xhr = new XMLHttpRequest();
    xhr.open(method, request_path, true);
    xhr.setRequestHeader("X-API-Key", apiKey);
}