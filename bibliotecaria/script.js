// Seleciona todos os botões
const botoes = document.querySelectorAll('.btn-interativo');

botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    // Remove a classe 'ativo' de todos os botões para resetar
    botoes.forEach(b => b.classList.remove('ativo'));
    
    // Adiciona a classe 'ativo' apenas no botão que foi clicado
    botao.classList.add('ativo');
  });
});