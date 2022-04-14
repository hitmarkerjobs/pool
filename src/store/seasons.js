import { defineStore } from 'pinia'
import seasons from '../../data/seasons.json'

export const useSeasonsStore = defineStore('seasons', {
  state: () => {
    return {
      seasons: seasons
    }
  }
})