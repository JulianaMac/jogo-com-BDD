function jogo(numeroGerado, resposta) {
    const numeroFormatado = parseInt(resposta)
    if (Number.isNaN(numeroFormatado)) {
      return { mensagemErro: 'Não é um número válido!' }
    }
    const numeroAdivinhado = parseInt(resposta)

    if(numeroAdivinhado == numeroGerado){
        return {acertou: true}
    }
    if (numeroAdivinhado > numeroGerado){
        return{
            mensagemErro: "Digite um número menor!"
        }
    }else{
        return{
            mensagemErro:"Digite um número maior!"
        }

    }
}
module.exports = jogo
