
function entrar() {
    const nomeUsuario = document.getElementById("nomeUsuario").value;
    console.log(nomeUsuario);
    if(nomeUsuario) {    // codição verdadeira
        localStorage.setItem("nomeUsuario", nomeUsuario);
        window.location = "sala.html";
    }
}

//1 uma costante o mesmo valor até o final , ocupa menos espaço de memoria
//2 o id  do html colocada na caixinha do input
//3  testar o inspecionar  para verificar se o nome está correto
//4  entrar na proxima page se o valor que eu digitar for um valor valido
// 5 tinydb e local store é o mesmo
function logout() {
    localStorage.removeItem("nomeUsuario");
    localStorage.removeItem("nomeSala");

    location = "index.html";
}