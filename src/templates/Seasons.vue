<template>
  <Layout>
    <div class="flex text-xs font-bold uppercase leading-none -mx-1">
      <g-link 
        v-for="season in $page.seasons.edges"
        :key="season.node.id"
        :to="season.node.path"
        active-class="bg-brand"
        class="bg-gray-700 px-3 py-2 mx-1"
      >
        {{ season.node.title }}
      </g-link>
    </div>

    <table class="table-auto w-full border border-gray-700 text-center">
      <thead>
        <tr class="bg-gray-800">
          <th width="1"></th>
          <th></th>
          <th class="font-bold p-2">P</th>
          <th class="font-bold p-2">W</th>
          <th class="font-bold p-2">L</th>      
          <th class="font-bold p-2">Pts</th>
        </tr>
      </thead>
      <tbody>
      <tr 
          v-for="(player, index) in players"
          :key="player.id"
          class="border-t border-gray-700"
        >
          <td class="px-4">{{ index+1 }}</td>

          <td class="text-left pr-2">
            <div class="flex items-center">
              <div class="flex-none w-16 h-16">
                <g-image :src="player.photo" />
              </div>

              <div class="font-bold ml-4">{{ player.name }}</div>
            </div>
          </td>
          
          <td class="px-2">{{ player.wins + player.losses }}</td>
          <td class="px-2">{{ player.wins }}</td>
          <td class="px-2">{{ player.losses }}</td>
          <td class="px-2">{{ player.wins * 3 }}</td>
        </tr>
      </tbody>
    </table>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hitmarker Pool'
  },
  computed: {
    players () {
      let wins = [];
      let losses = [];

      let allPlayers = this.$page.players.edges
        .map(p => p.node)
        .reduce((ps, p) => {
          ps[p.id] = p;
          return ps;
        }, {});

      let players = this.$page.season.fixtures
        .map(f => {
          let winner = (f.player1Score > f.player2Score) ?
            f.player1 :
            f.player2;
          let loser = (winner == f.player1) ? f.player2 : f.player1;

          wins.push(winner);
          losses.push(loser);

          return [f.player1, f.player2];
        })
        .flat()
        .filter((v, i, a) => a.indexOf(v) === i)
        .map(p => allPlayers[p]);

      wins = wins.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});
      losses = losses.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});

      players.forEach(player => {
        player.wins = wins[player.id] || 0;
        player.losses = losses[player.id] || 0;
      });

      return players.sort((a,b) => {
        if (a.wins > b.wins) {
          return -1;
        } else if (a.wins < b.wins) {
          return 1;
        } else if (a.losses < b.losses) {
          return -1;
        } else {
          return 1;
        }
      });
    }
  }
}
</script>

<page-query>
  query ($id: ID!) {
    seasons:allSeasons (sortBy:"dateCreated", order:DESC) {
      edges {
        node {
          id
          title
          path
        }
      }
    }
    players:allPlayer {
      edges {
        node {
          id
          name
          photo
        }
      }
    }
    season:seasons (id: $id) {
      title
      fixtures {
        player1
        player1Score
        player2
        player2Score
      }
    }
  }
</page-query>
