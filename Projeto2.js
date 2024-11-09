// Função para calcular o saldo e determinar o nível do jogador
function calcularRanqueadas(vitorias, derrotas) {
    // Calculando o saldo de vitórias
    let saldoVitorias = vitorias - derrotas;

    // Determinando o nível com base nas vitórias
    let nivel = '';
    
    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else if (vitorias >= 101) {
        nivel = 'Imortal';
    }

    // Exibindo a mensagem final com o saldo de vitórias e o nível
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

// Exemplo de uso da função
calcularRanqueadas(45, 20); // Substitua com os valores de vitórias e derrotas
