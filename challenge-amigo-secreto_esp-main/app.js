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