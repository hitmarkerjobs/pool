<template>
  <header class="sticky top-0 z-10 bg-gray-900/50 backdrop-blur px-5">
    <div class="max-w-6xl mx-auto">
      <div class="flex justify-between border-b border-gray-800 py-5">
        <router-link to="/" class="inline-flex items-center">
          <svg class="flex-none w-8 h-8" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path d="M172.32 150.1a87.37 87.37 0 0 0 14.24-34.39c.92-5.1 1.43-10.35 1.43-15.71 0-5.37-.51-10.61-1.43-15.71a87.517 87.517 0 0 0-14.24-34.39l26.96-26.96.72-.72L177.78 0l-.72.72-26.96 26.96a87.37 87.37 0 0 0-34.39-14.24C110.61 12.51 105.37 12 100 12s-10.61.51-15.71 1.43A87.517 87.517 0 0 0 49.9 27.67L22.94.72 22.22 0 0 22.22l.72.72L27.68 49.9a87.386 87.386 0 0 0-14.25 34.39C12.51 89.39 12 94.63 12 100s.51 10.61 1.43 15.71a87.517 87.517 0 0 0 14.24 34.39L.72 177.06l-.72.72L22.22 200l.72-.72 26.96-26.96a87.37 87.37 0 0 0 34.39 14.24c5.1.92 10.35 1.43 15.71 1.43 5.37 0 10.61-.51 15.71-1.43a87.517 87.517 0 0 0 34.39-14.24l26.96 26.96.72.72L200 177.78l-.72-.72zm-1.77-34.39a71.71 71.71 0 0 1-9.56 23.06l-23.06-23.06h-22.22v22.22l23.06 23.06a71.934 71.934 0 0 1-23.06 9.56c-5.06 1.12-10.31 1.73-15.71 1.73s-10.65-.61-15.71-1.73a71.71 71.71 0 0 1-23.06-9.56l23.06-23.06v-22.22H62.06L39 138.77a71.934 71.934 0 0 1-9.56-23.06c-1.12-5.06-1.73-10.31-1.73-15.71s.61-10.65 1.73-15.71A71.71 71.71 0 0 1 39 61.23l23.06 23.06h22.22V62.06L61.23 39.01a71.934 71.934 0 0 1 23.06-9.56c5.06-1.12 10.31-1.73 15.71-1.73s10.65.61 15.71 1.73a71.71 71.71 0 0 1 23.06 9.56l-23.06 23.06v22.22h22.22l23.06-23.06a71.934 71.934 0 0 1 9.56 23.06c1.12 5.06 1.73 10.31 1.73 15.71s-.61 10.65-1.73 15.71z" fill="#FF5800"/></svg>
          <span class="text-2xl font-semibold ml-3.5">Hitmarker Pool</span>
        </router-link>
      </div>
    </div>
  </header>

  <main class="px-5 py-10">
    <div class="max-w-6xl mx-auto">
      <router-view></router-view>
    </div>
  </main>

  <footer class="px-5">
    <div class="max-w-6xl mx-auto">
      <div class="border-t border-gray-800 py-5">
        <p class="text-xs text-gray-500">&copy; {{ (new Date()).getFullYear() }} Hitmarker LTD</p>
      </div>
    </div>
  </footer>
</template>
