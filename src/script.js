import { createForm } from "./components/form.js";

const box = createForm(document.getElementById("myForm"));

box.setLabels({
    "Indirizzo" : "text",
});

box.onsubmit((labels) => {
    console.log(labels);
});

box.render();