// Read = R
const searchCupom = () => {
  const request = indexedDB.open(dbNameLoja, 3)
  request.onsuccess = function(event) {
    // Fazer algo com request.result!
    const db = request.result
    const transaction = db.transaction(["cupom"])
    const objectStore = transaction.objectStore("cupom")
    // const req = objectStore.get(idForSearch)
    const reqAll = objectStore.getAll()
    reqAll.onsuccess = function(event) {
      const resultVendas = reqAll.result
      console.log('resultVendas ', resultVendas)
      const prods = resultVendas.reverse()//Ordenando pela última venda
      // Controlando dados que são apresentados ao usuário
      // Evitando duplicação dos dados
      const elemento = document.getElementById("cupom-list")
      while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild)
      }
      let joinSubtotal = []
      // Apresentando lista de vendas requisitada pelo usuário
      for (var i = 0; i < prods.length; i++) {
        // Preenchendo array que irá gerar o total de vendas
        let newArray = Number(prods[i].subtotal)
        joinSubtotal.push(newArray)
        // console.log('joinSubtotal ', joinSubtotal)
        let preco = ((prods[i].preco).toFixed(2))
        let subtotal = prods[i].subtotal
        let message = `ID: ${prods[i].id} - Codigo ${prods[i].codigo} -
        Qtde ${prods[i].qtde} - Preço ${new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(preco)} -
        subtotal ${new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
          .format(subtotal)}`
        showMessage("li", "cupom-list", message)
      }
      // Apresentando total de vendas ao usuário
      // Evitando duplicação dos dados
      const elem = document.getElementById("total-cupom")
      while (elem.firstChild) {
        elem.removeChild(elem.firstChild)
      }

      if (joinSubtotal.length > 0) {
        const total = joinSubtotal.reduce((a,b) => a + b)
        const message = `Total: ${new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(total)}`
        showMessage("strong", "total-cupom", message)
      }else {
        const message = "Você ainda não registrou suas vendas no cupom."
        showMessage("strong", "total-cupom", message)
      }
    }
  }
}
