// Create = C
const cadastrarVenda = () => {
  const request = indexedDB.open(dbNameVendas, 3)
  request.onsuccess = function(event) {
    // Fazer algo com request.result!
    const db = request.result
    const transaction = db.transaction(["vendas"],"readwrite")
    const objectStore = transaction.objectStore("vendas")
    try {
      objectStore.add(produtos)
      const codigo = produtos.codigo
      const estoqueQtde =  produtos.qtde
      updateEstoque(codigo, estoqueQtde)
       transaction.oncomplete = function(event){
         const message = `Venda cadastrada.`
         showMessage("strong", "venda-message", message, 3000)
       }
    } catch (e) {
      const message = `Erro ao cadastrar a venda.
      Preencha os dados: código, quantidade e preço.`
      showMessage("strong", "venda-message", message, 5000)
    }
  }
}
