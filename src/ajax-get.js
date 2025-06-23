import React from "react";

const catsAPIUrl = 'https://api.thecatapi.com/v1/images/search?limit=20';

export const ajaxGet = (callback) => {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            let data;
            try {
                data = JSON.parse(xmlhttp.responseText);
            } catch (err) {
                console.log(err.message + ' in ' + xmlhttp.responseText);
                return;
            }
            callback(data);
        }
    };

    xmlhttp.open("GET", catsAPIUrl, true);
    xmlhttp.send();
}

export default ajaxGet;
