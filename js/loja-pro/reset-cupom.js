const clearCupom = () => {
  // Let us open our database
  const DBOpenRequest = window.indexedDB.open(dbNameLoja, 3)
  DBOpenRequest.onsuccess = (event) => {
    db = DBOpenRequest.result
    // Limpar todos os dados no objectStore vendas
    const confirm = `Essa ação é irreversível. Deseja prosseguir?`
    if (window.confirm(confirm)) {
      clearData()
    }
  }
  function clearData() {
    // open a read/write db transaction, ready for clearing the data
    const transaction = db.transaction(["cupom"], "readwrite")
    // report on the success of the transaction completing, when everything is done
    transaction.oncomplete = (event) => {
      // console.log('clear completo')
    }
    transaction.onerror = (event) => {
      // console.log('erro')
    }
    // create an object store on the transaction
    const objectStore = transaction.objectStore("cupom")
    // Make a request to clear all the data out of the object store
    const objectStoreRequest = objectStore.clear()
    objectStoreRequest.onsuccess = (event) => {
      // report the success of our request
      hideCupom()
      const message = "Cupom limpo."
      showMessage('li', 'message-cupom',message, 5000)
    }
  }
}
