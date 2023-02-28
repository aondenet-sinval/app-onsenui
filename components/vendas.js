const Vendas = () => {
  document.write(`
    <div id="tabs-vendas" role="conteudo" className="conteudo">
      <ul>
        <li><a href="#tabs-atualizar-vendas">Atualizar Vendas</a></li>
        <li><a href="#tabs-cancelar-vendas">Cancelar Vendas</a></li>
      </ul>
      <section id="tabs-atualizar-vendas" className="no-print">
        <header>
          <h2>Atualizar Vendas</h2>
        </header>
        <ul id="update-message"></ul>
        <form id="form-atualizar-vendas">
          <fieldset>
            <legend>Informar id da venda a ser atualizada</legend>
            <label for="update-id"><strong>Id</strong></label><br />
            <input type="number" step="0.01" name="update-id" id="update-id" onchange="changeUpdate()" />
          </fieldset>
          <fieldset>
            <legend>Informe a quantidade</legend>
            <label for="qtde-update"><strong>Quantidade</strong> </label>
            <input type="number" name="qtde-update" id="qtde-update" onchange="changeUpdate()" />
          </fieldset>
          <fieldset>
            <legend><strong>Atualizar/Limpar Formulário</strong></legend>
            <button type="button" name="button" onClick="updateVenda()">Atualizar</button>
            <button type="reset" name="button">Limpar</button>
            <button type="button" name="button" onClick="clearVendas()">Zerar Vendas</button>
          </fieldset>
        </form>
        <p><strong>Nota: </strong>A atualização da venda não atualiza os registros no cupom.</p>
      </section>
      <section id="tabs-cancelar-vendas" className="no-print">
        <header>
          <h2>Cancelar Vendas</h2>
        </header>
        <ul id="cancelar-venda"></ul>
        <form>
          <fieldset>
            <legend>Informar id da venda para cancelamento</legend>
            <label for="chave"><strong>Id</strong></label><br />
            <input type="number" step="0.01" name="id" id="chave" onchange="changeDel()" />
          </fieldset>
          <fieldset>
            <legend><strong>Apagar/Limpar Formulários</strong></legend>
            <button type="button" name="button" onClick="apagarVenda()">Apagar</button>
            <button type="reset" name="button">Limpar</button>
          </fieldset>
        </form>
      </section>
    </div>
    `)
}
