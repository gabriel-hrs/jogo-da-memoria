<template>
  <div class="modal">
    <div class="modal-content">
      <h2>Placar</h2>
      <ul>
        <li v-for="(score, i) in gameStore.bestScores" :key="i">{{ score.name }} - {{ score.rounds }} rodadas</li>
      </ul>
      <button @click="gameStore.showLeaderboard = false">Fechar</button>
    </div>
  </div>
</template>

<script>
import { useGameStore } from '../store/gameStore';

export default {
  setup() {
    const gameStore = useGameStore();
    return { gameStore };
  }
};
</script>