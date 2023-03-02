// Funções de navegação de páginas
const home = ()=>{
  const navigator = document.querySelector('#navigator');
  navigator.resetToPage('home.html');
}
const about = ()=>{
  const navigator = document.querySelector('#navigator');
  navigator.insertPage(1,'about.html');
}

const openMenu = () => {
    document.querySelector('#menu').open()    
  }

const loadPage = (page) => {
  document.querySelector('#menu').close();
  document.querySelector('#navigator').bringPageTop(page, { animation: 'fade' });
}
