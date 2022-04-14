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
  <nav class="flex flex-wrap mb-3">
    <button v-for="season in seasons" :key="season" @click="activeSeason = season" :class="[ activeSeason === season ? 'bg-brand' : 'bg-gray-800 hover:bg-gray-700', 'text-xxs font-semibold uppercase tracking-widest px-3.5 py-2' ]">Season {{ season }}</button>
  </nav>

  <!-- <h2>Standings</h2>
  <ul>
    <li v-for="player in standings">
      {{ player }}
    </li>
  </ul> -->

  <!-- <h2>Fixtures</h2>
  <ul>
    <li v-for="fixture in fixtures">
      {{ fixture }}
    </li>
  </ul> -->

  <table class="min-w-full border border-gray-700">
    <thead class="bg-gray-800 border-b border-gray-700">
      <tr>
        <th width="1"></th>
        <th></th>
        <th class="w-[8%] text-xxs text-gray-400 font-semibold uppercase tracking-widest p-2">P</th>
        <th class="w-[8%] text-xxs text-gray-400 font-semibold uppercase tracking-widest p-2">W</th>
        <th class="w-[8%] text-xxs text-gray-400 font-semibold uppercase tracking-widest p-2">L</th>
        <th class="hidden md:table-cell w-[8%] text-xxs text-gray-400 font-semibold uppercase tracking-widest p-2">FF</th>
        <th class="hidden md:table-cell w-[8%] text-xxs text-gray-400 font-semibold uppercase tracking-widest p-2">FA</th>
        <th class="w-[8%] text-xxs text-gray-400 font-semibold uppercase tracking-widest p-2">FD</th>
        <th class="w-[8%] text-xxs text-gray-400 font-semibold uppercase tracking-widest pr-4 p-2">Pts</th>
      </tr>
    </thead>
    <tbody class="divide-y divide-gray-700">
      <tr v-for="player in standings">
        <td class="text-sm text-center pl-4 p-2">X</td>
        <td class="px-2">
          <div class="flex items-center">
            <img src="https://pool.hitmarker.net/uploads/laurie.jpg" alt="{{ player.name }}" class="flex-none w-12 md:w-16 h-12 md:h-16">
            <span class="font-semibold ml-4">{{ player.name }}</span>
          </div>
        </td>
        <td class="text-sm text-center p-2">X</td>
        <td class="text-sm text-center p-2">{{ player.wins }}</td>
        <td class="text-sm text-center p-2">{{ player.losses }}</td>
        <td class="hidden md:table-cell text-sm text-center p-2">X</td>
        <td class="hidden md:table-cell text-sm text-center p-2">X</td>
        <td class="text-sm text-center p-2">X</td>
        <td class="text-sm text-center font-semibold pr-4 p-2">X</td>
      </tr>
    </tbody>
  </table>


  


</template>