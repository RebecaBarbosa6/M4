
const { alimentos, desperdicio } = require('../models/alimentos');

exports.listarAlimentosProximosValidade = (req, res) => {
    const dataAtual = new Date();
    const alimentosValidadeProxima = alimentos.filter(alimento => {
        const dataValidade = new Date(alimento.validade);
        const diferencaDias = (dataValidade - dataAtual) / (1000 * 3600 * 24);
        return diferencaDias <= 7;
    });
    res.json(alimentosValidadeProxima);
};

exports.registrarDesperdicio = (req, res) => {
    const { id, quantidade } = req.query;
    const alimento = alimentos.find(alimento => alimento.id == id);
    if (alimento) {
        alimento.quantidade -= quantidade;
        desperdicio.push({ id: alimento.id, quantidade: quantidade });
    }
    res.json({ desperdicio, alimentos });
};

exports.sugerirReceitas = (req, res) => {
    const receitas = [
        { nome: 'Salada de Tomate', ingredientes: ['Tomate', 'Azeite', 'Sal'] },
        { nome: 'Vitamina de Banana', ingredientes: ['Banana', 'Leite'] },
        { nome: 'Leite com Mel', ingredientes: ['Leite', 'Mel'] },
    ];

    const sugestoes = receitas.filter(receita => 
        receita.ingredientes.every(ingrediente =>
            alimentos.some(alimento => alimento.nome.toLowerCase() === ingrediente.toLowerCase() && alimento.quantidade > 0)
        )
    );

    res.json(sugestoes);
};
