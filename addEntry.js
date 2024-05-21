// Función para agregar una nueva entrada
function addEntry() {
    var entryInput = document.getElementById("entryInput").value;
    if (entryInput.trim() === "") {
        alert("Por favor, escribe algo en tu entrada.");
        return;
    }
    var currentDate = new Date();
    var timestamp = currentDate.toLocaleString();
    var entryHTML = '<div class="entry"><strong>' + timestamp + '</strong><p>' + entryInput + '</p><button onclick="publishEntry(this)">Publicar</button><button onclick="deleteEntry(this)">Borrar</button></div>';
    var entriesDiv = document.getElementById("entries");
    entriesDiv.innerHTML += entryHTML;
    // Función para cargar las entradas guardadas del almacenamiento local
    window.onload = function () {
        var savedEntries = JSON.parse(localStorage.getItem("entries"));
        if (savedEntries) {
            var entriesDiv = document.getElementById("entries");
            savedEntries.forEach(function (entry) {
                entriesDiv.innerHTML += entry;
            });
        }
    };

    // Función para agregar una nueva entrada
    function addEntry() {
        var entryInput = document.getElementById("entryInput").value;
        if (entryInput.trim() === "") {
            alert("Por favor, escribe algo en tu entrada.");
            return;
        }
        var currentDate = new Date();
        var timestamp = currentDate.toLocaleString();
        var entryHTML = '<div class="entry"><strong>' + timestamp + '</strong><p>' + entryInput + '</p><button onclick="publishEntry(this)">Publicar</button><button onclick="deleteEntry(this)">Borrar</button></div>';
        var entriesDiv = document.getElementById("entries");
        entriesDiv.innerHTML += entryHTML;

        // Guardar la nueva entrada en el almacenamiento local
        var savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
        savedEntries.push(entryHTML);
        localStorage.setItem("entries", JSON.stringify(savedEntries));

        document.getElementById("entryInput").value = "";
    }

    // Función para publicar una entrada
    function publishEntry(button) {
        var entry = button.parentNode;
        var publishedEntries = document.getElementById("publishedEntries");
        publishedEntries.appendChild(entry.cloneNode(true));
        entry.remove();
    }

    // Función para eliminar una entrada
    function deleteEntry(button) {
        var entry = button.parentNode;
        entry.remove();

        // Eliminar la entrada del almacenamiento local
        var savedEntries = JSON.parse(localStorage.getItem("entries"));
        var entryIndex = savedEntries.indexOf(entry.outerHTML);
        if (entryIndex !== -1) {
            savedEntries.splice(entryIndex, 1);
            localStorage.setItem("entries", JSON.stringify(savedEntries));
        }
    }

    // Guardar la nueva entrada en el almacenamiento local
    var savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
    savedEntries.push(entryHTML);
    localStorage.setItem("entries", JSON.stringify(savedEntries));

    document.getElementById("entryInput").value = "";
}
// Función para publicar una entrada
function publishEntry(button) {
    var entry = button.parentNode;
    var publishedEntries = document.getElementById("publishedEntries");
    publishedEntries.appendChild(entry.cloneNode(true));
    entry.remove();
}
// Función para eliminar una entrada
function deleteEntry(button) {
    var entry = button.parentNode;
    entry.remove();

    // Eliminar la entrada del almacenamiento local
    var savedEntries = JSON.parse(localStorage.getItem("entries"));
    var entryIndex = savedEntries.indexOf(entry.outerHTML);
    if (entryIndex !== -1) {
        savedEntries.splice(entryIndex, 1);
        localStorage.setItem("entries", JSON.stringify(savedEntries));
    }


}
// Función para agregar una nueva entrada
function addEntry() {
    var entryInput = document.getElementById("entryInput").value;
    if (entryInput.trim() === "") {
        alert("Por favor, escribe algo en tu entrada.");
        return;
    }
    var currentDate = new Date();
    var timestamp = currentDate.toLocaleString();
    var entryHTML = '<div class="entry"><strong>' + timestamp + '</strong><p>' + entryInput + '</p><button onclick="publishEntry(this)">Publicar</button><button class="delete-btn" onclick="deleteEntry(this)"><i class="fas fa-trash-alt"></i></button></div>';
    var entriesDiv = document.getElementById("entries");
    entriesDiv.innerHTML += entryHTML;

    // Guardar la nueva entrada en el almacenamiento local
    var savedEntries = JSON.parse(localStorage.getItem("entries")) || [];
    savedEntries.push(entryHTML);
    localStorage.setItem("entries", JSON.stringify(savedEntries));

    document.getElementById("entryInput").value = "";
}
