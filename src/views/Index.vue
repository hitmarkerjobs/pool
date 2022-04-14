<script setup>
import { ref, computed } from 'vue'
import { useSeasonsStore } from '../store/seasons'
const seasonsStore = useSeasonsStore()

const activeSeason = ref(null)
const seasons = computed(() => Object.values(seasonsStore.seasons).reverse())

activeSeason.value = seasons.value[0]

const fixtures = computed(() => {
  const players = activeSeason.value.players
  const fixtures = []

  for (let i = 0; i < activeSeason.value.rounds; i++) {
    for (let i = 0; i < players.length; i++) {
      for (let j = i + 1; j < players.length; j++) {
        fixtures.push({ [players[i]]: 0, [players[j]]: 0 })
      }
    }
  }

  activeSeason.value.matches.forEach(match => {
    const players = Object.keys(match)
    const fixture = fixtures.findIndex(f => {
      return f.hasOwnProperty(players[0]) && f.hasOwnProperty(players[1]) && (f[players[1]] != 0 || f[players[2]] != 0)
    })

    if (fixture != -1) {
      fixtures.splice(fixture, 1)
    }
  })

  return activeSeason.value.matches.concat(fixtures)
})

const seasonPlayers = computed(() => {
  return activeSeason.value.players.map(player => {
    const playerMatches = activeSeason.value.matches.filter(match => {
      return match.hasOwnProperty(player)
    });

    let won = 0
    let lost = 0
    let framesFor = 0
    let framesAgainst = 0
    
    playerMatches.forEach((match) => {
      const opponent = Object.keys(match).find(key => key != player) 
      
      if (match[player] > match[opponent]) {
        won++
        framesFor += match[player]
        framesAgainst += match[opponent]
      } else {
        lost++
        framesFor += match[player]
        framesAgainst += match[opponent]
      }
    })

    console.log(playerMatches)

    return {
      name: player,
      played: playerMatches.length,
      won,
      lost,
      framesFor,
      framesAgainst,
    }
  })
})

</script>

<template>
  <div class="flex space-x-2">
    <button v-for="season in seasons" :key="season.id" :class="{ 'underline': activeSeason === season }" @click="activeSeason = season">
      {{ season.title }}
    </button>
  </div>

  <h2>Standings</h2>
  <ul>
    <li v-for="player in seasonPlayers">
      {{ player }}
    </li>
  </ul>
 
  
  <h2>Fixtures</h2>
  <ul>
    <li v-for="fixture in fixtures" class="flex" :class="{ 'opacity-50': Object.values(fixture).reduce((total, score) => total += score, 0) > 0 }">
      <div v-for="([player, score], i) in Object.entries(fixture)">
        {{ player }} {{ score }} <template v-if="i === 0">vs&nbsp;</template>
      </div>
    </li>
  </ul>
</template>