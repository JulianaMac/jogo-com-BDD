const chai = require('chai')
const jogo = require('../../jogo')
const expect = chai.expect

describe('Jogo | Unit', () => {
  context('quando número gerado for maior que o número inserido', () => {
    it('retorna a mensagem "Digite um número menor!"', () => {
      const numeroGerado = 50
      const resposta = 51

      const resultado = jogo(numeroGerado, resposta)

      expect(resultado).to.be.an('object')
      expect(resultado.mensagemErro)
        .to
        .be
        .equal('Digite um número menor!')
    })
  })

  context('quando o número gerado for menor que o número inserido', () => {
    it('retorna a mensagem "Digite um número maior!"', () => {
      const numeroGerado = 50
      const resposta = 47

      const resultado = jogo(numeroGerado, resposta)

      expect(resultado).to.be.an('object')
      expect(resultado.mensagemErro).to.be.equal('Digite um número maior!')
    })
  })

  context('quando o número gerado for igual ao número inserido', () => {
    it('retorna um objeto com a chave acertou como "true"', () => {
      const numeroGerado = 40
      const resposta = 40

      const resultado = jogo(numeroGerado, resposta)

      expect(resultado).to.be.an('object')
      expect(resultado.acertou).to.be.true
    })
  })

context('quando o número gerado for não for um número válido.', () => {
    it('retorna a mensagem "Não é número válido', () => {
        const numeroGerado = 50
        const resposta = 'ola mundo'

        const resultado = jogo(numeroGerado, resposta)

        expect(resultado).to.be.an('object')
        expect(resultado.mensagemErro).to.be.equal('Não é um número válido!')
        })
    })
})