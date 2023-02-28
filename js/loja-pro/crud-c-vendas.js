// // Create = C
// const cadastrarVenda = () => {
//   const request = indexedDB.open(dbNameLoja, 3)
//   request.onsuccess = function(event) {
//     // Fazer algo com request.result!
//     const db = request.result
//     const transaction = db.transaction(["vendas"],"readwrite")
//     const objectStore = transaction.objectStore("vendas")
//     try {
//       objectStore.add(produtos)
//       // createCupom(produtos)
//       const codigo = produtos.codigo
//       const estoqueQtde =  produtos.qtde
//       createCupom(produtos)
//        transaction.oncomplete = function(event){
//          const message = `Venda cadastrada.`
//          showMessage("strong", "venda-message", message, 3000)
//          resetForm("form-cadastrar-venda", "#cadastrar-venda")
//        }
//     } catch (e) {
//       const message = `Erro ao cadastrar a venda.
//       Preencha os dados: código, quantidade e preço.`
//       showMessage("strong", "venda-message", message, 5000)
//     }
//   }
// }
