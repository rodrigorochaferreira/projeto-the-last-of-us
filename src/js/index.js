/*mostrar imagem de fundo do botão selecionado*/

//Passo 01 busca elementos do html que possua classe 'botao'
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
//Passo 02 identificar clice do usuario no botao
botoesCarrossel.forEach((botao, indice)=> {
   botao.addEventListener('click',() => {
        //Passo 03 desmarcar botao 'selecionado' anterior
        desativarBotaoSelecionado();

        //Passo 04 marcar o botao clicado como se estivesse selecionado
        selecionarBotaoCarrossel(botao);

        //Passo 05 esconder imagem de fundo anterior
        esconderImagemAtiva();

        //Passo 06 fazer aparecer imagem ativa correspondente ao botao clicado
        mostrarImagemDeFundo(indice);

   } )
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

