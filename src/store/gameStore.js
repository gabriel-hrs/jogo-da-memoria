import { defineStore } from 'pinia'

export const useGameStore = defineStore('game', {
  state: () => ({
    emojis: [
      { char: '🐶', name: 'Cachorro' },
      { char: '🐱', name: 'Gato' },
      { char: '🐭', name: 'Rato' },
      { char: '🐹', name: 'Hamster' },
      { char: '🐰', name: 'Coelho' },
      { char: '🦊', name: 'Raposa' },
      { char: '🐻', name: 'Urso' },
      { char: '🐼', name: 'Panda' },
      { char: '🦁', name: 'Leão' },
      { char: '🐯', name: 'Tigre' }
    ],
    cards: [],
    flippedCards: [],
    rounds: 0,
    message: '',
    gameOver: false,
    playerName: '',
    showLeaderboard: false,
    bestScores: [],
  }),
  actions: {
    shuffleCards() {
      let cards = [...this.emojis, ...this.emojis]
        .map(obj => ({ ...obj, flipped: false, matched: false }))
        .sort(() => Math.random() - 0.5);
      this.cards = cards;
    },
    flipCard(index) {
      if (this.cards[index].flipped || this.cards[index].matched || this.flippedCards.length >= 2) return;
      this.cards[index].flipped = true;
      this.flippedCards.push(index);
      if (this.flippedCards.length === 2) {
        this.rounds++;
        this.checkMatch();
      }
    },
    checkMatch() {
      const [first, second] = this.flippedCards;
      if (this.cards[first].char === this.cards[second].char) {
        this.cards[first].matched = this.cards[second].matched = true;
        this.message = 'Par encontrado! 🎉';
        setTimeout(() => this.message = '', 1000);
      } else {
        setTimeout(() => {
          this.cards[first].flipped = this.cards[second].flipped = false;
        }, 1000);
      }
      this.flippedCards = [];
      this.checkGameOver();
    },
    checkGameOver() {
      if (this.cards.every(card => card.matched)) {
        this.gameOver = true;
        this.message = `Jogo finalizado em ${this.rounds} rodadas!`;
      }
    },
    saveScore() {
      if (!this.playerName) return;
      
      this.bestScores.push({ name: this.playerName, rounds: this.rounds });
      this.bestScores.sort((a, b) => a.rounds - b.rounds);
      
      if (this.bestScores.length > 5) {
        this.bestScores.pop();
      }
    
      // Salva no localStorage
      localStorage.setItem('bestScores', JSON.stringify(this.bestScores));
      
      // Não limpar o playerName imediatamente
      this.showLeaderboard = true; // Exibe o placar
    },      
    resetGame() {
      this.shuffleCards();
      this.flippedCards = [];
      this.rounds = 0;
      this.message = '';
      this.gameOver = false;
    }
  }
})