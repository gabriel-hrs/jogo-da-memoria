<template>
  <div class="card" :class="{ flipped: card.flipped || card.matched }" @click="gameStore.flipCard(index)">
    <span v-if="card.flipped || card.matched">{{ card.char }}</span>
    <p v-if="card.flipped || card.matched" class="animal-name">{{ card.name }}</p>
  </div>
</template>

<script>
import { useGameStore } from '../store/gameStore';

export default {
  props: ['card', 'index'],
  setup() {
    const gameStore = useGameStore();
    return { gameStore };
  }
};
</script>