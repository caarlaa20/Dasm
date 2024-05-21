var entryCount = 0;
var entries = JSON.parse(localStorage.getItem('entries')) || [];

window.onload = function() {
    cargarEntradas();
}

function guardarEntrada() {
    var entrada = document.getElementById("entry").value;
    if (entrada.trim() !== "") {
        var entryItem = {
            id: entryCount,
            content: entrada,
            date: obtenerFechaActual()
        };
        entryCount++;
        entries.push(entryItem);
        localStorage.setItem('entries', JSON.stringify(entries));
        mostrarEntrada(entryItem);
        document.getElementById("entry").value = "";
    } else {
        alert("¡No puedes guardar una entrada vacía!");
    }
}

function cargarEntradas() {
    for (var i = 0; i < entries.length; i++) {
        mostrarEntrada(entries[i]);
    }
}

function mostrarEntrada(entry) {
    var entryItem = document.createElement("div");
    entryItem.classList.add("entry-item");
    entryItem.innerHTML = "<div class='day-label'>Día " + entry.id + " - " + entry.date + "</div>" +
        "<div>" + entry.content + "</div>" +
        "<button class='delete-btn' onclick='borrarEntrada(" + entry.id + ")'>Borrar</button>";
    document.getElementById("entries").appendChild(entryItem);
}

function borrarEntrada(id) {
    entries = entries.filter(function(entry) {
        return entry.id !== id;
    });
    localStorage.setItem('entries', JSON.stringify(entries));
    document.getElementById("entries").innerHTML = "";
    cargarEntradas();
}

function obtenerFechaActual() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0!
    var yyyy = today.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
}
