// update no estoque ao efetivar venda
const updateEstoque = (codigo, subtracao) => {
  const request = indexedDB.open(dbNameLoja, 3);
  // console.log('request ', request);
  request.onsuccess = function(event) {
    const db = request.result
    const objectStore = db.transaction(["estoque"], "readwrite").objectStore("estoque")
    // Tratando erro de chave não informada
    if (codigo && subtracao ) {
      const req = objectStore.get(codigo)
      req.onsuccess = function(event) {
        // Obter os valores antigos
        const data = req.result
        const newQtde = data.qtde - subtracao
        // atualizar algum dado
          data.qtde = newQtde
        // Atualizar esse dado no banco
         const requestUpdate = objectStore.put(data)
         requestUpdate.onsuccess = function(event) {
           // Sucesso na atualização \o/
         }
      }
    }else {
      const message = `Erro na atualização do estoque.`
      showMessage("li", "venda-message", message, 5000)
    }
  }
}
// update no estoque manualmente
const updateEstoqueManual = () => {
  const codigo = produtosEstoqueUpdate.codigo
  const newQtde = produtosEstoqueUpdate.qtde
  const newPreco = produtosEstoqueUpdate.preco
  const request = indexedDB.open(dbNameLoja, 3);
  // console.log('request ', request);
  request.onsuccess = function(event) {
  const db = request.result
  const objectStore = db.transaction(["estoque"], "readwrite").objectStore("estoque")
  // Tratando erro de chave não informada
  if (codigo && newQtde && newPreco) {
    const req = objectStore.get(codigo)
    //Verificando se a busca do código informado foi concluída
    if (req.readyState === 'pending') {
      const message = `Estoque não atualizado. Os valores estão corretos?`
      showMessage("li", "update-estoque", message, 5000)
    }
    req.onsuccess = function(event) {
      // Obter os valores antigos
      const data = req.result
      // atualizar os dados
      data.qtde = newQtde

      data.preco = newPreco
      // Atualizar esse dado no banco
       const requestUpdate = objectStore.put(data)
       requestUpdate.onerror = function(event) {
         // Tratar erro

       }
       requestUpdate.onsuccess = function(event) {
         const message = `Estoque atualizado.`
         showMessage("li", "update-estoque", message, 5000)
       }
    }
  }else {
    const message = `Estoque não atualizado. Insira: código, quantidade e preço`
    showMessage("li", "update-estoque", message, 5000)
  }
  }
}
