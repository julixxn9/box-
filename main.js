const caja = document.getElementById("cajaComentarios");

const comentarios_yutu = [];

const comentarios = {
    persona: "@juliaaan",
    comentario: ""
};

function enviarComentario(event){
    event.preventDefault();
    let input = document.getElementById("comentarEnviar").value

    if (input.replaceAll(" ", "") === ""){
        document.getElementById("comentarEnviar").value.innerHTML = "";
        alert("no puedes enviar un comentario vacio, intenta llenarlo");
        return;
        
    }

    //cheked evento para ver si esta el input de boton verificado y asi
    //target, clossed, quarySelector
    //ver quien produjo el evento, clossed para ir al elemento padre mas cercano y quarySelector para ir a la imagen hija mas cercana 
    //son eventos a usar 
    
    comentarios.comentario = input;
    // console.log(`${comentarios.comentario}`)
    // push es para agregar al final del arreglo un comentario
    // push en general sirve para colocar elementos al final de un arreglo
    comentarios_yutu.push(
        {
            persona: comentarios.persona,
            comentario: comentarios.comentario
        }
    )
    caja.innerHTML = "";
    comentarios_yutu.forEach(
        (comentarios) => {
            caja.innerHTML += `
            <div id="comentar">
                        <div class="header_comment">
                <div class="user">
                        <img src="./img/png-transparent-user-instagram-person-profile-instagram-ui-glyph-icon-removebg-preview.png" alt="user">
                <h3>${comentarios.persona}</h3>
            </div>
            <label class="menu">
                <input type="checkbox" onchange="mostrarMenu(event)">
                <ul>
                    <li>modificar</li>
                    <li>borrar</li>
                    <li>reporte</li>
                </ul>
            </label>
        </div>
            <p class="texto">${comentarios.comentario}</p>
            </div>
            `
        }
    )
    document.getElementById("comentarEnviar").value = "";
}

function mostrarMenu(event){
    // console.log(event.target)
    if (event.target.checked){
        event.target.closest("label").querySelector("ul").style.visibility = "hidden";
    }else{
        event.target.closest("label").querySelector("ul").style.visibility = "visible";

    }
}
