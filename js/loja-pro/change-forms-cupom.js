let idCupomDel
const changeIdCupom = ()=>{
  let codigoCupom = document.getElementById('id-cupom')
  idCupomDel = Number(codigoCupom.value)
}
// Update cupom
let idForUpdateCupom, qtdeUpdateCupom;
const changeUpdateCupom = () => {
  let idUpdate = document.getElementById('update-id-cupom')
  let qtde = document.getElementById('qtde-update-cupom')
  idForUpdateCupom = Number(idUpdate.value)
  qtdeUpdateCupom = Number(qtde.value)
}
