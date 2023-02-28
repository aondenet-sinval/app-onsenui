// Resetar Formulários
//Parametros:
// par = id do formulário = par
// dsb = id do button a sofrer o disabled
// const resetForm = (par, dsb) => {
//   const button = document.querySelector(dsb)
//   const form = document.getElementById(par)
//   setTimeout (() => {
//     form.reset()
//     button.disabled = true
//   }, 3000
//   )
//   setTimeout (() => {
//     button.disabled = true
//   }, 3000
//   )
// }
// Desabilitar o button passe o id para desabilitar
const disabledButton = (dsb) => {
  const button = document.querySelector(dsb)
  if (button.disabled === false) {
    button.disabled = true
  }else {
    button.disabled = false
  }
}
