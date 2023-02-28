// Abrindo a tela de relatórios
const relatorioEstoque = () => {
  // Estoque
  document.write('<div class="print" id="relatorio-estoque">')
  document.write('<h3 id="vendidos">Relatório de Estoque</h3>')
  document.write('<button type="button" name="button" onclick="buscarEstoque()">Exibir</button>')
  document.write('<button type="button" name="button" onclick="hideEstoque()">Ocultar</button>')
  document.write('<ol id="lista-estoque"></ol></div></body></html>')
  document.close()
}
