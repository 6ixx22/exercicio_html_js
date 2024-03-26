.conteiner {

    document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impedir o envio do formulário padrão

    // Obter os valores dos campos
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);

    // Verificar se B é maior que A
    if (campoB > campoA) {
        // Se válido, exibir mensagem positiva
        alert("Formulário válido! B é maior que A.");
    } else {
        // Se inválido, exibir mensagem negativa
        alert("Formulário inválido! B deve ser maior que A.");
    }
});

}