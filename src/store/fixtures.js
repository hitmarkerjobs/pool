import { defineStore } from 'pinia'
import fixtures from '../../data/fixtures.json'

export const useFixturesStore = defineStore('fixtures', {
  state: () => {
    return {
      fixtures: fixtures
    }
  },
  getters: {
    seasons: state => state.fixtures.reduce((acc, fixture) => {
      if (!acc[fixture.season]) {
        acc[fixture.season] = fixture.season
      }
      return acc
    }, {}),
    fixturesBySeason: (state) => {
      return (season) => {
        return state.fixtures.filter(fixture => fixture.season === season)
      }
    }
  }
})