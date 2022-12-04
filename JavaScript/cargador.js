function cargarComentarios() {
    //Array de comentarios, extraidos del localstorage
    const comentarios = JSON.parse(window.localStorage.getItem("comentarios"));
    if (comentarios.length === 0) {
        return;
    }
    const divComentarioUsuario = document.getElementById("comentarios");
    insertarComentarios(comentarios, divComentarioUsuario);
    console.log(comentarios[0].nombreUsuario);
}

function insertarComentarios(array, divComentarioUsuario) {
    for (const item of array) {
        const parrafoNomUsuario = document.createElement("p");
        const comentarioUsuario = document.createElement("p");
        const separador = document.createElement("hr");
        parrafoNomUsuario.innerHTML = item.nombreUsuario;
        comentarioUsuario.innerHTML = item.comentario;
        divComentarioUsuario.appendChild(parrafoNomUsuario);
        divComentarioUsuario.appendChild(comentarioUsuario);
        divComentarioUsuario.appendChild(separador);
    }
}

function main() {
    cargarComentarios();
}

main();

