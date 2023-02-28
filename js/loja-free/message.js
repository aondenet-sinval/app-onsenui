//Mostrar mensagem para o usuário:
// element = elemento filho que vai ser criado
// parent = elemento pai
// message = Mensagem
// timeMessage = Tempo de apresentação da mensagem se undefined não é aplicado
const showMessage = (element, parent, message, timeMessage)=> {
  const nodeMessage = document.createElement(element)
  const textNodeMessage = document.createTextNode(message)
  nodeMessage.appendChild(textNodeMessage)
  document.getElementById(parent)
    .appendChild(nodeMessage)
  // Removendo a mensagem após 5 segundos
  if (timeMessage !== undefined) {
    setTimeout (() => {
      const elemento = document.getElementById(parent)
      while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild)
      }
    }, timeMessage
    )
  }
}
const hideVendas = () => {
  const elemento = document.getElementById("vendidos")
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild)
  }
  const elementoTotal = document.getElementById("total-vendas")
  while (elementoTotal.firstChild) {
    elementoTotal.removeChild(elementoTotal.firstChild)
  }
}
const hideEstoque = () => {
  const elemento = document.getElementById("lista-estoque")
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild)
  }
}