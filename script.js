const botaoSim = document.getElementById("sim");
const botaoNao = document.getElementById("nao");

botaoSim.addEventListener("click", function() {
    alert("EU SABIA KKKKKKKKKKKKKKKKK! ❤️😂");
});

botaoNao.addEventListener("mouseover", function() {
    const largura = window.innerWidth - botaoNao.offsetWidth;
    const altura = window.innerHeight - botaoNao.offsetHeight;

    const novaPosicaoX = Math.random() * largura;
    const novaPosicaoY = Math.random() * altura;

    botaoNao.style.position = "absolute";
    botaoNao.style.left = novaPosicaoX + "px";
    botaoNao.style.top = novaPosicaoY + "px";
});