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

//-------------------------------------------------------------------------------------------
//                                    TABELA NOME
//-------------------------------------------------------------------------------------------

collectionRef.get().then((querySnapshot) => {
    const tableBodyPaciente = document.getElementById("table-body-tabela-paciente");
    if (!tableBodyPaciente) {
        console.error("Elemento 'table-body' não encontrado.");
        return;
    }

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log(data); // Debugging: Verifique a estrutura dos dados

        const row = document.createElement("tr");

        const idPaciente = document.createElement("td");
        idPaciente.textContent = data.nDoProntuario || "ID não disponível";

        const nomePaciente = document.createElement("td");
        nomePaciente.textContent = data.nomePaciente || "Nome não disponível";
        
        const dateInternacao = document.createElement("td");
        dateInternacao.textContent = data.dateInterAtual || "Data não disponível";

        row.appendChild(idPaciente);
        row.appendChild(nomePaciente);
        row.appendChild(dateInternacao);
        tableBodyPaciente.appendChild(row);
    });
}).catch((error) => {
    console.error("Erro ao buscar documentos: ", error);
});

//-------------------------------------------------------------------------------------------
//                                    GENEROS
//-------------------------------------------------------------------------------------------

let Masculino = 0;
let Feminino = 0;
let Outros = 0;

// Busca e exibe os dados
collectionRef.get().then((querySnapshot) => {
    const tableBodyGenero = document.getElementById("table-body-genero");
    if (!tableBodyGenero) {
        console.error("Elemento 'table-body-genero' não encontrado.");
        return;
    }

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log(data); // Debugging: Verifique a estrutura dos dados

        const row = document.createElement("tr");

        const nomeCell = document.createElement("td");
        nomeCell.textContent = data.nomePaciente || "Nome não disponível";
        
        const genero = document.createElement("td");
        genero.textContent = data.genero || "Status não disponível";
        
        tableBodyGenero.appendChild(row);

        // Contabiliza os estados de saúde
        if (data.genero === "Masculino") {
            Masculino++;
        } else if (data.genero === "Feminino") {
            Feminino++;
        } else if (data.genero === "Outros") {
            Outros++;
        } else {
            console.log("Estado do genero não reconhecido:", data.genero);
        }
    });

    // Configura e exibe o gráfico
    const ctxGenero = document.getElementById('healthChartGenero');
    if (ctxGenero) {
        const ctx2d = ctxGenero.getContext('2d');
        const healthChartGenero = new Chart(ctx2d, {
            type: 'pie',
            data: {
                labels: ['Masculino'+ ' ' + Masculino++, 'Feminino' + ' ' + Feminino++, 'Outros' + ' ' + Outros++],
                datasets: [{
                    label: 'Genero',
                    data: [Masculino, Feminino, Outros,],
                    backgroundColor: ['#36a2eb', '#ff6384', '#999'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'GENERO',
                    }
                },
            }
        });
    } else {
        console.error("Elemento 'healthChartGenero' não encontrado.");
    }
}).catch((error) => {
    console.error("Erro ao buscar documentos: ", error);
});


//-------------------------------------------------------------------------------------------
//                                      UNIDADE
//-------------------------------------------------------------------------------------------

let Masculina1 = 0;
let Masculina2 = 0;
let CCS1 = 0;
let CCS2 = 0;
let Feminina2 = 0;
let Feminina5 = 0;
let UGP = 0;
let UDQ = 0;
let UAA = 0;

collectionRef.get().then((querySnapshot) => {
    const tableBodyUnidade = document.getElementById("table-body-Unidade");
    if (!tableBodyUnidade) {
        console.error("Elemento 'table-body-Unidade' não encontrado.");
        return;
    }

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log(data); // Debugging: Verifique a estrutura dos dados

        const row = document.createElement("tr");
        
        const unidade = document.createElement("td");
        unidade.textContent = data.Unidade || "Status não disponível";

        tableBodyUnidade.appendChild(row);

        // Contabiliza os estados de saúde
        if (data.Unidade === "1° Masculina") {
            Masculina1++;
        } else if (data.Unidade === "2° Masculina") {
            Masculina2++;
        } else if (data.Unidade === "CCS1") {
            CCS1++;
        } else if (data.Unidade === "CCS2") {
            CCS2++;
        } else if (data.Unidade === "2° Feminina") {
            Feminina2++;
        } else if (data.Unidade === "5° Feminina") {
            Feminina5++;
        } else if (data.Unidade === "UGP") {
            UGP++;
        } else if (data.Unidade === "UDQ") {
            UDQ++;
        } else if (data.Unidade === "UAA") {
            UAA++;
        } else {
            console.log("Estado da Unidade não reconhecido:", data.IntercorrenciaClinica6);
        }
    });

    // Configura e exibe o gráfico
    const ctxUnidade = document.getElementById('healthChartUnidade');
    if (ctxUnidade) {
        const ctx2d = ctxUnidade.getContext('2d');
        const healthChart5 = new Chart(ctx2d, {
            type: 'pie',
            data: {
                labels: ['1° Masculina' + ' ' + Masculina1++, '2° Masculina' + ' ' + Masculina2++, 'CCS1' + ' ' + CCS1++, 'CCS2' + ' ' + CCS2++, '2° Feminina' + ' ' + Feminina2++, '5° Feminina' + ' ' + Feminina5++, 'UGP' + ' ' + UGP++, 'UDQ' + ' ' + UDQ++, 'UAA' + ' ' + UAA++],
                datasets: [{
                    label: 'Unidade Internação',
                    data: [Masculina1, Masculina2, CCS1, CCS2, Feminina2, Feminina5, UGP, UDQ, UAA],
                    backgroundColor: ['#ff6384', '#36a2eb', '#333', '#666', '#000', '#ddd', '#111', '#999','#777'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'CLINICA'
                    }
                }
            }
        });
    } else {
        console.error("Elemento 'healthChartUnidade' não encontrado.");
    }
}).catch((error) => {
    console.error("Erro ao buscar documentos: ", error);
});


//-------------------------------------------------------------------------------------------
//                                    DOENCAS
//-------------------------------------------------------------------------------------------

let Diabetes = 0;
let Hipertensao = 0;
let Hipotensao = 0;
let AVC = 0;
let InfartoIAM = 0;
let HIV = 0;
let Tuberculose = 0;
let Hepatite = 0;
let DPOC = 0;
let Cancer = 0;
let Alergia = 0;
let Anemia = 0;

collectionRef.get().then((querySnapshot) => {
    const tableBodyDoenca = document.getElementById("table-body-Doenca");
    if (!tableBodyDoenca) {
        console.error("Elemento 'table-body-Doenca' não encontrado.");
        return;
    }

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log(data); // Debugging: Verifique a estrutura dos dados

        const row = document.createElement("tr");

        const IntercorrenciaClinica1 = document.createElement("td");
        IntercorrenciaClinica1.textContent = data.IntercorrenciaClinica5 || "Nome não disponível";

        tableBodyDoenca.appendChild(row);

        // Contabiliza as doenças
        if (data.IntercorrenciaClinica1 === "Diabetes") {
            Diabetes++;
        } else if (data.IntercorrenciaClinica1 === "Hipertensão") {
            Hipertensao++;
        } else if (data.IntercorrenciaClinica1 === "Hipotensão") {
            Hipotensao++;
        } else if (data.IntercorrenciaClinica1 === "AVC") {
            AVC++;
        } else if (data.IntercorrenciaClinica1 === "Infarto-IAM") {
            InfartoIAM++;
        } else if (data.IntercorrenciaClinica1 === "HIV") {
            HIV++;
        } else if (data.IntercorrenciaClinica1 === "Tuberculose") {
            Tuberculose++;
        } else if (data.IntercorrenciaClinica1 === "Hepatite") {
            Hepatite++;
        } else if (data.IntercorrenciaClinica1 === "DPOC") {
            DPOC++;
        } else if (data.IntercorrenciaClinica1 === "Câncer") {
            Cancer++;
        } else if (data.IntercorrenciaClinica1 === "Alergia") {
            Alergia++;
        } else if (data.IntercorrenciaClinica1 === "Anemia") {
            Anemia++;
        } else {
            console.log("Doença não reconhecido:", data.IntercorrenciaClinica5);
        }
    });

    // Configura e exibe o gráfico
    const ctxDoenca = document.getElementById('healthChartDoenca');
    if (ctxDoenca) {
        const ctx2d = ctxDoenca.getContext('2d');
        const healthChartDoenca = new Chart(ctx2d, {
            type: 'pie',
            data: {
                labels: ['Diabetes'+ ' ' + Diabetes++, 'Hipertensão' + ' ' + Hipertensao++, 'Hipotensao' + ' ' + Hipotensao++, 'AVC' + ' ' + AVC++, 'Infarto-IAM' + ' ' + InfartoIAM++, 
                    'HIV' + ' ' + HIV++, 'Tuberculose' + ' ' + Tuberculose++, 'Hepatite' + ' ' + Hepatite++, 'DPOC' + ' ' + DPOC++, 'Câncer' + ' ' + Cancer++, 'Alergia' + ' ' + Alergia++],
                datasets: [{
                    label: 'Estado de Saúde',
                    data: [Diabetes, Hipertensao, Hipotensao, AVC, InfartoIAM, HIV, Tuberculose, Hepatite, DPOC, Cancer, Alergia],
                    backgroundColor: ['#ff6384', '#36a2eb', '#333', '#666', '#000', '#ddd', '#111', '#222', '#444', '#555', '#888', '#999'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'DOENÇAS'
                    }
                }
            }
        });
    } else {
        console.error("Elemento 'healthChartDoenca' não encontrado.");
    }
}).catch((error) => {
    console.error("Erro ao buscar documentos: ", error);
});


//-------------------------------------------------------------------------------------------
//                                    EVOLUCAO
//-------------------------------------------------------------------------------------------

let Evolucao = 0;
let Curado = 0;
let Melhorado = 0;
let Encaminhado = 0;
let Obito = 0;
let Investigado = 0;
let Diagnosticado = 0;
let Selecionar = 0;

collectionRef.get().then((querySnapshot) => {
    const tableBodyEvolucao = document.getElementById("table-body-Evolucao");
    if (!tableBodyEvolucao) {
        console.error("Elemento 'table-body-Evolucao' não encontrado.");
        return;
    }

    querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log(data); // Debugging: Verifique a estrutura dos dados

        const row = document.createElement("tr");
        
        const doencaCampo2 = document.createElement("td");
        doencaCampo2.textContent = data.IntercorrenciaClinica2 || "Status não disponível";
                                        
        tableBodyEvolucao.appendChild(row);

        // Contabiliza os estados da evolução
        if (data.IntercorrenciaClinica2 === "Evolução") {
            Evolucao++;
        } else if (data.IntercorrenciaClinica2 === "Curado") {
            Curado++;
        } else if (data.IntercorrenciaClinica2 === "Melhorado") {
            Melhorado++;
        } else if (data.IntercorrenciaClinica2 === "Encaminhado") {
            Encaminhado++;
        } else if (data.IntercorrenciaClinica2 === "Óbito") {
            Obito++;
        } else if (data.IntercorrenciaClinica2 === "Investigado") {
            Investigado++;
        } else if (data.IntercorrenciaClinica2 === "Diagnosticado") {
            Diagnosticado++;
        } else {
            console.log("Estado de saúde não reconhecido:", data.IntercorrenciaClinica2);
        }
    });

    // Configura e exibe o gráfico
    const ctxEvolucao = document.getElementById('healthChartEvolucao');
    if (ctxEvolucao) {
        const ctx2d = ctxEvolucao.getContext('2d');
        const healthChart2 = new Chart(ctx2d, {
            type: 'pie',
            data: {
                labels: ['Evolução' + ' ' + Evolucao++, 'Curado' + ' ' + Curado++, 'Melhorado' + ' ' + Melhorado++, 'Encaminhado' + ' ' + Encaminhado++, 
                    'Óbito' + ' ' + Obito++, 'Investigado' + ' ' + Investigado++, 'Diagnosticado' + ' ' + Diagnosticado++],
                datasets: [{
                    label: 'Estado de Saúde',
                    data: [Evolucao, Curado, Melhorado, Encaminhado, Obito, Investigado, Diagnosticado],
                    backgroundColor: ['#ff6384', '#36a2eb', '#333', '#666', '#000', '#ddd', '#111'],
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'EVOLUÇÃO'
                    }
                }
            }
        });
    } else {
        console.error("Elemento 'healthChartEvolucao' não encontrado.");
    }
}).catch((error) => {
    console.error("Erro ao buscar documentos: ", error);
});




