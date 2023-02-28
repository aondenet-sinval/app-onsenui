// Abrindo a tela de relatórios
const relatorioVendas = () => {
  // Vendas
  document.write('<div class="print" id="relatorio-estoque">')
  document.write('<h3>Relatório de Vendas</h3>')
  document.write('<button type="button" name="button" onclick="buscarVendas()">Exibir</button>')
  document.write('<button type="button" name="button" onclick="hideVendas()">Ocultar</button>')
  document.write('<button type="button" name="button" onclick="printPreview()">PRINT</button>')
  document.write('<ol id="vendidos"></ol>')
  document.write('<p id="total-vendas"></p></div>')
}
