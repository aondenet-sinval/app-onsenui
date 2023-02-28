// update
const updateEstoque = (codigo, subtracao) => {
  const request = indexedDB.open(dbNameVendas, 3);
  // console.log('request ', request);
  request.onsuccess = function(event) {
  const db = request.result
  const objectStore = db.transaction(["estoque"], "readwrite").objectStore("estoque")
  // Tratando erro de chave não informada
  if (codigo && subtracao ) {
    const req = objectStore.get(codigo)
    req.onsuccess = function(event) {
      // Obter os valores antigos
      const data = req.result
      // console.log('data a ', data.qtde, ' tipo subtracao', typeof(subtracao));
      const newQtde = data.qtde - subtracao
      // atualizar algum dado
        data.qtde = newQtde
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
    const message = `Erro na atualização do estoque.`
    showMessage("strong", "venda-message", message, 5000)
  }
  }
}
