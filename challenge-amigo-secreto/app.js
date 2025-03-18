let amigos = [];

function agregarAmigos() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo === "") {
        alert("Debes ingresar un nombre de amigo");
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert(`El nombre ${nombreAmigo} ya está en la lista`);
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = ""; // Limpiar el input

    actualizarLista();
}

function actualizarLista() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigos() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista, debes agregar al menos uno");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo Sorteado: <strong>${amigoSorteado}</strong>`;
}
