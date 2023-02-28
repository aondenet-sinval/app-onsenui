// Read = R
const buscarEstoque = () => {
  const request = indexedDB.open(dbNameLoja, 3)
  request.onsuccess = function(event) {
    // Fazer algo com request.result!
    const db = request.result
    const transaction = db.transaction(["estoque"])
    const objectStore = transaction.objectStore("estoque")
    // const req = objectStore.get(idForSearch)
    const reqAll = objectStore.getAll()
    reqAll.onsuccess = function(event) {
      const resultVendas = reqAll.result
      const prods = resultVendas.reverse()//Ordenando pela última venda
      // Controlando dados que são apresentados ao usuário
      // Evitando duplicação dos dados
      const elemento = document.getElementById("lista-estoque")
      while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild)
      }
      let joinSubtotal = []
      // Apresentando lista de vendas requisitada pelo usuário
      for (var i = 0; i < prods.length; i++) {
        // Preenchendo array que irá gerar o total de vendas
        joinSubtotal.push(prods[i].qtde * prods[i].preco.toFixed(2))
        let message = `Codigo ${prods[i].codigo} -
        Qtde ${prods[i].qtde} - Preço de venda R$ ${(prods[i].preco).toFixed(2)}`
        showMessage("li", "lista-estoque", message)
      }
      if (joinSubtotal.length === 0) {
        const message = `Comece agora a registrar seu estoque.`
        showMessage("li", "lista-estoque", message, 5000)
      }
    }
  }
}
// Pesquisar um produto no estoque
// codigo = Código do produto
// idform = Digite o id do elemento pai para apresentar a mensagem ao
// usuário.
const searchEstoque = (codigo, idform) => {
  const request = indexedDB.open(dbNameLoja, 3)
  request.onsuccess = function(event) {
    // Fazer algo com request.result!
    const db = request.result
    const transaction = db.transaction(["estoque"])
    const objectStore = transaction.objectStore("estoque")
    const req = objectStore.get(codigo)
    // console.log('req ', );
  }
}
