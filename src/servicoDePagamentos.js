export default class ServicoDePagamentos {
    #pagamentos 

    constructor() { 
        this.#pagamentos = [];
    }

    realizarPagamentos(codigoBarras, beneficiario, valor) {
        
        let categoriaPagamento

        if (valor > 100) {
            categoriaPagamento = 'cara'
        } else {
            categoriaPagamento = 'padrao'
        }
        
        this.#pagamentos.push({
            codigoBarrasPagamento: codigoBarras,
            beneficiarioPagamento: beneficiario,
            valorPagamento: valor,
            categoriaPagamento: categoriaPagamento
        })
    }

    consultarUltimoPagamento() {
        return this.#pagamentos.at(-1);
    }
}