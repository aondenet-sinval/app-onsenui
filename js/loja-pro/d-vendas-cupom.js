// Delet = D
const apagarItemCupom = () => {
  const request = indexedDB.open(dbNameLoja, 3)
  request.onsuccess = function(event) {
  // Fazer algo com request.result!
  const db = request.result
  try {
    const confirm = `Essa ação é irreversível. Deseja prosseguir?`
    if (window.confirm(confirm)) {
      const transaction = db.transaction(["cupom"],"readwrite")
        .objectStore("cupom")
        .delete(idCupomDel)
       transaction.onsuccess = function(event){
         hideCupom()
         searchCupom()
         const message = `Item removido do cupom.`
         showMessage("li", "cancelar-id-cupom", message, 5000)
       }
    }
  } catch (e) {
    const message = `Insira um Id válido.`
    showMessage("li", "cancelar-id-cupom", message, 5000)
  }

 }
}
