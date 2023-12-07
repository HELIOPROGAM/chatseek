const firebaseConfig = {
  apiKey: "AIzaSyA21y0CO0RtMGElW9NxIq6wZ5ak162Liaw",
  authDomain: "testekwitter.firebaseapp.com",
  databaseURL: "https://testekwitter-default-rtdb.firebaseio.com",
  projectId: "testekwitter",
  storageBucket: "testekwitter.appspot.com",
  messagingSenderId: "364995332721",
  appId: "1:364995332721:web:0de8c39165ffdfe29269d0",
  measurementId: "G-09MT67BKZQ"
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
