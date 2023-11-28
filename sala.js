const firebaseConfig = {
    apiKey: "AIzaSyA8Cl0qHRzbMMO9fvDQrjRPagidYDIZqmg",
    authDomain: "bate-papo-3f779.firebaseapp.com",
    databaseURL: "https://bate-papo-3f779-default-rtdb.firebaseio.com",
    projectId: "bate-papo-3f779",
    storageBucket: "bate-papo-3f779.appspot.com",
    messagingSenderId: "1073264677106",
    appId: "1:1073264677106:web:3cfb02dc35a5647d06c06b"
  };
  firebase.initializeApp(firebaseConfig);

inicializar();

function inicializar() {
    const nomeUsuario = localStorage.getItem("nomeUsuario");
    // console.log(nomeUsuario);
    document.getElementById("nomeUsuario").textContent = "Olá, " + nomeUsuario + "!";
// .textContent é utilizada para obter ou definir o conteúdo de texto de um elemento HTML

 // semalhante ao datachanget do mit
    getData();
}

function addSala() {
    const nomeSala = document.getElementById("nomeSala").value;
    console.log(nomeSala);
    if (nomeSala) {
        firebase.database().ref('/').child(nomeSala).set({
            purpose: "sala criada"
        });

        carregaSala(nomeSala);
    }
}
// funcão vai ficar rodando as informaçoes do 105  F.B prox aula
function getData() {
    firebase.database().ref('/').on("value", snapshot => {
        let salas = [];
        
        //  for(var i=0; i<snapshot.length;i++.){
        // var childSnapshot = snapshot[i];
        // }
         
            
            
            
        snapshot.forEach(childSnapshot => {
            const childKey = childSnapshot.key;
            const html = '<div class="nomeSala" id="'
                + childKey
                + '" onclick="carregaSala(this.id)">#'
                + childKey
                + '</div>'
            salas.push(html);
        });
        document.getElementById("output").innerHTML = salas.join("");
        // const output = document.getElementById("output");
        // output.innerHTML = salas.join("");
    });
}

function carregaSala(sala) {
    localStorage.setItem("nomeSala", sala);
    location = "chat.html";
}