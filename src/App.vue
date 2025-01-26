<template>
  <div class="app">
    <h1>Jogo da Memória</h1>
    <p>Rodadas: {{ gameStore.rounds }}</p>
    <GameBoard />
    <button @click="gameStore.showLeaderboard = true">Ver melhores jogadas</button>
    <Leaderboard v-if="gameStore.showLeaderboard" />
  </div>
</template>

<script>
import { useGameStore } from './store/gameStore';
import GameBoard from './components/GameBoard.vue';
import Leaderboard from './components/Leaderboard.vue';

export default {
  components: { GameBoard, Leaderboard },
  setup() {
    const gameStore = useGameStore();
    return { gameStore };
  }
};
</script>
