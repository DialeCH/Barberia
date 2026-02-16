const form = document.getElementById('reservaForm');
const loading = document.getElementById('loading');
const mensaje = document.getElementById('mensaje');
const mensajeTexto = document.getElementById('mensaje-texto');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const datos = Object.fromEntries(formData.entries());

    // Mostrar spinner
    loading.classList.remove('d-none');

    try {
        const response = await fetch('http://127.0.0.1:8000/citas', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos),
        });

        const resultado = await response.json();
        mostrarMensaje('success', resultado.mensaje || 'Cita reservada con éxito');
    } catch (error) {
        mostrarMensaje('danger', 'Error al reservar la cita. Intenta de nuevo.');
        console.error(error);
    } finally {
        // Ocultar spinner
        loading.classList.add('d-none');
    }
});

function mostrarMensaje(tipo, texto) {
    mensaje.className = `alert alert-${tipo} alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3`;
    mensajeTexto.textContent = texto;
    mensaje.classList.remove('d-none');

    // Ocultar automáticamente después de 5 segundos
    setTimeout(() => cerrarMensaje(), 5000);
}

function cerrarMensaje() {
    mensaje.classList.add('d-none');
}

async function cargarCitas() {
    try {
        const response = await fetch('http://127.0.0.1:8000/citas');
        const citas = await response.json();

        console.log('Citas:', citas);

        // Ejemplo: mostrar en una tabla
        const tabla = document.getElementById('tablaCitas');
        tabla.innerHTML = ''; // limpiar

        citas.forEach((cita) => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
        <td>${cita.nombre}</td>
        <td>${cita.servicio}</td>
        <td>${new Date(cita.fecha).toLocaleString()}</td>
        <td><button onclick="eliminarCita('${cita._id}')">Eliminar</button></td>
      `;
            tabla.appendChild(fila);
        });
    } catch (error) {
        console.error('Error al cargar citas:', error);
    }
}

async function eliminarCita(id) {
    try {
        const response = await fetch(`http://127.0.0.1:8000/citas/${id}`, {
            method: 'DELETE',
        });
        const resultado = await response.json();
        alert(resultado.mensaje);
        cargarCitas(); // recargar la tabla
    } catch (error) {
        console.error('Error al eliminar cita:', error);
    }
}
