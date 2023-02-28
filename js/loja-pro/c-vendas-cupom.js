// Create = C
const createCupom = () => {
  const request = indexedDB.open(dbNameLoja, 3)
  request.onsuccess = function(event) {
    // Fazer algo com request.result!
    const db = request.result
    const transaction = db.transaction(["cupom"],"readwrite")
    const objectStore = transaction.objectStore("cupom")
    try {
      objectStore.add(produtos)
      // createCupom(produtos)
      const codigo = produtos.codigo
      const estoqueQtde =  produtos.qtde
      updateEstoque(codigo, estoqueQtde)
       transaction.oncomplete = function(event){
         const message = `Cupom: OK.`
         showMessage("li", "venda-message", message, 3000)
       }
    } catch (e) {
      const message = `Cupom: Erro.
      Contate o suporte.`
      showMessage("li", "venda-message", message, 5000)
    }
  }
}
