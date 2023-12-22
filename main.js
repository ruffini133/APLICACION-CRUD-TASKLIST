
document.addEventListener('DOMContentLoaded', function () {
    let tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
        document.getElementById('tareasContainer').innerHTML = tareasGuardadas;
    }
});

function agregarTarea() {
    let tarea = document.getElementById('taskInput').value;
    let nuevoParrafo = document.createElement('div');
    nuevoParrafo.innerHTML = '<input type="checkbox" onclick="eliminarEditarTarea(this)"> ' + tarea +
                        ' <button type="button" onclick="editarTarea(this)">Editar</button>';
    document.getElementById('tareasContainer').appendChild(nuevoParrafo);
    document.getElementById('taskInput').value = '';

    // Guardar tareas en localStorage
    guardarTareasEnLocalStorage();
}

function eliminarEditarTarea(checkbox) {
    let tarea = checkbox.parentNode;
    if (checkbox.checked) {
        tarea.parentNode.removeChild(tarea);
    } else {
        let textoActual = tarea.childNodes[1].nodeValue.trim();
        let nuevoInput = document.createElement('input');
        nuevoInput.type = 'text';
        nuevoInput.value = textoActual;
        tarea.childNodes[1].replaceWith(nuevoInput);

        let botonGuardar = document.createElement('button');
        botonGuardar.textContent = 'Guardar';
        botonGuardar.addEventListener('click', function() {
            let nuevoTexto = nuevoInput.value.trim();
            tarea.childNodes[1].replaceWith(document.createTextNode(nuevoTexto));
            tarea.removeChild(botonGuardar);

            // Guardar tareas en localStorage
            guardarTareasEnLocalStorage();
        });

        tarea.appendChild(botonGuardar);
        nuevoInput.focus();
    }

    // Guardar tareas en localStorage
    guardarTareasEnLocalStorage();
}

function editarTarea(botonEditar) {
    let tarea = botonEditar.parentNode;
    let textoActual = tarea.childNodes[1].nodeValue.trim();

    let nuevoInput = document.createElement('input');
    nuevoInput.type = 'text';
    nuevoInput.value = textoActual;
    tarea.childNodes[1].replaceWith(nuevoInput);

    let botonGuardar = document.createElement('button');
    botonGuardar.textContent = 'Guardar';
    botonGuardar.addEventListener('click', function() {
        let nuevoTexto = nuevoInput.value.trim();
        tarea.childNodes[1].replaceWith(document.createTextNode(nuevoTexto));
        tarea.removeChild(botonGuardar);

        // Guardar tareas en localStorage
        guardarTareasEnLocalStorage();
    });

    tarea.appendChild(botonGuardar);
    nuevoInput.focus();
}

function guardarTareasEnLocalStorage() {
    let tareas = document.getElementById('tareasContainer').innerHTML;
    localStorage.setItem('tareas', tareas);
}

function audio(){
    audio = document.getElementById('audio');

    audio.play();
}
