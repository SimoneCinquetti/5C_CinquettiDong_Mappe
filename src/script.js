import { createForm } from "./components/form.js";
import { recuperoCoordinate } from "./libreriaMappa/recuperaMappa.js";

const box = createForm(document.getElementById("myForm"));
const cercatore= recuperoCoordinate("pk.f326f5668cf5027333107c0a38b8b71b")

box.setLabels({
    "Indirizzo" : "text",
});

box.onsubmit((labels) => {
    console.log(labels);
});

box.render();

cercatore.cercaCoordinate("Via Rovereto 14 Milano")

let map = L.map('map').setView([51.505, -0.09], 13);