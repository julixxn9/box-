const caja = document.getElementById("cajaComentarios");

const comentarios_yutu = [];

const comentarios = {
    persona: "@juliaaan",
    comentario: "hola"
};

function enviarComentario(event){
    event.preventDefault();
    let input = document.getElementById("comentarEnviar").value
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

    document.getElementById("comentar").value = "";
    caja.innerHTML = "";
    comentarios_yutu.forEach(
        (comentarios) => {
            caja.innerHTML += `
    <div id="comentar">
            <h3>
                ${comentarios.persona}
            </h3>
            <p class= "texto">
                ${comentarios.comentario}
            </p> 
        </div>
    `
        }
    )

    

}