// Create = C
const cadastrarEstoque = () => {
  const request = indexedDB.open(dbNameVendas, 3)
  request.onsuccess = function(event) {
    // Fazer algo com request.result!
    const db = request.result
    const transaction = db.transaction(["estoque"],"readwrite")
    const objectStore = transaction.objectStore("estoque")
    try {
      objectStore.add(produtosEstoque)
       transaction.oncomplete = function(event){
         const message = `Estoque cadastrado.`
         showMessage("strong", "estoque-message", message, 3000)
       }
    } catch (e) {
      const message = `Erro ao cadastrar no estoque.
      Preencha os dados: código(único/exclusivo), quantidade e preço.`
      showMessage("strong", "estoque-message", message, 5000)
    }
  }
}
