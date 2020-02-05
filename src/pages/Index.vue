<template>
  <Layout>
    <table class="table-auto w-full border border-gray-600 text-center">
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
          v-for="(edge, index) in players"
          :key="edge.node.id"
          class="border-t border-gray-600"
        >
          <td class="px-4">{{ index+1 }}</td>

          <td class="text-left pr-2">
            <div class="flex items-center">
              <div class="flex-none w-16 h-16">
                <g-image :src="edge.node.photo" />
              </div>

              <div class="font-bold ml-4">{{ edge.node.name }}</div>
            </div>
          </td>
          
          <td class="px-2">{{ edge.node.wins + edge.node.losses }}</td>
          <td class="px-2">{{ edge.node.wins }}</td>
          <td class="px-2">{{ edge.node.losses }}</td>
          <td class="px-2">{{ edge.node.wins * 3 }}</td>
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
      return this.$page.players.edges;
    }
  }
}
</script>

<page-query>
  query {
    players: allPlayer  {
      edges {
        node {
          name
          photo
          wins
          losses
        }
      }
    }
  }
</page-query>