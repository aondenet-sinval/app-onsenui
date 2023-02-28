// Read = R
const searchCupomRegistrarVenda = () => {
  const request = indexedDB.open(dbNameLoja, 3)
  request.onsuccess = function(event) {
    // Fazer algo com request.result!
    const db = request.result
    const transaction = db.transaction(["cupom"])
    const objectStore = transaction.objectStore("cupom")
    // const req = objectStore.get(idForSearch)
    const reqAll = objectStore.getAll()
    reqAll.onsuccess = function(event) {
      let resultVendas = reqAll.result
      console.log('resultVendas ', resultVendas)
      registrarCupomVenda(resultVendas)
    }
  }
}
// Transferir as vendas do objectStore cupom para o objectStore vendas
const registrarCupomVenda = (produtosCupom) => {
  console.log('produtosCupom ', produtosCupom);
  const request = indexedDB.open(dbNameLoja, 3)
  request.onsuccess = function(event) {
    try {
      const db = request.result
      const transaction = db.transaction(["vendas"],"readwrite")
      const objectStore = transaction.objectStore("vendas")
      for (var i in produtosCupom) {
        objectStore.add(produtosCupom[i]);
      }
    } catch (e) {
      const message = `Erro ao cadastrar a venda.
      Preencha os dados: código, quantidade e preço.`
      showMessage("li", "venda-message", message, 5000)
    }
  }
}
