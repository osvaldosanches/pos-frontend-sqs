const axios = require('axios')

axios
  //.post('http://hml.portalgeprosro.brasilseg.com.br/api/cargas/cargarInserir/risco_emissao', {
  .get('https://sqs.sa-east-1.amazonaws.com/687255601585/AvancarEtapaProcesso?Action=SendMessage&MessageBody=NOVO - 04 de fevereiro 2021', {
    //todo: 'Buy the milk'
  })
  .then(res => {
    console.log(`statusCode: ${res.statusCode}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })