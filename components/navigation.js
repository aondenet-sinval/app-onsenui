// Funções de navegação de páginas
const home = ()=>{
  const navigator = document.querySelector('#navigator');
  navigator.resetToPage('home.html');
}
const about = ()=>{
  const navigator = document.querySelector('#navigator');
  navigator.pushPage('about.html');
}
