const NavBar = () => {
  // head
  document.write(`
    <style media="screen">
    ul{
      display: flex;
      flex-direction: row;
    }
      li{
        list-style: none;
        border: 2px;
        border-radius: 10px;
        background-color: #CCC;
        color: #000;
        font-size: 18px;
        padding: 5px;
        margin: 5px;
      }
    </style>
    `)
  // menu
  document.write('<ul>')
  document.write('<li><a href="./index.html">VendasOff - React</a></li>')
  document.write('<li><a href="./pages/index.html">OnsenUI</a></li>')
  document.write('</ul>')
}
