function jogo(numeroGerado, resposta) {
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
