const nombreUsuario = document.getElementById("nomUsuario");
const txtAreaComentario = document.getElementById("cajaComentaio");
const btnComentar = document.getElementById("comentar");
const divComentarioUsuario = document.getElementById("comentarios");

//Inicializamos el array
window.localStorage.setItem("comentarios", JSON.stringify([]));

class Comentario {
    nombreUsuario;
    comentario;
    /**
     * Constructor
     * @param {String} nombreUsuario Nombre del usuario
     * @param {String} comentario Comentario
     */
    constructor(nombreUsuario, comentario) {
        this.nombreUsuario = nombreUsuario;
        this.comentario = comentario;
    }
};

//btnComentar.disabled = true;
btnComentar.addEventListener("click", () =>{
    if(nombreUsuario.value.length === 0){
        alert("Ingresa el usuario");
        return;
    }
    if(txtAreaComentario.value.length === 0){
        alert("Debes comentar algo");
        return
    }
    comentar();
    guardarComentarios();
});

/**
 * Aparecer los comentarios
 */
function comentar() {
    const parrafoNomUsuario = document.createElement("p");
    const comentarioUsuario = document.createElement("p");
    const separador = document.createElement("hr");
    parrafoNomUsuario.innerHTML = nombreUsuario.value;
    comentarioUsuario.innerHTML = txtAreaComentario.value;
    divComentarioUsuario.appendChild(parrafoNomUsuario);
    divComentarioUsuario.appendChild(comentarioUsuario);
    divComentarioUsuario.appendChild(separador);
}

/**
 * Almacena los comentario en el localstorage
 */
function guardarComentarios() {
    const objComentario = new Comentario(nombreUsuario.value, txtAreaComentario.value);
    let arrComantarios = recuperarComentatios();
    arrComantarios.push(objComentario);
    window.localStorage.setItem("comentarios", JSON.stringify(arrComantarios));
}

/**
 * Recupera los comantarios del localstorage
 * @returns Devuelve un arreglo con los comentarios
 */
function recuperarComentatios() {
    let arrComantarios = JSON.parse(window.localStorage.getItem("comentarios"));
    return arrComantarios;
}