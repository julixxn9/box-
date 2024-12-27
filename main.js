const caja = document.getElementById("cajaComentarios");

const comentarios_yutu = [];

// Enviar nuevo comentario
function enviarComentario(event) {
    event.preventDefault();
    let input = document.getElementById("comentarEnviar").value;

    if (input.trim() === "") {
        alert("No puedes enviar un comentario vacío. Intenta llenarlo.");
        return;
    }

    // Crear el nuevo comentario
    const nuevoComentario = {
        persona: "@juliaaan",
        comentario: input,
        reacciones: {
            like: false,
            dislike: false,
            coment: false,
            favorite: false,
            report: false,
            deteled: false
        }
    };

    // Agregar al array y limpiar el campo
    comentarios_yutu.push(nuevoComentario);
    document.getElementById("comentarEnviar").value = "";

    renderComentarios();
}

// Renderizar comentarios
function renderComentarios() {
    caja.innerHTML = ""; // Limpiar el contenedor

    comentarios_yutu.forEach((elemento, indice) => {
        const { persona, comentario, reacciones } = elemento;

        // Control de clases dinámicas
        const estaBorrado = reacciones.deteled ? 'coment-deteled' : '';
        const estaReportado = reacciones.report ? 'coment-report' : '';

        // Botones de menú dinámicos
        const borrarTexto = reacciones.deteled ? 'Restaurar' : 'Borrar';
        const reportarTexto = reacciones.report ? 'Liberar' : 'Reportar';

        // Agregar el HTML del comentario
        caja.innerHTML += `
            <div id="comentario_${indice}" class="comentar ${estaBorrado} ${estaReportado}">
                <div class="header_comment">
                    <div class="user">
                        <img src="./img/png-transparent-user-instagram-person-profile-instagram-ui-glyph-icon-removebg-preview.png" alt="user">
                        <h3>${persona}</h3>
                    </div>
                    <label class="menu">
                        <input type="checkbox" onchange="mostrarMenu(event)">
                        <ul>
                            <li onclick="modificarComentario(${indice})">Modificar</li>
                            <li onclick="deteledComentario(event, ${indice})">${borrarTexto}</li>
                            <li onclick="reportComentario(event, ${indice})">${reportarTexto}</li>
                        </ul>
                    </label>
                </div>
                <p class="texto">${comentario}</p>
                <div class="iteraciones">
                    <ul>
                        <label>
                            <input type="checkbox" onchange="like(event, ${indice})" ${reacciones.like ? "checked" : ""}>
                            <img src="./img/hand-thumbs-up${reacciones.like ? "-fill" : ""}.svg" alt="like">
                        </label>
                        <label>
                            <input type="checkbox" onchange="dislike(event, ${indice})" ${reacciones.dislike ? "checked" : ""}>
                            <img src="./img/hand-thumbs-down${reacciones.dislike ? "-fill" : ""}.svg" alt="dislike">
                        </label>
                        <label>
                            <input type="checkbox" onchange="comment(event, ${indice})" ${reacciones.coment ? "checked" : ""}>
                            <img src="./img/chat-left-text${reacciones.coment ? "-fill" : ""}.svg" alt="comment">
                        </label>
                        <label>
                            <input type="checkbox" onchange="favorito(event, ${indice})" ${reacciones.favorite ? "checked" : ""}>
                            <img src="./img/suit-heart${reacciones.favorite ? "-fill" : ""}.svg" alt="favorite">
                        </label>
                    </ul>
                </div>
            </div>
        `;
    });
}

// Mostrar menú
function mostrarMenu(event) {
    const menu = event.target.closest("label").querySelector("ul");
    menu.style.visibility = event.target.checked ? "visible" : "hidden";
}

// Reacciones
function like(event, index) {
    const img = event.target.closest("label").querySelector("img");
    comentarios_yutu[index].reacciones.like = event.target.checked;
    img.src = `./img/hand-thumbs-up${event.target.checked ? "-fill" : ""}.svg`;
}

function dislike(event, index) {
    const img = event.target.closest("label").querySelector("img");
    comentarios_yutu[index].reacciones.dislike = event.target.checked;
    img.src = `./img/hand-thumbs-down${event.target.checked ? "-fill" : ""}.svg`;
}

function comment(event, index) {
    const img = event.target.closest("label").querySelector("img");
    comentarios_yutu[index].reacciones.coment = event.target.checked;
    img.src = `./img/chat-left-text${event.target.checked ? "-fill" : ""}.svg`;
}

function favorito(event, index) {
    const img = event.target.closest("label").querySelector("img");
    comentarios_yutu[index].reacciones.favorite = event.target.checked;
    img.src = `./img/suit-heart${event.target.checked ? "-fill" : ""}.svg`;
}

// Modificar, borrar y reportar
function modificarComentario(index) {
    const nuevoTexto = prompt("Modifica tu comentario:", comentarios_yutu[index].comentario);
    if (nuevoTexto) {
        comentarios_yutu[index].comentario = nuevoTexto;
        renderComentarios();
    }
}

function deteledComentario(event, index) {
    comentarios_yutu[index].reacciones.deteled = !comentarios_yutu[index].reacciones.deteled;
    renderComentarios();
}

function reportComentario(event, index) {
    comentarios_yutu[index].reacciones.report = !comentarios_yutu[index].reacciones.report;
    renderComentarios();
}
