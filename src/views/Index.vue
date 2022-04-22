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

const standings = computed(() => {
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

    const framesDifference =  framesFor - framesAgainst

    return {
      name: player,
      played: playerMatches.length,
      won,
      lost,
      framesFor,
      framesAgainst,
      framesDifference
    }
  })
  .sort((a, b) => {
    if (a.won > b.won) return -1
    if (a.won < b.won) return 1
    if (a.lost < b.lost) return -1
    if (a.lost > b.lost) return 1
    if (a.framesDifference > b.framesDifference) return -1

    return 1;
  })
})
</script>

<template>
  <nav class="flex flex-wrap gap-3 mb-10">
    <button v-for="season in seasons" :key="season" @click="activeSeason = season" :class="[ activeSeason === season ? 'bg-brand border-transparent' : 'bg-gray-800 hover:bg-gray-700 border-gray-700', 'text-xxs font-semibold uppercase tracking-widest border px-3.5 py-2' ]">{{ season.title }}</button>
  </nav>

  <div>
    <div class="relative flex items-center mb-3">
      <div class="text-sm font-semibold uppercase tracking-widest pr-3.5">Standings</div>
      <div class="w-full h-[2px] bg-brand"></div>
    </div>

    <table class="min-w-full border border-gray-700 mb-10">
      <thead class="bg-gray-800 border-b border-gray-700">
        <tr>
          <th width="1" class="hidden md:table-cell"></th>
          <th></th>
          <th class="w-[50px] md:w-[60px] text-xxs text-gray-400 font-semibold uppercase tracking-widest p-2">P</th>
          <th class="w-[50px] md:w-[60px] text-xxs text-gray-400 font-semibold uppercase tracking-widest p-2">W</th>
          <th class="w-[50px] md:w-[60px] text-xxs text-gray-400 font-semibold uppercase tracking-widest p-2">L</th>
          <th class="hidden md:table-cell w-[50px] md:w-[60px] text-xxs text-gray-400 font-semibold uppercase tracking-widest p-2">FF</th>
          <th class="hidden md:table-cell w-[50px] md:w-[60px] text-xxs text-gray-400 font-semibold uppercase tracking-widest p-2">FA</th>
          <th class="hidden md:table-cell w-[50px] md:w-[60px] text-xxs text-gray-400 font-semibold uppercase tracking-widest p-2">FD</th>
          <th class="w-[50px] md:w-[60px] text-xxs text-gray-400 font-semibold uppercase tracking-widest pr-4 p-2">Pts</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-700">
        <tr v-for="(player, index) in standings">
          <td class="hidden md:table-cell text-sm text-center pl-4 p-2">{{ index + 1 }}</td>
          <td class="pr-2 md:pl-2">
            <div class="flex items-center">
              <img :src="`/${player.name.toLowerCase()}.jpeg`" :alt="player.name" class="flex-none w-12 md:w-16 h-12 md:h-16">
              <span class="font-semibold truncate ml-4">{{ player.name }}</span>
            </div>
          </td>
          <td class="text-sm text-center p-2">{{ player.played }}</td>
          <td class="text-sm text-center p-2">{{ player.won }}</td>
          <td class="text-sm text-center p-2">{{ player.lost }}</td>
          <td class="hidden md:table-cell text-sm text-center p-2">{{ player.framesFor }}</td>
          <td class="hidden md:table-cell text-sm text-center p-2">{{ player.framesAgainst }}</td>
          <td class="hidden md:table-cell text-sm text-center p-2">{{ player.framesDifference }}</td>
          <td class="text-sm text-center font-semibold pr-4 p-2">{{ player.won * 3 }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
    <div>
      <div class="relative flex items-center mb-3">
        <div class="text-sm font-semibold uppercase tracking-widest pr-3.5">Fixtures</div>
        <div class="w-full h-[2px] bg-brand"></div>
      </div>

      <ul class="space-y-2">
        <li v-for="fixture in fixtures" class="grid grid-cols-[1fr,76px,1fr] gap-3 border border-gray-700 p-3">
          <div class="self-center text-right font-semibold truncate">James</div>
          <div class="grid grid-cols-2 gap-3">
            <div class="inline-flex items-center justify-center h-8 bg-gray-700 text-xs font-semibold">-</div>
            <div class="inline-flex items-center justify-center h-8 bg-gray-700 text-xs font-semibold">-</div>
          </div>
          <div class="self-center  font-semibold truncate">Cam</div>
        </li>
      </ul>
    </div>

    <div>
      <div class="relative flex items-center mb-3">
        <div class="text-sm font-semibold uppercase tracking-widest pr-3.5">Results</div>
        <div class="w-full h-[2px] bg-brand"></div>
      </div>

      <ul class="space-y-2">
        <li v-for="fixture in fixtures" class="grid grid-cols-[1fr,76px,1fr] gap-3 border border-gray-700 p-3">
          <div class="self-center text-right font-semibold truncate">James</div>
          <div class="grid grid-cols-2 gap-3">
            <div class="inline-flex items-center justify-center h-8 bg-emerald-500 text-xs font-semibold">2</div>
            <div class="inline-flex items-center justify-center h-8 bg-rose-500 text-xs font-semibold">0</div>
          </div>
          <div class="self-center  font-semibold truncate">Cam</div>
        </li>
      </ul>
    </div>
  </div> -->
</template>
