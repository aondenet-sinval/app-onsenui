// Abrindo a tela de relatórios
const showVendasRelatorio = () => {
    // Definindo cabeçalho
    document.open()
    document.write('<html lang="pt-BR"><head>')
    document.write('<link rel="stylesheet" href="../css/style-pro.css">')
    document.write('<title>Relatório de Venda e Estoque</title></head><body>')
  relatorioVendas()
  relatorioEstoque()
}
