document.getElementById("agendamento aula").addEventListener("submit", 
    function (event){
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const servico = document.getElementById("idioma").value;
    const reserva = document.getElementById("data").value;
    const semanal = document.querySelector('input[name="semanal"]:checked').value;

    });