//-------------------------------------------------------------------------------------------
//                                Configuração do Firebase
//-------------------------------------------------------------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyBCVCOnsjyH0JdL9AKBoGHQa4KAWWkzO1c",
    authDomain: "prontuario-4ce95.firebaseapp.com",
    projectId: "prontuario-4ce95",
    storageBucket: "prontuario-4ce95.appspot.com",
    messagingSenderId: "276317492035",
    appId: "1:276317492035:web:c350879118105a204ad5f6",
    measurementId: "G-6TNEBPZ8YD"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(app);

const collectionRef = db.collection("IPQ");

// -------- Tabela e Pesquisa por Data -----------------------------------------------------
document.getElementById("btn-pesquisar2").addEventListener("click", function () {
    Swal.fire({
        title: 'Pesquisar por intervalo de datas',
        html: `
            <label for="dataInicial">Data Inicial:</label>
            <input type="date" id="dataInicial" class="swal2-input">
            <label for="dataFinal">Data Final:</label>
            <input type="date" id="dataFinal" class="swal2-input">
        `,
        focusConfirm: false,
        showCancelButton: true,
        confirmButtonText: 'Pesquisar',
        cancelButtonText: 'Cancelar',
        preConfirm: () => {
            const dataInicial = document.getElementById('dataInicial').value;
            const dataFinal = document.getElementById('dataFinal').value;

            if (!dataInicial || !dataFinal) {
                Swal.showValidationMessage('Ambas as datas devem ser preenchidas!');
                return false; // Evita fechar o modal
            }

            return { dataInicial, dataFinal };
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const { dataInicial, dataFinal } = result.value;
            // Chama a função para buscar os dados no intervalo de datas
            searchByDateRange(dataInicial, dataFinal);
        }
    });
});

// -------- Função para Buscar Dados no Firebase e Preencher Gráficos ----------------------
function searchByDateRange(dataInicial, dataFinal) {
    // Faz uma consulta no Firestore para encontrar documentos no intervalo de datas
    collectionRef
        .where("dataRevisaoProntuario", ">=", dataInicial)  // Campo de data maior ou igual à dataInicial
        .where("dataRevisaoProntuario", "<=", dataFinal)    // Campo de data menor ou igual à dataFinal
        .get()
        .then((querySnapshot) => {
            const tableBodyPaciente = document.getElementById("table-body-tabela-paciente");
            tableBodyPaciente.innerHTML = "";  // Limpa a tabela antes de mostrar os novos dados

            // Variáveis para contar os valores para os gráficos
            let Masculino = 0, Feminino = 0, Outros = 0;
            let UnidadeCounts = {}; // Contagem por Unidade
            let DoencaCounts = {};  // Contagem por Doença
            let EvolucaoCounts = {}; // Contagem por Evolução

            if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    const data = doc.data();

                    // Preenche a tabela com os dados encontrados
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${data.nDoProntuario}</td>
                        <td>${data.nomePaciente}</td>
                        <td>${data.dateInterAtual}</td> 
                    `;
                    tableBodyPaciente.appendChild(row);

                    // Contabiliza os dados para os gráficos
                    if (data.genero === "Masculino") Masculino++;
                    if (data.genero === "Feminino") Feminino++;
                    if (data.genero === "Outros") Outros++;

                    // Contabiliza por Unidade
                    if (data.Unidade) {
                        UnidadeCounts[data.Unidade] = (UnidadeCounts[data.Unidade] || 0) + 1;
                    }

                    // Contabiliza por Doença
                    if (data.IntercorrenciaClinica1) {
                        DoencaCounts[data.IntercorrenciaClinica1] = (DoencaCounts[data.IntercorrenciaClinica1] || 0) + 1;
                    }

                    // Contabiliza por Evolução
                    if (data.IntercorrenciaClinica2) {
                        EvolucaoCounts[data.IntercorrenciaClinica2] = (EvolucaoCounts[data.IntercorrenciaClinica2] || 0) + 1;
                    }
                });

                // Atualiza os gráficos com os dados coletados
                atualizarGraficoGenero(Masculino, Feminino, Outros);
                atualizarGraficoUnidade(UnidadeCounts);
                atualizarGraficoDoenca(DoencaCounts);
                atualizarGraficoEvolucao(EvolucaoCounts);

            } else {
                alert("Nenhum registro encontrado para o intervalo de datas informado.");
            }
        })
        .catch((error) => {
            console.error("Erro ao buscar os dados: ", error);
            alert("Erro ao buscar os dados. Verifique o formato das datas e tente novamente.");
        });
}

// -------- Função para Atualizar Gráfico de Gênero -------------------------------------
function atualizarGraficoGenero(Masculino, Feminino, Outros) {
    const ctxGenero = document.getElementById("healthChartGenero").getContext("2d");
    new Chart(ctxGenero, {
        type: "pie",
        data: {
            labels: ["Masculino", "Feminino", "Outros"],
            datasets: [{
                label: "Distribuição por Gênero",
                data: [Masculino, Feminino, Outros],
                backgroundColor: ["#36a2eb", "#ff6384", "#999"],
            }],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
                title: {
                    display: true,
                    text: "Distribuição por Gênero",
                },
            },
        },
    });
}

// -------- Função para Atualizar Gráfico de Unidade -------------------------------------
function atualizarGraficoUnidade(UnidadeCounts) {
    const ctxUnidade = document.getElementById("healthChartUnidade").getContext("2d");
    const labels = Object.keys(UnidadeCounts);
    const data = Object.values(UnidadeCounts);

    new Chart(ctxUnidade, {
        type: "pie",
        data: {
            labels: labels,
            datasets: [{
                label: "Distribuição por Unidade",
                data: data,
                backgroundColor: ["#36a2eb", "#ff6384", "#999", "#36a2bb", "#ff6381"],
            }],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
                title: {
                    display: true,
                    text: "Distribuição por Unidade",
                },
            },
        },
    });
}

// -------- Função para Atualizar Gráfico de Doença -------------------------------------
function atualizarGraficoDoenca(DoencaCounts) {
    const ctxDoenca = document.getElementById("healthChartDoenca").getContext("2d");
    const labels = Object.keys(DoencaCounts);
    const data = Object.values(DoencaCounts);

    new Chart(ctxDoenca, {
        type: "pie",
        data: {
            labels: labels,
            datasets: [{
                label: "Distribuição por Doença",
                data: data,
                backgroundColor: ["#36a2eb", "#ff6384", "#999", "#36a2bb", "#ff6381"],
            }],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
                title: {
                    display: true,
                    text: "Distribuição por Doença",
                },
            },
        },
    });
}

// -------- Função para Atualizar Gráfico de Evolução -------------------------------------
function atualizarGraficoEvolucao(EvolucaoCounts) {
    const ctxEvolucao = document.getElementById("healthChartEvolucao").getContext("2d");
    const labels = Object.keys(EvolucaoCounts);
    const data = Object.values(EvolucaoCounts);

    new Chart(ctxEvolucao, {
        type: "pie",
        data: {
            labels: labels,
            datasets: [{
                label: "Distribuição por Evolução",
                data: data,
                backgroundColor: ["#36a2eb", "#ff6384", "#999", "#36a2bb", "#ff6381"],
            }],
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: "top",
                },
                title: {
                    display: true,
                    text: "Distribuição por Evolução",
                },
            },
        },
    });
}






















