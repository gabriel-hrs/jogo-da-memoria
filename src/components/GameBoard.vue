<template>
  <div>
    <div class="grid">
      <Card v-for="(card, index) in gameStore.cards" :key="index" :card="card" :index="index" />
    </div>

    <!-- Exibir mensagem de sucesso -->
    <p v-if="gameStore.gameOver">{{ gameStore.message }}</p>

    <!-- Input de nome - Aparece apenas quando o jogo terminar e o nome não foi salvo -->
    <div v-if="gameStore.gameOver && !isNameEntered">
      <input v-model="gameStore.playerName" placeholder="Digite seu nome" />
      <button @click="savePlayerName">Salvar Placar</button>
    </div>

    <!-- Botões de reiniciar e ver placar - Aparecem após o nome ser salvo -->
    <div v-if="gameStore.gameOver && isNameEntered">
      <button @click="gameStore.resetGame">Reiniciar Jogo</button>
      <button @click="gameStore.showLeaderboard = !gameStore.showLeaderboard" v-if="!gameStore.showLeaderboard">Ver Melhores Jogadas</button>
    </div>

    <!-- Exibir placar -->
    <div v-if="gameStore.showLeaderboard">
      <ul>
        <li v-for="(score, index) in gameStore.bestScores" :key="index">
          {{ score.name }} - {{ score.rounds }} rodadas
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useGameStore } from '../store/gameStore';
import Card from './Card.vue';

export default {
  components: { Card },
  data() {
    return {
      isNameEntered: false, // Controle do estado do input de nome
    };
  },
  setup() {
    const gameStore = useGameStore();
    gameStore.shuffleCards();  // Chama o método para embaralhar e inicializar os cards
    return { gameStore };
  },
  methods: {
    // Função para salvar o nome do jogador e atualizar o estado
    savePlayerName() {
      if (this.gameStore.playerName) {
        this.gameStore.saveScore();
        this.isNameEntered = true; // Marca que o nome foi inserido
      }
    }
  }
};
</script>
