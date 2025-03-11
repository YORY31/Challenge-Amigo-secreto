// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const Friends = [];//array de amigos

function AddFriend() {
  ///caprurar el valor del campo de entrada
    let friend = document.getElementById("amigo").value;
    if (friend == "") {
        alert("Por favor ingresa el nombre del amigo");
    }else{
        Friends.push(friend);
        document.getElementById("amigo").value = "";
        document.getElementById("amigo").focus();
        alert("Amigo agregado correctamente");
        console.log(Friends);

        UpdateList();
    }
}

/// función para actualizar la lista de amigos
function UpdateList() {
    const list = document.getElementById("listaAmigos");
    list.innerHTML = "";

    for (let i = 0; i < Friends.length; i++) {
        const li = document.createElement("li");
        li.textContent = Friends[i];
        list.appendChild(li);//agregar el elemento a la lista
    }
}

UpdateList();

// función para sortear los amigos

function ramdonFriends(){
    //validar que existan amigos
    if (Friends.length === 0) {
        alert("Debes agregar al menos dos amigos para sortear");
        return;

    }else if (Friends.length === 1) {
        alert("Debes agregar al menos dos amigos para sortear");
        return;
    }

    let random = Math.floor(Math.random() * Friends.length);
    const selectedFriend = Friends[random];//amigo seleccionado

    const result = document.getElementById("resultado");

    result.innerHTML = `El amigo seleccionado es: <strong>${selectedFriend}</strong>`;
    clearlist();


}

///funcion para limpiar lista

function clearlist() {
    document.getElementById("listaAmigos").innerHTML = "";
    
}