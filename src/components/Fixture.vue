<script setup>
import { computed } from 'vue'

const props = defineProps({
  fixture: {
    type: Object,
    required: true
  },
  played: {
    type: Boolean
  }
})

const player1 = computed(() => {
  const name = Object.keys(props.fixture)[0];
  const score = props.fixture[name];
  return { name, score }
})

const player2 = computed(() => {
  const name = Object.keys(props.fixture)[1];
  const score = props.fixture[name];
  return { name, score }
})

const winner = computed(() => {
  const player1Score = player1.value.score;
  const player2Score = player2.value.score;
  if (player1Score >= player2Score) {
    return player1.value;
  } else {
    return player2.value;
  }
})

const loser = computed(() => {
  if (winner.value.name == player1.value.name) {
    return player2.value;
  } else {
    return player1.value;
  }
})

</script>

<template>
  <li class="grid grid-cols-[1fr,76px,1fr] gap-3 border border-gray-700 p-3">
    <div class="self-center text-right font-semibold truncate">{{ winner.name }}</div>
    <div class="grid grid-cols-2 gap-3">
      <template v-if="played">
        <div class="inline-flex items-center justify-center h-8 bg-emerald-500 text-xs font-semibold">{{ winner.score }}</div>
        <div class="inline-flex items-center justify-center h-8 bg-rose-500 text-xs font-semibold">{{ loser.score }}</div>
      </template>
      <template v-else>
        <div class="inline-flex items-center justify-center h-8 bg-gray-700 text-xs font-semibold">-</div>
        <div class="inline-flex items-center justify-center h-8 bg-gray-700 text-xs font-semibold">-</div>
      </template>
    </div>
    <div class="self-center  font-semibold truncate">{{ loser.name }}</div>
  </li>
</template>