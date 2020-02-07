<template>
  <Layout/>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hitmarker Pool'
  },
  mounted () {
    this.$router.push(this.$page.latestSeason.edges[0].node.path);
  }
}
</script>

<page-query>
  query {
    latestSeason:allSeasons (limit:1, sortBy:"dateCreated", order:DESC) {
        edges {
          node {
            path
          }
        }
      }
  }
</page-query>
