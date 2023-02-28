const VendasCupom = () =>{
  document.write(`
    <style media="screen">
      section{ max-width: 320px;}
    </style>
      <div id="tabs-cupom" role="conteudo" className="conteudo">
        <ul>
          <li><a  href="#tabs-cadastrar-cupom"> Vendas Cupom</a></li>
          <li><a href="#tabs-mostrar-cupom">Mostrar Cupom</a></li>
          <li><a href="#tabs-atualizar-cupom">Atualizar Cupom</a></li>
          <li><a href="#tabs-cancelar-cupom">Cancelar Cupom</a></li>
        </ul>
        <section id="tabs-cadastrar-cupom" className="no-print">
          <header>
            <h2>Registro de Vendas Cupom</h2>
          </header>
          <ul id="venda-message"></ul>
          <form id="form-cadastrar-venda">
            <fieldset>
              <legend>Código numérico do produto</legend>
              <label for="codigo"><strong>Código</strong></label><br />
              <input type="number" name="codigo" id="codigo"
                onchange="changeValue()" required="true" minlength="3" /><br />
            </fieldset>
            <fieldset>
              <legend>Quantidade do mesmo item vendido</legend>
              <label for="qtde"><strong>Qtde</strong></label><br />
              <input type="number" name="qtde" id="qtde" onchange="changeValue()" /><br />
            </fieldset>
            <fieldset>
              <legend>Preço por unidade vendida</legend>
              <label for="preco_un"><strong>Preço</strong></label><br />
              <input type="number" name="preco_un" id="preco_un" onchange="changeValue()" /><br />
            </fieldset>
            <fieldset>
              <button type="button" name="button" onClick="createCupom()"
              id="cadastrar-venda" required>
                Cadastrar Venda
              </button>
              <button type="reset" id="limpar-vendas" name="button" onClick="disabledButton('#cadastrar-venda')">
                Limpar
              </button>
            </fieldset>
          </form>
          <hr>
        </section>
        <section id="tabs-mostrar-cupom" className="print">
          <h3>Cupom</h3>
          <ul id="message-cupom"></ul>
          <button type="button" name="button" onClick="searchCupom()">Exibir</button>
          <button type="button" name="button" onClick="hideCupom()">Ocultar</button>
          <button type="button" name="button" onClick="clearCupom()">Excluir tudo</button>
          <button type="button" name="button" onClick="printPreview()">Imprimir</button>
          <button type="button" name="button" onClick="searchCupomRegistrarVenda()">
            ConcluirVenda
          </button>
          <hr>
          <div className="cupom-list">
            <ol id="cupom-list"></ol>
            <p id="total-cupom"></p>
          </div>
        </section>
        <section id="tabs-atualizar-cupom" className="no-print">
          <header>
            <h2>Atualizar Cupom</h2>
          </header>
          <ul id="update-message-cupom"></ul>
          <form id="form-atualizar-cupom">
            <fieldset>
              <legend>Informar id no cupom a ser atualizado</legend>
              <label for="update-id-cupom"><strong>Id</strong></label><br />
              <input type="number" step="0.01" name="update-id-cupom" id="update-id-cupom"
               onchange="changeUpdateCupom()" />
            </fieldset>
            <fieldset>
              <legend>Informe a quantidade</legend>
              <label for="qtde-update-cupom"><strong>Quantidade</strong> </label>
              <input type="number" name="qtde-update-cupom" id="qtde-update-cupom"
              onchange="changeUpdateCupom()" />
            </fieldset>
            <fieldset>
              <legend><strong>Atualizar/Limpar Formulário</strong></legend>
              <button type="button" name="button" onClick="updateCupom()">Atualizar</button>
              <button type="reset" name="button">Limpar</button>
            </fieldset>
          </form>
          <p><strong>Nota: </strong>A atualização do cupom não atualiza os registros de venda.</p>
        </section>
        <section  id="tabs-cancelar-cupom" className="no-print">
          <header>
            <h2>Cancelar Cupom</h2>
          </header>
          <ul id="cancelar-id-cupom"></ul>
          <form>
            <fieldset>
              <legend>Informar id do item no cupom para cancelamento</legend>
              <label for="id-cupom"><strong>Id</strong></label><br />
              <input type="number" step="0.01" name="id-cupom" id="id-cupom" onchange="changeIdCupom()" />
            </fieldset>
            <fieldset>
              <legend><strong>Apagar/Limpar Formulários</strong></legend>
              <button type="button" name="button" onClick="apagarItemCupom()">Apagar</button>
              <button type="reset" name="button">Limpar</button>
            </fieldset>
          </form>
        </section>
      </div>
    `)
}
