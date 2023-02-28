// Delet = D
const apagarVenda = () => {
  const request = indexedDB.open(dbNameLoja, 3)
  request.onsuccess = function(event) {
  // Fazer algo com request.result!
  const db = request.result
  try {
    const confirm = `Essa ação é irreversível. Deseja prosseguir?`
    if (window.confirm(confirm)) {
    const transaction = db.transaction(["vendas"],"readwrite")
      .objectStore("vendas")
      .delete(idForDel)
     transaction.onsuccess = function(event){
       const message = `Registro de venda removido.`
       showMessage("li", "cancelar-venda", message, 5000)
     }
   }
  } catch (e) {
    const message = `Insira um Id válido.`
    showMessage("li", "cancelar-venda", message, 5000)
  }

 }
}
