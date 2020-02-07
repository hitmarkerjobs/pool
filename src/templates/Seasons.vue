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

    {{ $page.season.title }}
    {{ $page.season.fixtures }}
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hitmarker Pool'
  }
}
</script>

<page-query>
  query ($id: ID!) {
    seasons:allSeasons {
      edges {
        node {
          id
          title
          path
        }
      }
    }
    season:seasons (id: $id) {
      title
      fixtures {
        fixture {
          player1
          player1Score
          player2
          player2Score
        }
      }
    }
  }
</page-query>
