let produtosEstoque
const changeValueEstoque = () => {
  let codigoProduto = document.getElementById('codigo-estoque')
  let qtdeProduto = document.getElementById('qtde-estoque')
  let precoProduto = document.getElementById('preco_un-estoque')
  const cod = Number(codigoProduto.value)
  const qt = Number(qtdeProduto.value)
  const pr = Number(precoProduto.value)
  if (cod && qt && pr > 0) {
  produtosEstoque = { codigo: cod,
                    qtde: qt,
                    preco: pr,
    }
  }
}
let codigoForDelEstoque;
const changeDelEstoque = () => {
  const codigoEstoque = document.getElementById('codigo-del-estoque')
  codigoForDelEstoque = Number(codigoEstoque.value)
  console.log('codigoForDelEstoque ', codigoEstoque);
}
