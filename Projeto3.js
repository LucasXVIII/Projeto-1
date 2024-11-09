// Classe Heroi
class Heroi {
  // Construtor da classe
  constructor(nome, idade, tipo) {
    this.nome = nome; // Nome do herói
    this.idade = idade; // Idade do herói
    this.tipo = tipo; // Tipo do herói (guerreiro, mago, monge, ninja)
  }

  // Método atacar
  atacar() {
    let ataque = ''; // Variável para armazenar o tipo de ataque

    // Determinando o tipo de ataque com base no tipo de herói
    if (this.tipo === 'mago') {
      ataque = 'magia';
    } else if (this.tipo === 'guerreiro') {
      ataque = 'espada';
    } else if (this.tipo === 'monge') {
      ataque = 'artes marciais';
    } else if (this.tipo === 'ninja') {
      ataque = 'shuriken';
    }

    // Exibindo a mensagem de ataque
    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

// Exemplo de uso
let heroi1 = new Heroi('Gandalf', 100, 'mago');
let heroi2 = new Heroi('Aragorn', 35, 'guerreiro');
let heroi3 = new Heroi('Monk', 30, 'monge');
let heroi4 = new Heroi('Naruto', 25, 'ninja');

// Chamando o método atacar para cada herói
heroi1.atacar(); // O mago atacou usando magia
heroi2.atacar(); // O guerreiro atacou usando espada
heroi3.atacar(); // O monge atacou usando artes marciais
heroi4.atacar(); // O ninja atacou usando shuriken
