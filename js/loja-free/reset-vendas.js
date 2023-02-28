const clearVendas = () => {
  // Let us open our database
  const DBOpenRequest = window.indexedDB.open("registroVendas", 3);

  DBOpenRequest.onsuccess = (event) => {
    // console.table("<li>Database initialized.</li>")

    // store the result of opening the database in the db variable.
    // This is used a lot below
    db = DBOpenRequest.result;

    // Clear all the data from the object store
    clearData();
  };

  function clearData() {
    // open a read/write db transaction, ready for clearing the data
    const transaction = db.transaction(["vendas"], "readwrite");

    // report on the success of the transaction completing, when everything is done
    transaction.oncomplete = (event) => {
      // console.log('clear completo')
    };

    transaction.onerror = (event) => {
      // console.log('erro');
    };

    // create an object store on the transaction
    const objectStore = transaction.objectStore("vendas");

    // Make a request to clear all the data out of the object store
    const objectStoreRequest = objectStore.clear();

    objectStoreRequest.onsuccess = (event) => {
      // report the success of our request
      // console.log('sucesso');
    };
  }
}
