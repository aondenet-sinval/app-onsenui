// Update = U
const updateVenda = () => {
  const request = indexedDB.open(dbNameVendas, 3);
  // console.log('request ', request);
  request.onsuccess = function(event) {
  const db = request.result
  const objectStore = db.transaction(["vendas"], "readwrite").objectStore("vendas")
  // Tratando erro de chave não informada
  if (idForUpdate && nameUpdate ) {
    // console.log('ok')
    const req = objectStore.get(idForUpdate)
    req.onsuccess = function(event) {
      // Obter os valores antigos
      const data = req.result
      // console.log('data a ', data);

      // atualizar algum dado
      if (nameUpdate === 'qtde') {
        data.qtde = valueUpdate
      }
      if (nameUpdate === 'preco') {
        data.preco = valueUpdate
      }
      // Atualizar esse dado no banco
       const requestUpdate = objectStore.put(data)
       requestUpdate.onerror = function(event) {
         // Tratar erro
       }
       requestUpdate.onsuccess = function(event) {
         // Sucesso na atualização \o/
       }
    }
  }else {
    const message = `Informe os campos. Exemplo:
      codigo, preco ou qtde.`
    showMessage("strong", "update-message", message, 5000)
  }
  }
}
