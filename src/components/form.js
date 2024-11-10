/*
Struttura dizionario
{
    "etichetta" : [
        "tipo",
        [valore1, valore2, valore3]
    ]
}
*/

const createForm = (parentElement) => {
let data;
let callback = null;

return {
    setLabels: (labelsAndType) => {
        data = labelsAndType;
    },
    onsubmit: (callbackInput) => {
        callback = callbackInput
    },
    render: () => {
        let html = "";
        for (let key in data) {
            html += `<div class="form-group">
                        <label for="${key}">${key}</label>
                        <input id="${key}" placeholder="${key}" type="${data[key]}"/>
                     </div>`;
        }

        html += `<button type="button" id="cercare" class="btn btn-primary">Cerca</button>`;

        parentElement.innerHTML = html;

        document.querySelector("#cercare").onclick = () => {
            const result = Object.keys(data).map((name) => {
                return document.querySelector("#" + name).value;
            });

            Object.keys(data).forEach(e => document.querySelector("#" + e).value = "")

            callback(result);
        }
    }
}
}

export { createForm };



