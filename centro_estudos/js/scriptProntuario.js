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
const db = firebase.firestore();
const formulario = db.collection('IPQ');

//-------------------------------------------------------------------------------------------
//                             Função para enviar formulario
//-------------------------------------------------------------------------------------------

function enviarFormulario(){
    date1 = form.dateRevisaoProntuario.value;
    date2 = form.dateRevisaoProntuario.value;
    input1 = form.numeroProntuario.value;
    input2 = form.nomePaciente.value;
    input3 = form.siglaNome.value;
    select1 = form.selectGenero.value;
    select2 = form.dateNascimento.value; 
    select3 = form.selectUnidade.value; 
    select4 = form.selectMedicoAssistente.value; 
    select5 = form.selectEnfermeiro.value; 
    select6 = form.selectMedicoPlantinista.value; 
    select7 = form.selectMedicoresidente.value; 
    date3 = form.dateInterAtual.value;
    date4 = form.dateAltaMedica.value;
    date5 = form.dateSaidaHospital.value;
    select8 = form.selectPrimeiraInternacao.value; 
    input4 = form.nInternacao.value;
    select9 = form.selectIntSubJudice.value;
    date6 = form.dataPrimInternacao.value;
    date7 = form.dataAltaInterAnterior.value;
    input5 = form.nPresMedTotal.value;
    input6 = form.nEvolMedTotal.value;
    input7 = form.nEvolPsicolTotal.value;
    input8 = form.nEvolEnferTotal.value;
    input9 = form.nEvolTOTotal.value;
    input10 = form.nEvolServSociTotal.value;
        
    selectQuali1 = form.regAnamneseInternacao.value;
    selectQuali2 = form.qualidadeDosRegistrosMedicos.value;
    selectQuali3 = form.assinaturaCarimboProfNivelSuperior.value;
    selectQuali4 = form.qualidadeRegistrosEnfermagem.value;
    selectQuali5 = form.checagemPrescricaoMedica.value;
    selectQuali6 = form.qualidadeRegistrosServicoSocial.value;
    selectQuali7 = form.anotacoesTecnicoEnfermagem.value;
    selectQuali8 = form.qualidadeRegistrosTerapiaOcupacional.value;
    selectQuali9 = form.legibilidade.value;
    selectQuali10 = form.qualidadeRegistrosPsicologia.value;
    selectQuali11 = form.adequacaoMedicacaoPsiquiatrica.value;
    selectQuali12 = form.qualidadeRegistrosEducaçãoFisica.value;
    selectQuali13 = form.organizacao.value;
    selectQuali14 = form.registroProcClinicos.value;
    selectQuali15 = form.resumoAltaMedica.value;
    selectQuali16 = form.cumprimentoProjetoTerapeutico.value;
    selectQuali17 = form.resumoAltaPsicosocial.value;
    selectQuali18 = form.dadosJuridicos.value;

    doencaCampo1 = form.doencaCampo1.value;
    doencaCampo2 = form.doencaCampo2.value;

    textarea = form.textarea.value;

    medicoRevisor = form.nomeMedicoRevisor.value;
}

    form.addEventListener('submit',(event)=>{
        event.preventDefault(); // Evita o envio padrão do formulário

    // Validação: verifica se o campo 'id' está preenchido
        const idProntuario = document.getElementById('numeroProntuario').value;
        if (!idProntuario) {
            Swal.fire({
                title: 'Erro!',
                text: 'O campo "Número do Prontuário" é obrigatório!',
                icon: 'error',
                confirmButtonText: 'Corrigir'
            });
            return; // Interrompe o processo de cadastro
        }

        formulario.where("nDoProntuario", "==", idProntuario).get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                // ID já existe
                Swal.fire({
                    title: 'Erro!',
                    text: 'Este Número de Prontuário já está cadastrado!',
                    icon: 'error',
                    confirmButtonText: 'Corrigir'
                });
                return; // Interrompe o processo de cadastro
            }
            let novoCadastro = {
                dataRevisaoProntuario: date1,
                nDoProntuario: input1,
                nomePaciente: input2,
                siglaNome: input3,
                genero: select1,
                dataDeNascimento: select2,
                Unidade: select3,
                MedicoAssistente: select4,
                Enfermeiro: select5,
                MedicoPlantinista: select6,
                MedicoResidente: select7,
                dateInterAtual: date3,
                dateAltaMedica: date4,
                dateSaidaHospital: date5,
                PrimeiraInternacao: select8,
                nInternacao: input4,
                IntSubJudice: select9,
                dataPrimInternacao: date6,
                dataAltaInterAnterior: date7,
                nPrescricaoMedicaTotal: input5,
                nEvolucaoMedicaTotal: input6,
                nEvolucaoPsicolTotal: input7,
                nEvolucaoEnfermagemTotal: input8,
                nEvolTOTotal: input9,
                nEvolucaoServicoSocialTotal: input10,

                RegAnamneseInternacao: selectQuali1,
                QualidadeDosRegistrosMedicos: selectQuali2,
                AssinaturaCarimboProfNivelSuperior: selectQuali3,
                QualidadeRegistrosEnfermagem: selectQuali4,
                ChecagemPrescricaoMedica: selectQuali5,
                QualidadeRegistrosServicoSocial: selectQuali6,
                AnotacoesTecnicoEnfermagem: selectQuali7,
                QualidadeRegistrosTerapiaOcupacional: selectQuali8,
                Legibilidade: selectQuali9,
                QualidadeRegistrosPsicologia: selectQuali10,
                AdequacaoMedicacaoPsiquiatrica: selectQuali11,
                QualidadeRegistrosEducaçãoFisica: selectQuali12,
                Organizacao: selectQuali13,
                RegistroProcClinicos: selectQuali14,
                ResumoAltaMedica: selectQuali15,
                CumprimentoProjetoTerapeutico: selectQuali16,
                ResumoAltaPsicosocial: selectQuali17,
                DadosJuridicos: selectQuali18,

                IntercorrenciaClinica1: doencaCampo1,
                IntercorrenciaClinica2: doencaCampo2,

                observacoes: textarea,

                nomeMedicoRevisor: medicoRevisor,
            };
            formulario.add(novoCadastro)
            .then((docRef) => {
                Swal.fire({
                    title: 'Sucesso!',
                    text: 'Cadastro do prontuário realizado com sucesso!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => {
                    limparFormulario(); // Limpa o formulário após a confirmação
                });
            })
            .catch((erro) => {
                Swal.fire({
                    title: 'Erro!',
                    text: `Ocorreu um erro ao cadastrar o prontuário: ${erro.message}`,
                    icon: 'error',
                    confirmButtonText: 'Entendido'
                });
            });
        })
        .catch((erro) => {
            Swal.fire({
                title: 'Erro!',
                text: `Erro ao verificar a existência do prontuário: ${erro.message}`,
                icon: 'error',
                confirmButtonText: 'Entendido'
            });
        });
    });

    formulario.add(novoCadastro).then((docRef)=>{
        alert("cadastro do Prontuário realizado Com Sucesso!!!!!!")
    }).catch((erro)=>{
        alert("erro: ", erro)
    })


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
    



