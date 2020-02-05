<template>
  <Layout>
    <div class="flex text-xs font-bold uppercase leading-none -mx-1">
      <a href="#" class="bg-gray-700 px-3 py-2 mx-1">Season 1</a>
      <a href="#" class="bg-gray-800 hover:text-brand px-3 py-2 mx-1">Season 2</a>
      <a href="#" class="bg-gray-800 hover:text-brand px-3 py-2 mx-1">Season 3</a>
    </div>

    <table class="table-auto w-full border border-gray-700 text-center">
      <thead>
        <tr class="bg-gray-800">
          <th width="1"></th>
          <th></th>
          <th class="font-bold p-2">P</th>
          <th class="font-bold p-2">w</th>
          <th class="font-bold p-2">L</th>      
          <th class="font-bold p-2">Pts</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="(edge, index) in $page.players.edges"
          :key="edge.node.id"
          class="border-t border-gray-700"
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
          
          <td class="px-2">999</td>
          <td class="px-2">99</td>
          <td class="px-2">99</td>
          <td class="px-2">280</td>
        </tr>
      </tbody>
    </table>
  </Layout>
</template>

<page-query>
  query {
    players: allPlayer {
      edges {
        node {
          name
          photo
        }
      }
    }
  }
</page-query>
