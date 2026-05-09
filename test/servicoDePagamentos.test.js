import ServicoDePagamentos from "../src/servicoDePagamentos.js"
import assert from "node:assert"

describe('Testes do serviço de pagamentos', ()=> {
    it('Deve cadastrar o pagamento com a categoria padrão quando o valor é igual ou menor do que R$100,00', () => {
        const servicoDePagamentos = new ServicoDePagamentos()
        servicoDePagamentos.realizarPagamentos('12345-67890', 'CEMIG', 100)
        
        const meuPagamento = servicoDePagamentos.consultarUltimoPagamento()
        
        assert.equal(meuPagamento.codigoBarrasPagamento, '12345-67890')
        assert.equal(meuPagamento.beneficiarioPagamento,'CEMIG')
        assert.equal(meuPagamento.valorPagamento, 100)
        assert.equal(meuPagamento.categoriaPagamento,'padrao')
    })

    it('Deve cadastrar o pagamento com a categoria cara quando o valor é maior que R$100,00', () => {
        const servicoDePagamentos = new ServicoDePagamentos()
        servicoDePagamentos.realizarPagamentos('12345-67890', 'CEMIG', 101)
        
        const meuPagamento = servicoDePagamentos.consultarUltimoPagamento()
        
        assert.equal(meuPagamento.codigoBarrasPagamento, '12345-67890')
        assert.equal(meuPagamento.beneficiarioPagamento,'CEMIG')
        assert.equal(meuPagamento.valorPagamento, 101)
        assert.equal(meuPagamento.categoriaPagamento,'cara')
    })
})