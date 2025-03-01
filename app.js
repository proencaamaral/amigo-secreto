let listaAmigos = [];

function adicionarAmigo() {
    let input = document.querySelector("#amigo");
    let amigo = input.value.trim();

    if (amigo !== "") {
        listaAmigos.push(amigo); 
        atualizarLista(); 
        input.value = "";
    } else {
        alert("Digite um nome válido!");
    }
}

function atualizarLista() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = ""; 

    listaAmigos.forEach(amigo => {
        let item = document.createElement("li"); 
        item.textContent = amigo; 
        lista.appendChild(item); 
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para o sorteio!");
        return;
    }

    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)]; 
    document.querySelector("#resultado").innerHTML = `<li>🎉 O amigo sorteado é: <strong>${sorteado}</strong>!</li>`;
}
