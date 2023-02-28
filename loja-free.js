// Definindo o nome do banco 
const dbNameVendas = "registroVendas";
const createBase = () => {
  //Verificando se o browser tem suporte ao IndexedDB
  window.indexedDB = window.indexedDB || window.mozIndexedDB ||
    window.webkitIndexedDB || window.msIndexedDB
  if(!window.indexedDB){
  alert("Seu navegador não suporta o recurso IndexedDB. Atualize para usar o sistema de vendas.")
  }
  const request = indexedDB.open(dbNameVendas, 3);

  request.onupgradeneeded = function(event) {
    const db = event.target.result
    // Cria um objectStore para conter a informação sobre vendas.
    // Cria um índice para buscar vendas pelo id
    const objectStore = db.createObjectStore("vendas", { keyPath: 'id', autoIncrement: true } );

    //Criar os índices ou propriedades do objeto
    objectStore.createIndex("codigo", "codigo", { unique: false });
    objectStore.createIndex("qtde", "qtde", { unique: false });
    objectStore.createIndex("preco", "preco", { unique: false });
    objectStore.createIndex("subtotal", "subtotal", { unique: false });
    // Estoque
    const objectStoreEstoque = db.createObjectStore("estoque", { keyPath: 'codigo' } );

    //Criar os índices ou propriedades do objeto
    objectStoreEstoque.createIndex("codigo", "codigo", { unique: true });
    objectStoreEstoque.createIndex("qtde", "qtde", { unique: false });
    objectStoreEstoque.createIndex("preco", "preco", { unique: false });
  }
}
