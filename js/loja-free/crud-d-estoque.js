// Delet = D
const apagarEstoque = () => {
  const request = indexedDB.open(dbNameVendas, 3);
  request.onsuccess = function(event) {
  const db = request.result
  try {
    const transaction = db.transaction(["estoque"],"readwrite")
      .objectStore("estoque")
      .delete(codigoForDelEstoque)
      // console.log('codigoForDelEstoque ', codigoForDelEstoque);
     transaction.onsuccess = function(event){
       const message = `Produto removido do estoque.`
       showMessage("strong", "cancelar-codigo", message, 5000);
     }
  } catch (e) {
    const message = `Insira um código válido.`
    showMessage("strong", "cancelar-codigo", message, 5000);
  }

 }
}
