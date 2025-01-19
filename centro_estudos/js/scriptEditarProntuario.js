//-------------------------------------------------------------------------------------------
//                                Configuração do Firebase
//-------------------------------------------------------------------------------------------
const firebaseConfig = {
    apiKey: "API_KEY_AQUI",
    authDomain: "prontuario-4ce95.firebaseapp.com",
    projectId: "prontuario-4ce95",
    storageBucket: "prontuario-4ce95.appspot.com",
    messagingSenderId: "276317492035",
    appId: "1:276317492035:web:c350879118105a204ad5f6",
    measurementId: "G-6TNEBPZ8YD"
};

//-------------------------------------------------------------------------------------------
//                                Inicializando o Firebase
//-------------------------------------------------------------------------------------------

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const formulario = db.collection('IPQ');

//-------------------------------------------------------------------------------------------
//                   Função para buscar prontuário com base no número
//-------------------------------------------------------------------------------------------

document.getElementById('buscarProntuario').addEventListener('click', function () {
    let numeroProntuarioBusca = document.getElementById('numeroProntuarioBusca').value;

    formulario.where("nDoProntuario", "==", numeroProntuarioBusca).get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                querySnapshot.forEach((doc) => {
                    // Preenche os campos do formulário com os dados encontrados
                    document.getElementById('dateRevisaoProntuario').value = doc.data().dataRevisaoProntuario;
                    document.getElementById('numeroProntuario').value = doc.data().nDoProntuario;
                    document.getElementById('nomePaciente').value = doc.data().nomePaciente;
                    document.getElementById('siglaNome').value = doc.data().siglaNome;
                    document.getElementById('selectGenero').value = doc.data().genero;
                    document.getElementById('dateNascimento').value = doc.data().dataDeNascimento;
                    document.getElementById('selectUnidade').value = doc.data().Unidade;
                    document.getElementById('selectMedicoAssistente').value = doc.data().MedicoAssistente;
                    document.getElementById('selectEnfermeiro').value = doc.data().Enfermeiro;
                    document.getElementById('selectMedicoPlantinista').value = doc.data().MedicoPlantinista;
                    document.getElementById('selectMedicoresidente').value = doc.data().MedicoResidente;
                    document.getElementById('dateInterAtual').value = doc.data().dateInterAtual;
                    document.getElementById('dateAltaMedica').value = doc.data().dateAltaMedica;
                    document.getElementById('dateSaidaHospital').value = doc.data().dateSaidaHospital;
                    document.getElementById('selectPrimeiraInternacao').value = doc.data().PrimeiraInternacao;
                    document.getElementById('nInternacao').value = doc.data().nInternacao;
                    document.getElementById('selectIntSubJudice').value = doc.data().IntSubJudice;
                    document.getElementById('dataPrimInternacao').value = doc.data().dataPrimInternacao;
                    document.getElementById('dataAltaInterAnterior').value = doc.data().dataAltaInterAnterior;
                    document.getElementById('nPresMedTotal').value = doc.data().nPrescricaoMedicaTotal;
                    document.getElementById('nEvolMedTotal').value = doc.data().nEvolucaoMedicaTotal;
                    document.getElementById('nEvolPsicolTotal').value = doc.data().nEvolucaoPsicolTotal;
                    document.getElementById('nEvolEnferTotal').value = doc.data().nEvolucaoEnfermagemTotal;
                    document.getElementById('nEvolTOTotal').value = doc.data().nEvolTOTotal;
                    document.getElementById('nEvolServSociTotal').value = doc.data().nEvolucaoServicoSocialTotal;
                    document.getElementById('regAnamneseInternacao').value = doc.data().RegAnamneseInternacao;
                    document.getElementById('qualidadeDosRegistrosMedicos').value = doc.data().QualidadeDosRegistrosMedicos;
                    document.getElementById('assinaturaCarimboProfNivelSuperior').value = doc.data().AssinaturaCarimboProfNivelSuperior;
                    document.getElementById('qualidadeRegistrosEnfermagem').value = doc.data().QualidadeRegistrosEnfermagem;
                    document.getElementById('checagemPrescricaoMedica').value = doc.data().ChecagemPrescricaoMedica;
                    document.getElementById('qualidadeRegistrosServicoSocial').value = doc.data().QualidadeRegistrosServicoSocial;
                    document.getElementById('anotacoesTecnicoEnfermagem').value = doc.data().AnotacoesTecnicoEnfermagem;
                    document.getElementById('qualidadeRegistrosTerapiaOcupacional').value = doc.data().QualidadeRegistrosTerapiaOcupacional;
                    document.getElementById('legibilidade').value = doc.data().Legibilidade;
                    document.getElementById('qualidadeRegistrosPsicologia').value = doc.data().QualidadeRegistrosPsicologia;
                    document.getElementById('adequacaoMedicacaoPsiquiatrica').value = doc.data().AdequacaoMedicacaoPsiquiatrica;
                    document.getElementById('qualidadeRegistrosEducaçãoFisica').value = doc.data().QualidadeRegistrosEducaçãoFisica;
                    document.getElementById('organizacao').value = doc.data().Organizacao;
                    document.getElementById('registroProcClinicos').value = doc.data().RegistroProcClinicos;
                    document.getElementById('resumoAltaMedica').value = doc.data().ResumoAltaMedica;
                    document.getElementById('cumprimentoProjetoTerapeutico').value = doc.data().CumprimentoProjetoTerapeutico;
                    document.getElementById('resumoAltaPsicosocial').value = doc.data().ResumoAltaPsicosocial;
                    document.getElementById('dadosJuridicos').value = doc.data().DadosJuridicos;
                    document.getElementById('doencaCampo1').value = doc.data().IntercorrenciaClinica1;
                    document.getElementById('doencaCampo2').value = doc.data().IntercorrenciaClinica2;
                    document.getElementById('textarea').value = doc.data().observacoes;
                    document.getElementById('nomeMedicoRevisor').value = doc.data().nomeMedicoRevisor;
                    // Preencha outros campos conforme necessário
                });

                Swal.fire({
                    title: 'Sucesso!',
                    text: 'Prontuário encontrado e carregado.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            } else {
                Swal.fire({
                    title: 'Erro!',
                    text: 'Prontuário não encontrado.',
                    icon: 'error',
                    confirmButtonText: 'Tentar novamente'
                });
            }
        })
        .catch((error) => {
            console.error("Erro ao buscar prontuário: ", error);

            Swal.fire({
                title: 'Erro!',
                text: 'Não foi possível buscar o prontuário. Verifique os logs do console.',
                icon: 'error',
                confirmButtonText: 'Entendido'
            });
        });
});


//-------------------------------------------------------------------------------------------
//                       Função para salvar alterações no prontuário
//-------------------------------------------------------------------------------------------
document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    let numeroProntuario = document.getElementById('numeroProntuario').value;
    let dadosAtualizados = {
        
        dataRevisaoProntuario: document.getElementById('dateRevisaoProntuario').value,
        nDoProntuario: document.getElementById('numeroProntuario').value,
        nomePaciente: document.getElementById('nomePaciente').value,
        siglaNome: document.getElementById('siglaNome').value,
        genero: document.getElementById('selectGenero').value,
        dataDeNascimento: document.getElementById('dateNascimento').value,
        Unidade: document.getElementById('selectUnidade').value,
        MedicoAssistente: document.getElementById('selectMedicoAssistente').value,
        Enfermeiro: document.getElementById('selectEnfermeiro').value,
        MedicoPlantinista: document.getElementById('selectMedicoPlantinista').value,
        MedicoResidente: document.getElementById('selectMedicoresidente').value,
        dateInterAtual: document.getElementById('dateInterAtual').value,
        dateAltaMedica: document.getElementById('dateAltaMedica').value,
        dateSaidaHospital: document.getElementById('dateSaidaHospital').value,
        PrimeiraInternacao: document.getElementById('selectPrimeiraInternacao').value,
        nInternacao: document.getElementById('nInternacao').value,
        IntSubJudice: document.getElementById('selectIntSubJudice').value,
        dataPrimInternacao: document.getElementById('dataPrimInternacao').value,
        dataAltaInterAnterior: document.getElementById('dataAltaInterAnterior').value,
        nPrescricaoMedicaTotal: document.getElementById('nPresMedTotal').value,
        nEvolucaoMedicaTotal: document.getElementById('nEvolMedTotal').value,
        nEvolucaoPsicolTotal: document.getElementById('nEvolPsicolTotal').value,
        nEvolucaoEnfermagemTotal: document.getElementById('nEvolEnferTotal').value,
        nEvolTOTotal: document.getElementById('nEvolTOTotal').value,
        nEvolucaoServicoSocialTotal: document.getElementById('nEvolServSociTotal').value,
        RegAnamneseInternacao: document.getElementById('regAnamneseInternacao').value,
        QualidadeDosRegistrosMedicos: document.getElementById('qualidadeDosRegistrosMedicos').value,
        AssinaturaCarimboProfNivelSuperior: document.getElementById('assinaturaCarimboProfNivelSuperior').value,
        QualidadeRegistrosEnfermagem: document.getElementById('qualidadeRegistrosEnfermagem').value,
        ChecagemPrescricaoMedica: document.getElementById('checagemPrescricaoMedica').value,
        QualidadeRegistrosServicoSocial: document.getElementById('qualidadeRegistrosServicoSocial').value,
        AnotacoesTecnicoEnfermagem: document.getElementById('anotacoesTecnicoEnfermagem').value,
        QualidadeRegistrosTerapiaOcupacional: document.getElementById('qualidadeRegistrosTerapiaOcupacional').value,
        Legibilidade: document.getElementById('legibilidade').value,
        QualidadeRegistrosPsicologia: document.getElementById('qualidadeRegistrosPsicologia').value,
        AdequacaoMedicacaoPsiquiatrica: document.getElementById('adequacaoMedicacaoPsiquiatrica').value,
        QualidadeRegistrosEducaçãoFisica: document.getElementById('qualidadeRegistrosEducaçãoFisica').value,
        Organizacao: document.getElementById('organizacao').value,
        RegistroProcClinicos: document.getElementById('registroProcClinicos').value,
        ResumoAltaMedica: document.getElementById('resumoAltaMedica').value,
        CumprimentoProjetoTerapeutico: document.getElementById('cumprimentoProjetoTerapeutico').value,
        ResumoAltaPsicosocial: document.getElementById('resumoAltaPsicosocial').value,
        DadosJuridicos: document.getElementById('dadosJuridicos').value,
        IntercorrenciaClinica1: document.getElementById('doencaCampo1').value,
        IntercorrenciaClinica2: document.getElementById('doencaCampo2').value,
        observacoes: document.getElementById('textarea').value,
        nomeMedicoRevisor: document.getElementById('nomeMedicoRevisor').value,
    };

    formulario.where("nDoProntuario", "==", numeroProntuario).get()
    .then((querySnapshot) => {
        if (!querySnapshot.empty) {
            querySnapshot.forEach((doc) => {
                if (doc.id) {
                    formulario.doc(doc.id).update(dadosAtualizados)
                        .then(() => {
                            Swal.fire({
                                title: 'Sucesso!',
                                text: 'Prontuário atualizado com sucesso.',
                                icon: 'success',
                                confirmButtonText: 'OK'
                            }).then(() => limparFormulario());
                        })
                        .catch((error) => {
                            console.error("Erro ao atualizar prontuário: ", error);
                            Swal.fire({
                                title: 'Erro!',
                                text: 'Ocorreu um problema ao tentar salvar as alterações.',
                                icon: 'error',
                                confirmButtonText: 'Entendido'
                            });
                        });
                } else {
                    console.error("ID do documento não encontrado.");
                }
            });
        } else {
            Swal.fire({
                title: 'Erro!',
                text: 'Prontuário não encontrado para atualizar.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    })
    .catch((error) => {
        console.error("Erro ao buscar prontuário para atualização: ", error);
        Swal.fire({
            title: 'Erro!',
            text: 'Erro ao buscar o prontuário para atualização.',
            icon: 'error',
            confirmButtonText: 'Entendido'
        });
    });
});

function limparFormulario() {
    document.getElementById('dateRevisaoProntuario').value = '';
    document.getElementById('numeroProntuario').value = '';
    document.getElementById('nomePaciente').value = '';
    document.getElementById('siglaNome').value = '';
    document.getElementById('selectGenero').value = '';
    document.getElementById('dateNascimento').value = '';
    document.getElementById('selectUnidade').value = '';
    document.getElementById('selectMedicoAssistente').value = '';
    document.getElementById('selectEnfermeiro').value = '';
    document.getElementById('selectMedicoPlantinista').value = '';
    document.getElementById('selectMedicoresidente').value = '';
    document.getElementById('dateInterAtual').value = '';
    document.getElementById('dateAltaMedica').value = '';
    document.getElementById('dateSaidaHospital').value = '';
    document.getElementById('selectPrimeiraInternacao').value = '';
    document.getElementById('nInternacao').value = '';
    document.getElementById('selectIntSubJudice').value = '';
    document.getElementById('dataPrimInternacao').value = '';
    document.getElementById('dataAltaInterAnterior').value = '';
    document.getElementById('nPresMedTotal').value = '';
    document.getElementById('nEvolMedTotal').value = '';
    document.getElementById('nEvolPsicolTotal').value = '';
    document.getElementById('nEvolEnferTotal').value = '';
    document.getElementById('nEvolTOTotal').value = '';
    document.getElementById('nEvolServSociTotal').value = '';
    document.getElementById('regAnamneseInternacao').value = '';
    document.getElementById('qualidadeDosRegistrosMedicos').value = '';
    document.getElementById('assinaturaCarimboProfNivelSuperior').value = '';
    document.getElementById('qualidadeRegistrosEnfermagem').value = '';
    document.getElementById('checagemPrescricaoMedica').value = '';
    document.getElementById('qualidadeRegistrosServicoSocial').value = '';
    document.getElementById('anotacoesTecnicoEnfermagem').value = '';
    document.getElementById('qualidadeRegistrosTerapiaOcupacional').value = '';
    document.getElementById('legibilidade').value = '';
    document.getElementById('qualidadeRegistrosPsicologia').value = '';
    document.getElementById('adequacaoMedicacaoPsiquiatrica').value = '';
    document.getElementById('qualidadeRegistrosEducaçãoFisica').value = '';
    document.getElementById('organizacao').value = '';
    document.getElementById('registroProcClinicos').value = '';
    document.getElementById('resumoAltaMedica').value = '';
    document.getElementById('cumprimentoProjetoTerapeutico').value = '';
    document.getElementById('resumoAltaPsicosocial').value = '';
    document.getElementById('dadosJuridicos').value = '';
    document.getElementById('doencaCampo1').value = '';
    document.getElementById('doencaCampo2').value = '';
    document.getElementById('textarea').value = '';
    document.getElementById('nomeMedicoRevisor').value = '';
}
