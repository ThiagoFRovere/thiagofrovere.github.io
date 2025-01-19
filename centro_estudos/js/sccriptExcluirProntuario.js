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


//-------------------------------------------------------------------------------------------
//                            Cria a coleção IPQ no banco de dados
//-------------------------------------------------------------------------------------------
const collectionRef = db.collection("IPQ");

collectionRef.get().then((querySnapshot) => {
const tableBody = document.getElementById("table-body");
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        const row = document.createElement("tr");

        // Preenche a tabela
        const idCell = document.createElement("td");
        idCell.textContent = doc.id; 
                    
        const dataRevisaoProntuario = document.createElement("td");
        dataRevisaoProntuario.textContent = data.dataRevisaoProntuario; 

        const nDoProntuario = document.createElement("td");
        nDoProntuario.textContent = data.nDoProntuario;

        const nomePaciente = document.createElement("td");
        nomePaciente.textContent = data.nomePaciente; 
        
        const siglaNome = document.createElement("td");
        siglaNome.textContent = data.siglaNome;

        const genero = document.createElement("td");
        genero.textContent = data.genero;

        const dataDeNascimento = document.createElement("td");
        dataDeNascimento.textContent = data.dataDeNascimento;

        const Unidade = document.createElement("td");
        Unidade.textContent = data.Unidade;

        const Categoria = document.createElement("td");
        Categoria.textContent = data.Categoria;

        const MedicoAssistente = document.createElement("td");
        MedicoAssistente.textContent = data.MedicoAssistente;

        const Enfermeiro = document.createElement("td");
        Enfermeiro.textContent = data.Enfermeiro;

        const MedicoPlantinista = document.createElement("td");
        MedicoPlantinista.textContent = data.MedicoPlantinista;

        const MedicoResidente = document.createElement("td");
        MedicoResidente.textContent = data.MedicoResidente;

        const dateInterAtual = document.createElement("td");
        dateInterAtual.textContent = data.dateInterAtual;

        const dateAltaMedica = document.createElement("td");
        dateAltaMedica.textContent = data.dateAltaMedica;

        const dateSaidaHospital = document.createElement("td");
        dateSaidaHospital.textContent = data.dateSaidaHospital;

        const PrimeiraInternacao = document.createElement("td");
        PrimeiraInternacao.textContent = data.PrimeiraInternacao;

        const nInternacao = document.createElement("td");
        nInternacao.textContent = data.nInternacao;

        const IntSubJudice = document.createElement("td");
        IntSubJudice.textContent = data.IntSubJudice;

        const dataPrimInternacao = document.createElement("td");
        dataPrimInternacao.textContent = data.dataPrimInternacao;

        const dataAltaInterAnterior = document.createElement("td");
        dataAltaInterAnterior.textContent = data.dataAltaInterAnterior;

        const nPrescricaoMedicaTotal = document.createElement("td");
        nPrescricaoMedicaTotal.textContent = data.nPrescricaoMedicaTotal;

        const nEvolucaoMedicaTotal = document.createElement("td");
        nEvolucaoMedicaTotal.textContent = data.nEvolucaoMedicaTotal;

        const nEvolucaoPsicolTotal = document.createElement("td");
        nEvolucaoPsicolTotal.textContent = data.nEvolucaoPsicolTotal;

        const nEvolucaoEnfermagemTotal = document.createElement("td");
        nEvolucaoEnfermagemTotal.textContent = data.nEvolucaoEnfermagemTotal;

        const nEvolTOTotal = document.createElement("td");
        nEvolTOTotal.textContent = data.nEvolTOTotal;

        const nEvolucaoServicoSocialTotal = document.createElement("td");
        nEvolucaoServicoSocialTotal.textContent = data.nEvolucaoServicoSocialTotal;

        const RegAnamneseInternacao = document.createElement("td");
        RegAnamneseInternacao.textContent = data.RegAnamneseInternacao;

        const QualidadeDosRegistrosMedicos = document.createElement("td");
        QualidadeDosRegistrosMedicos.textContent = data.QualidadeDosRegistrosMedicos;

        const AssinaturaCarimboProfNivelSuperior = document.createElement("td");
        AssinaturaCarimboProfNivelSuperior.textContent = data.AssinaturaCarimboProfNivelSuperior;

        const QualidadeRegistrosEnfermagem = document.createElement("td");
        QualidadeRegistrosEnfermagem.textContent = data.QualidadeRegistrosEnfermagem;

        const ChecagemPrescricaoMedica = document.createElement("td");
        ChecagemPrescricaoMedica.textContent = data.ChecagemPrescricaoMedica;

        const QualidadeRegistrosServicoSocial = document.createElement("td");
        QualidadeRegistrosServicoSocial.textContent = data.QualidadeRegistrosServicoSocial;

        const AnotacoesTecnicoEnfermagem = document.createElement("td");
        AnotacoesTecnicoEnfermagem.textContent = data.AnotacoesTecnicoEnfermagem;

        const QualidadeRegistrosTerapiaOcupacional = document.createElement("td");
        QualidadeRegistrosTerapiaOcupacional.textContent = data.QualidadeRegistrosTerapiaOcupacional;
        
        const Legibilidade = document.createElement("td");
        Legibilidade.textContent = data.Legibilidade;

        const QualidadeRegistrosPsicologia = document.createElement("td");
        QualidadeRegistrosPsicologia.textContent = data.QualidadeRegistrosPsicologia;

        const AdequacaoMedicacaoPsiquiatrica = document.createElement("td");
        AdequacaoMedicacaoPsiquiatrica.textContent = data.AdequacaoMedicacaoPsiquiatrica;

        const QualidadeRegistrosEducaçãoFisica = document.createElement("td");
        QualidadeRegistrosEducaçãoFisica.textContent = data.QualidadeRegistrosEducaçãoFisica;

        const Organizacao = document.createElement("td");
        Organizacao.textContent = data.Organizacao;

        const RegistroProcClinicos = document.createElement("td");
        RegistroProcClinicos.textContent = data.RegistroProcClinicos;
        
        const ResumoAltaMedica = document.createElement("td");
        ResumoAltaMedica.textContent = data.ResumoAltaMedica;

        const CumprimentoProjetoTerapeutico = document.createElement("td");
        CumprimentoProjetoTerapeutico.textContent = data.CumprimentoProjetoTerapeutico;

        const ResumoAltaPsicosocial = document.createElement("td");
        ResumoAltaPsicosocial.textContent = data.ResumoAltaPsicosocial;

        const DadosJuridicos = document.createElement("td");
        DadosJuridicos.textContent = data.DadosJuridicos;

        const IntercorrenciaClinica1 = document.createElement("td");
        IntercorrenciaClinica1.textContent = data.IntercorrenciaClinica1;

        const IntercorrenciaClinica2 = document.createElement("td");
        IntercorrenciaClinica2.textContent = data.IntercorrenciaClinica2;

        const obs = document.createElement("td");
        obs.textContent = data.observacoes;

        const nomeMedicoRevisor = document.createElement("td");
        nomeMedicoRevisor.textContent = data.nomeMedicoRevisor;


        
        row.appendChild(dataRevisaoProntuario);
        row.appendChild(nDoProntuario);
        row.appendChild(nomePaciente);
        row.appendChild(siglaNome);
        row.appendChild(genero);
        row.appendChild(dataDeNascimento);
        row.appendChild(Unidade);
        row.appendChild(Categoria)
        row.appendChild(MedicoAssistente);
        row.appendChild(Enfermeiro);
        row.appendChild(MedicoPlantinista);
        row.appendChild(MedicoResidente);
        row.appendChild(dateInterAtual);
        row.appendChild(dateAltaMedica);
        row.appendChild(dateSaidaHospital);
        row.appendChild(PrimeiraInternacao);
        row.appendChild(nInternacao);
        row.appendChild(IntSubJudice);
        row.appendChild(dataPrimInternacao);
        row.appendChild(dataAltaInterAnterior);
        row.appendChild(nPrescricaoMedicaTotal);
        row.appendChild(nEvolucaoMedicaTotal);
        row.appendChild(nEvolucaoPsicolTotal);
        row.appendChild(nEvolucaoEnfermagemTotal);
        row.appendChild(nEvolTOTotal);
        row.appendChild(nEvolucaoServicoSocialTotal);
        row.appendChild(RegAnamneseInternacao);
        row.appendChild(QualidadeDosRegistrosMedicos);
        row.appendChild(AssinaturaCarimboProfNivelSuperior);
        row.appendChild(QualidadeRegistrosEnfermagem);
        row.appendChild(ChecagemPrescricaoMedica);
        row.appendChild(QualidadeRegistrosServicoSocial);
        row.appendChild(AnotacoesTecnicoEnfermagem);
        row.appendChild(QualidadeRegistrosTerapiaOcupacional);
        row.appendChild(Legibilidade);
        row.appendChild(QualidadeRegistrosPsicologia);
        row.appendChild(AdequacaoMedicacaoPsiquiatrica);
        row.appendChild(QualidadeRegistrosEducaçãoFisica);
        row.appendChild(Organizacao);
        row.appendChild(RegistroProcClinicos);
        row.appendChild(ResumoAltaMedica);
        row.appendChild(CumprimentoProjetoTerapeutico);
        row.appendChild(ResumoAltaPsicosocial);
        row.appendChild(DadosJuridicos);
        row.appendChild(IntercorrenciaClinica1);
        row.appendChild(IntercorrenciaClinica2);
        row.appendChild(obs);
        row.appendChild(nomeMedicoRevisor);
        tableBody.appendChild(row);
    });
}).catch((error) => {
    console.error("Erro ao buscar documentos: ", error);
});



//-------------------------------------------------------------------------------------------
//                    Adiciona o evento de clique ao botão de exclusão
//-------------------------------------------------------------------------------------------

document.getElementById("btn-excluir").addEventListener("click", function () {
    // Solicita o Número do Prontuário
    Swal.fire({
        title: 'Excluir Cadastro',
        input: 'text',
        inputLabel: 'Digite o Número do Prontuário que deseja excluir:',
        inputPlaceholder: 'Número do Prontuário',
        showCancelButton: true,
        confirmButtonText: 'Excluir',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed && result.value) {
            const nDoProntuario = result.value;
            // Chama a função para excluir o usuário
            deleteUserByProntuario(nDoProntuario);
        } else if (!result.value) {
            Swal.fire('Operação cancelada', 'Nenhum Número de Prontuário informado.', 'error');
        }
    });
});




//-------------------------------------------------------------------------------------------
//                 Função para buscar e excluir o usuário pelo nDoProntuario
//-------------------------------------------------------------------------------------------
function deleteUserByProntuario(nDoProntuario) {
    collectionRef.where("nDoProntuario", "==", nDoProntuario).get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    Swal.fire({
                        title: `Confirmar Exclusão`,
                        text: `Tem certeza que deseja excluir o usuário com o Número de Prontuário: ${nDoProntuario}?`,
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonText: 'Sim, excluir!',
                        cancelButtonText: 'Não excluir!',
                    })
                    .then((result) => {
                        if (result.isConfirmed) {
                            doc.ref.delete().then(() => {
                                Swal.fire('Excluído!', 'Usuário excluído com sucesso.', 'success');
                                location.reload();
                            }).catch((error) => {
                                console.error("Erro ao excluir usuário: ", error);
                                Swal.fire('Erro!', 'Não foi possível excluir o usuário.', 'error');
                            });
                        }
                    });
                });
            }else{
                Swal.fire('Erro!', 'Nenhum usuário encontrado com esse Número de Prontuário.', 'error');
            }
        })
    .catch((error) => {
        console.error("Erro ao buscar prontuário: ", error);
        alert("Erro ao buscar o Número do Prontuário.");
    });
}


