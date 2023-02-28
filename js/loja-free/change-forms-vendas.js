// Form crete - cadastro de vendas
let produtos
const changeValue = () => {
  let codigoProduto = document.getElementById('codigo')
  let qtdeProduto = document.getElementById('qtde')
  let precoProduto = document.getElementById('preco_un')
  const cod = Number(codigoProduto.value)
  const qt = Number(qtdeProduto.value)
  const pr = Number(precoProduto.value)
  let sbt = Number(qt * pr)
  sbt = sbt.toFixed(2)
  if (cod && qt && pr > 0) {
  produtos = {
    codigo: cod,
    qtde: qt,
    preco: pr,
    subtotal: sbt
    }
  }
}
// Form update
let idForUpdate, nameUpdate, valueUpdate;
const changeUpdate = () => {
  let idUpdate = document.getElementById('update-id')
  let nameUp = document.getElementById('update-name')
  let valueUp = document.getElementById('update-value')
  idForUpdate = Number(idUpdate.value)
  nameUpdate = nameUp.value
  valueUpdate = Number(valueUp.value)
}
// Form delete
let idForDel;
const changeDel = () => {
  let idProduto = document.getElementById('chave')
  idForDel = Number(idProduto.value)
}
