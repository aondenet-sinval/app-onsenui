// update
const updateCupom = () => {
  const request = indexedDB.open(dbNameLoja, 3);
  // console.log('request ', request);
  request.onsuccess = function(event) {
  const db = request.result
  const objectStore = db.transaction(["cupom"], "readwrite").objectStore("cupom")
  // Tratando erro de chave não informada
  if (idForUpdateCupom && qtdeUpdateCupom ) {
    // console.log('ok')
    const req = objectStore.get(idForUpdateCupom)
    req.onsuccess = function(event) {
      // Obter os valores antigos
      const data = req.result
      // console.log('data a ', data);
      console.log('data.preco ', data.preco);

      // atualizar algum dado
      if (qtdeUpdateCupom) {
        data.qtde = qtdeUpdateCupom
        // Definindo o novo subtotal:
        data.subtotal = qtdeUpdateCupom * data.preco
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
    const message = `Informe os campos:
      Id e Quantidade.`
    showMessage("li", "update-message-cupom", message, 5000)
  }
  }
}
