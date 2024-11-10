const recuperoCoordinate = (keyCacheGeolocalizzatore) => {
    let keyCache=keyCacheGeolocalizzatore;
    return {
        cercaCoordinate : (indirizzo) => {
            let indirizzoFinale=indirizzo.replaceAll(" ","%20")
            let url= "https://eu1.locationiq.com/v1/search?q=#INDIRIZZO#&format=json&key=#KEYCACHE#"
            url=url.replace("#KEYCACHE#",keyCache);
            url=url.replace("#INDIRIZZO#",indirizzoFinale);
            console.log(url)
            fetch(url,
                {method: 'GET', headers: {accept: 'application/json'}}
            )
                .then(res => res.json())
                .then(res => console.log(res))
                .catch(err => console.error(err));
        }
    }
}

export {recuperoCoordinate}