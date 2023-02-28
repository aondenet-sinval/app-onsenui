const Estoque = ()=>{
document.write(`
  <div id="tabs-estoque" role="conteudo" className="conteudo">
    <ul>
      <li><a  href="#tabs-cadastrar-estoque"> Registra Estoque</a></li>
      <li><a href="#tabs-apagar-estoque">Apagar Produto Estoque</a></li>
      <li><a href="#tabs-atualizar-estoque">Atualizar Estoque</a></li>
    </ul>
  <section className="no-print" id="tabs-cadastrar-estoque">
    <header>
      <h2>Registro de Estoque</h2>
    </header>
    <ul id="estoque-message"></ul>
    <form>
      <fieldset>
        <legend>Código numérico do produto</legend>
        <label for="codigo-estoque"><strong>Código</strong></label><br />
        <input type="number" name="codigo-estoque" id="codigo-estoque"
         onchange="changeValueEstoque()" /><br />
      </fieldset>
      <fieldset>
        <legend>Quantidade do mesmo item</legend>
        <label for="qtde-estoque"><strong>Qtde</strong></label><br />
        <input type="number" name="qtde-estoque" id="qtde-estoque"
          onchange="changeValueEstoque()" /><br />
      </fieldset>
      <fieldset>
        <legend>Preço de Venda</legend>
        <label for="preco_un-estoque"><strong>Preço</strong></label><br />
        <input type="number" name="preco_un-estoque" id="preco_un-estoque"
          onchange="changeValueEstoque()" /><br />
      </fieldset>
      <fieldset>
        <button type="button" name="button" onClick="cadastrarEstoque()">Cadastrar Estoque</button</strong>
        <button type="reset" name="button">Limpar Formulário</button</strong>
      </fieldset>
    </form>
  </section>
  <section className="no-print" id="tabs-apagar-estoque">
    <header>
      <h2>Apagar Produto</h2>
    </header>
    <ul id="cancelar-codigo"></ul>
    <form>
      <fieldset>
        <legend>Informar codigo do produto</legend>
        <label for="codigo-del-estoque"><strong>Código</strong></label><br />
        <input type="number" step="0.01" name="codigo-del-estoque" id="codigo-del-estoque"
        onchange="changeDelEstoque()" />
      </fieldset>
      <fieldset>
        <legend><strong>Deletar Produto/Limpar Formulário</strong></legend>
        <button type="button" name="button" onClick="apagarEstoque()">Apagar</button>
        <button type="reset" name="button">Limpar</button>
      </fieldset>
    </form>
    <p><strong>Atenção!!!</strong><br />Essa ação irá apagar o código, eliminando totalmente o produto (individual) no estoque.</p>
  </section>
  <section className="no-print" id="tabs-atualizar-estoque">
    <header>
      <h2>Atualizar Produto no Estoque</h2>
    </header>
    <ul id="update-Estoque"></ul>
    <form id="form-atualizar-estoque">
      <fieldset>
        <legend>Informar código do produto</legend>
        <label for="codigo-est"><strong>Código</strong></label><br />
        <input type="number" step="0.01" name="codigo-est" id="codigo-est"
        onchange="changeUpdateEstoque()" minlength="3" required="true" />
      </fieldset>
      <fieldset>
        <legend>Quantidade</legend>
        <label for="qtde-value"><strong>Qtde</strong></label><br />
        <input type="number" step="0.01" name="qtde-value" id="qtde-value"
          onchange="changeUpdateEstoque()" />
      </fieldset>
      <fieldset>
        <legend>Preço</legend>
        <label for="estoque-pr"><strong>Preço</strong></label><br />
        <input type="number" step="0.01" name="estoque-pr" id="estoque-pr"
          onchange="changeUpdateEstoque()" />
      </fieldset>
      <fieldset>
        <legend><strong>Atualizar/Limpar Formulário</strong></legend>
        <button type="button" name="button" onClick="updateEstoqueManual()">Atualizar</button>
        <button type="reset" name="button">Limpar</button>
      </fieldset>
    </form>
  </section>
  </div>
  `)
}
