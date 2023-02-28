const Footer = () => {
  document.write(`
    <footer>
      <p className="no-print">
        Para criar sua loja clique no botão <strong>Criar Loja PRO Agora
        </strong> abaixo.<br />
        <button type="button" name="button" onClick="createLojaPro()">
          Criar Loja PRO Agora
        </button>
      </p>
      <p>
        Para criar relatórios de <strong>vendas</strong> e <strong>estoque
        </strong> clique no botão abaixo.
      </p>
      <button type="button" name="button" onClick="showVendasRelatorio()">
        Relatórios
      </button>
    </footer>
    `)
}
