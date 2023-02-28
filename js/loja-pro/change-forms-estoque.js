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
let produtosEstoqueUpdate = {}
const changeUpdateEstoque = () => {
  let codigoProduto = document.getElementById('codigo-est')
  let qtdeProduto = document.getElementById('qtde-value')
  let precoProduto = document.getElementById('estoque-pr')
  const cod = Number(codigoProduto.value)
  const qt = Number(qtdeProduto.value)
  const pr = Number(precoProduto.value)
  if (cod && qt && pr > 0) {
  produtosEstoqueUpdate = { codigo: cod,
                    qtde: qt,
                    preco: pr,
    }
  }
}
// Formulário opção delete
let codigoForDelEstoque;
const changeDelEstoque = () => {
  const codigoEstoque = document.getElementById('codigo-del-estoque')
  codigoForDelEstoque = Number(codigoEstoque.value)
  console.log('codigoForDelEstoque ', codigoForDelEstoque);
  // Verificando se o código digitado pelo usuário existe no estoque
  searchEstoque(codigoForDelEstoque, "cancelar-codigo")
}
