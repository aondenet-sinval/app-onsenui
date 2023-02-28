// Delet = D
const apagarVenda = () => {
  const request = indexedDB.open(dbNameVendas, 3);
  request.onsuccess = function(event) {
  // Fazer algo com request.result!
  const db = request.result
  try {
    const transaction = db.transaction(["vendas"],"readwrite")
      .objectStore("vendas")
      .delete(idForDel)
     transaction.onsuccess = function(event){
       const message = `Registro de venda removido.`
       showMessage("strong", "cancelar-venda", message, 5000);
     }
  } catch (e) {
    const message = `Insira um Id válido.`
    showMessage("strong", "cancelar-venda", message, 5000);
  }

 }
}
