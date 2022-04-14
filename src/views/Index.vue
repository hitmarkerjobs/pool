<script setup>
import { ref, computed } from 'vue'
import { useFixturesStore } from '../store/fixtures'
const fixturesStore = useFixturesStore()

const activeSeason = ref(null)
const seasons = computed(() => Object.values(fixturesStore.seasons).reverse())

activeSeason.value = seasons.value[0]

const fixtures = computed(() => fixturesStore.fixturesBySeason(activeSeason.value))
const standings = computed(() => {
  const players = fixtures.value.reduce((players, fixture) => {
    if (!players[fixture.player1.name]) {
      players[fixture.player1.name] = {
        name: fixture.player1.name,
        wins: 0,
        losses: 0,
        frames: 0,
      }
    }

    if (!players[fixture.player2.name]) {
      players[fixture.player2.name] = {
        name: fixture.player2.name,
        wins: 0,
        losses: 0,
        frames: 0,
      }
    }

    players[fixture.player1.name].frames += fixture.player1.frames
    players[fixture.player2.name].frames += fixture.player2.frames

    const winner = (fixture.player1.frames > fixture.player2.frames) ? fixture.player1.name : fixture.player2.name;
    const loser = (winner == fixture.player1.name) ? fixture.player2.name : fixture.player1.name;

    players[winner].wins += 1
    players[loser].losses += 1

    return players
  }, {})

  return Object.values(players).sort((a, b) => {
    if (a.wins > b.wins) return -1
    if (a.wins < b.wins) return 1
    if (a.losses < b.losses) return -1
    if (a.losses > b.losses) return 1

    // if (a.frames < b.frames) return -1
    // if (a.frames > b.frames) return 1

    return 1
  })
})

</script>

<template>
  <div class="flex space-x-2">
    <button v-for="season in seasons" :key="season" :class="{ 'underline': activeSeason === season }" @click="activeSeason = season">
      Season {{ season }}
    </button>
  </div>

  <h2>Standings</h2>
  <ul>
    <li v-for="player in standings">
      {{ player }}
    </li>
  </ul>

  <h2>Fixtures</h2>
  <ul>
    <li v-for="fixture in fixtures">
      {{ fixture }}
    </li>
  </ul>
</template>