import { createModalForm } from "./components/modalForm.js";

const box = createModalForm(document.getElementById("modal-bd"));

box.setLabels({
    "Indirizzo" : [
        "text", 
        null
    ]
});

box.onsubmit((values) => {
    
});

box.render();