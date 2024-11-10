import { createForm } from "./components/form.js";
import { gestoreCoordinate } from "./libreriaMappa/gestioneMappa.js";

const box = createForm(document.getElementById("myForm"));

fetch("./config.json").then(r => r.json()).then((configuration) => {
    const cercatore= gestoreCoordinate(configuration.keyCache)

    let map = L.map('map').setView([45.27, 9.11], 8);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    box.setLabels({
        "Indirizzo" : "text",
    });
    
    box.onsubmit((labels) => {
        cercatore.aggiungiIndirizzo(labels[0])
        setTimeout(()=>{
            cercatore.elencoIndirizzi().forEach((place) => {
                const marker = L.marker(place.coords).addTo(map);
                marker.bindPopup(`<b>${place.name}</b>`);
             });
        },500)
    });
    
    box.render();

})