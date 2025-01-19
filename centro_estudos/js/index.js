// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBCVCOnsjyH0JdL9AKBoGHQa4KAWWkzO1c",
    authDomain: "prontuario-4ce95.firebaseapp.com",
    projectId: "prontuario-4ce95",
    storageBucket: "prontuario-4ce95.appspot.com",
    messagingSenderId: "276317492035",
    appId: "1:276317492035:web:c350879118105a204ad5f6",
    measurementId: "G-6TNEBPZ8YD"
};

// Inicializa o Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const collectionRef = db.collection("IPQ");

function carregarUltimosPacientes() {
    const pacientesContainer = document.getElementById("pacientes-container");
    pacientesContainer.innerHTML = ""; // Limpa o container antes de preencher

    collectionRef.orderBy("dateInterAtual", "desc").limit(6).get()
        .then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = doc.data();

                // Criação de uma tabela individual para cada paciente
                const tabelaPaciente = document.createElement("table");
                tabelaPaciente.classList.add("tabela-paciente");

                tabelaPaciente.innerHTML = `
                    <h4>Ultimos Cadastros</h4>   
                    <tr><th>Nome do Paciente</th><td>${data.nomePaciente || "Não informado"}</td></tr>
                    <tr><th>Data de Nascimento</th><td>${data.dataDeNascimento || "Não informado"}</td></tr>
                    <tr><th>Número do Prontuário</th><td>${data.nDoProntuario || "Não informado"}</td></tr>
                    <tr><th>Data de Internação</th><td>${data.dateInterAtual || "Não informado"}</td></tr>
                `;

                // Adiciona a tabela ao container principal
                pacientesContainer.appendChild(tabelaPaciente);
            });
        })
        .catch((error) => console.error("Erro ao buscar pacientes:", error));
}

document.addEventListener("DOMContentLoaded", carregarUltimosPacientes);




    