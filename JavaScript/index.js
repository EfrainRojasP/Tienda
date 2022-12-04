const nombreUsuario = document.getElementById("nomUsuario");
const txtAreaComentario = document.getElementById("cajaComentaio");
const btnComentar = document.getElementById("comentar");
const divComentarioUsuario = document.getElementById("comentarios");

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
});

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