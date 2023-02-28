// Create vendas
let produtos
const changeValue = () => {
  const codigoProduto = document.getElementById('codigo')
  const qtdeProduto = document.getElementById('qtde')
  const precoProduto = document.getElementById('preco_un')
  const cod = Number(codigoProduto.value)
  const qt = Number(qtdeProduto.value)
  const pr = Number(precoProduto.value)
  let sbt = Number(qt * pr)
  sbt = sbt.toFixed(2)
  console.log('cod ', cod , 'qt ', qt);
  if ((cod > 99 && qt > 0) && (pr > 0 && sbt > 0)) {
    disabledButton("#cadastrar-venda")
    produtos = {
      codigo: cod,
      qtde: qt,
      preco: pr,
      subtotal: sbt
    }
  }
}
// Delete Vendas
let idForDel;
const changeDel = () => {
  let idProduto = document.getElementById('chave')
  idForDel = Number(idProduto.value)
}

// Update vendas
let idForUpdate, qtdeUpdate;
const changeUpdate = () => {
  let idUpdate = document.getElementById('update-id')
  let qtde = document.getElementById('qtde-update')
  idForUpdate = Number(idUpdate.value)
  qtdeUpdate = Number(qtde.value)
}
