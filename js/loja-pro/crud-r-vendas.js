// Read = R
const buscarVendas = () => {
  const request = indexedDB.open(dbNameLoja, 3)
  request.onsuccess = function(event) {
    // Fazer algo com request.result!
    const db = request.result
    const transaction = db.transaction(["vendas"])
    const objectStore = transaction.objectStore("vendas")
    // const req = objectStore.get(idForSearch)
    const reqAll = objectStore.getAll()
    reqAll.onsuccess = function(event) {
      const resultVendas = reqAll.result
      const prods = resultVendas.reverse()//Ordenando pela última venda
      // Controlando dados que são apresentados ao usuário
      // Evitando duplicação dos dados
      const elemento = document.getElementById("vendidos")
      while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild)
      }
      let joinSubtotal = []
      // Apresentando lista de vendas requisitada pelo usuário
      for (var i = 0; i < prods.length; i++) {
        // Preenchendo array que irá gerar o total de vendas
        let newArray = Number(prods[i].subtotal)
        joinSubtotal.push(newArray)
        // console.log('joinSubtotal ', joinSubtotal);
        let preco = ((prods[i].preco).toFixed(2))
        let subtotal = prods[i].subtotal
        let message = `ID: ${prods[i].id} - Codigo ${prods[i].codigo} -
        Qtde ${prods[i].qtde} - Preço ${new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(preco)} -
        subtotal ${new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
          .format(subtotal)}`
        showMessage("li", "vendidos", message)
      }
      // Apresentando total de vendas ao usuário
      // Evitando duplicação dos dados
      const elem = document.getElementById("total-vendas")
      while (elem.firstChild) {
        elem.removeChild(elem.firstChild)
      }
      if (joinSubtotal.length > 0) {
        const total = joinSubtotal.reduce((a,b) => a + b)
        const message = `Total de vendas: ${new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(total)}`
        showMessage("strong", "total-vendas", message)
      }else {
        const message = "Você ainda não registrou suas vendas nesse dispositivo."
        showMessage("strong", "total-vendas", message)
      }
    }
  }
}
