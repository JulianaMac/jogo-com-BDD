function jogo(numeroGerado, resposta) {
    const numeroFormatado = parseInt(resposta)
    if (Number.isNaN(numeroFormatado)) {
      return { mensagemErro: 'Não é um número válido' }
    }
    if (numeroGerado == resposta){

        return{
            acertou: true
        }
    }
    if (resposta < numeroGerado){
        return{
            mensagemErro: "Digite um número maior!"
        }
    }else{
        return{
            mensagemErro:"Digite um número menor!"
        }

    }
}
module.exports = jogo
