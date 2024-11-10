const gestoreCoordinate = (keyCacheGeolocalizzatore) => {
    let keyCache=keyCacheGeolocalizzatore;
    let indirizzi=[]
    return {
        aggiungiIndirizzo : (indirizzo) => {
            return new Promise (() => {
            let indirizzoFinale=indirizzo.replaceAll(" ","%20")
            let url= "https://eu1.locationiq.com/v1/search?q=#INDIRIZZO#&format=json&key=#KEYCACHE#"
            url=url.replace("#KEYCACHE#",keyCache);
            url=url.replace("#INDIRIZZO#",indirizzoFinale);
            fetch(url,{method: 'GET', headers: {accept: 'application/json'}} )
                .then(res => res.json())
                .then((res)=> {
                    let dizionario={
                        "name" : indirizzo,
                        "coords" : [res[0].lat,res[0].lon]
                    }
                    indirizzi.push(dizionario)
                })
                .catch(err => console.error(err));
            })
        },
        elencoIndirizzi : () => {
            return indirizzi
        }
    }
}

export {gestoreCoordinate}