document.addEventListener('DOMContentLoaded', () => {
  const botao = document.getElementById('btnMensagem');
  const divMensagem = document.getElementById('mensagem');
  botao.addEventListener('click', () => {
    console.log('Cada passo te leva mais perto do seu objetivo.');
    divMensagem.textContent = 'Cada passo te leva mais perto do seu objetivo!';});});