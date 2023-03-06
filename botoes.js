const botaoCancelarAcesso = document.getElementById('botaoCancela');
const botaoSalvarAcesso = document.getElementById('botaoSalvar');
const inputVerifica = document.querySelectorAll('input');

console.log(inputVerifica)



botaoSalvarAcesso.addEventListener("click", function(){
    for (let i = 0; i < inputVerifica.length; i++) {
        if (inputVerifica[i].value === "") {
            alert("Por favor, preencha todos os campos antes de prosseguir.");
            return;
        }
    }
    alert("Acesso criado");
});

botaoCancelarAcesso.addEventListener("click", function (){
    window.location.reload();
    alert("Processo de acesso cancelado")
});

