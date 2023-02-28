// Delet = D
const apagarEstoque = () => {
  const request = indexedDB.open(dbNameLoja, 3)
  request.onsuccess = function(event) {
  const db = request.result
  try {
    const confirm = `Essa ação é irreversível. Deseja prosseguir?`
    if (window.confirm(confirm)) {
      const transaction = db.transaction(["estoque"],"readwrite")
        .objectStore("estoque")
        .delete(codigoForDelEstoque)
       transaction.onsuccess = function(event){
         const message = `Produto removido do estoque.`
         showMessage("li", "cancelar-codigo", message, 5000)
       }
    }
  } catch (e) {
    const message = `Insira um código válido.`
    showMessage("li", "cancelar-codigo", message, 5000)
  }
 }
}
