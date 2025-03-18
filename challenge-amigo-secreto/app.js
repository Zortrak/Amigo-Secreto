let amigos = [];

function agregarAmigos(){
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.ariaValueMax.trim();
    
    if(nombreAmigo == ""){
        alert("Debes ingresar un nombre de amigo");
        return;
    }

    if (amigos.includes(nombreAmigo)){
        alert("El nombre ${nombreAmigo} ya esta en la lista");
        return;
        
    }

}