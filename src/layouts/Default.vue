<template>
  <div>
    <header class="border-t-4 border-brand px-4 py-8">
      <div class="max-w-2xl mx-auto">
        <div class="flex items-center">
          <g-link to="/" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 283.5 283.5"><path fill="#FF5800" d="M270 141.7c0-26.9-8.4-51.9-22.6-72.6L283.5 33 250.4 0l-36.1 36.1c-20.7-14.2-45.7-22.6-72.6-22.6-26.9 0-51.9 8.4-72.6 22.6L33.1 0 0 33.1l36.1 36.1c-14.2 20.7-22.6 45.7-22.6 72.6 0 26.9 8.4 51.9 22.6 72.6L0 250.4l33.1 33.1 36.1-36.1c20.7 14.2 45.7 22.6 72.6 22.6s51.9-8.4 72.6-22.6l36.1 36.1 33.1-33.1-36.1-36.1c14.1-20.6 22.5-45.6 22.5-72.6zM141.7 249.6c-21.3 0-41.2-6.2-57.9-16.9l34.8-34.8v-33.1H85.5l-34.8 34.8C40 182.9 33.8 163 33.8 141.7c0-21.3 6.2-41.2 16.9-57.9l34.8 34.8h33.1V85.5L83.8 50.7c16.7-10.7 36.6-16.9 57.9-16.9 21.3 0 41.2 6.2 57.9 16.9l-34.8 34.8v33.1H198l34.8-34.8c10.7 16.7 16.9 36.6 16.9 57.9 0 21.3-6.2 41.2-16.9 57.9L198 164.9h-33.1V198l34.8 34.8c-16.8 10.6-36.7 16.8-58 16.8z"/></svg>
            <div class="text-xl font-extrabold uppercase leading-none ml-3">Hitmarker <span class="text-brand">Pool</span></div>
          </g-link>

          <div class="flex-auto"></div>

          <g-link to="/rules" class="bg-gray-700 hover:bg-brand text-xs font-bold uppercase leading-none px-3 py-2">Rules</g-link>
        </div>
      </div>
    </header>

    <main class="px-4 mb-8">
      <div class="max-w-2xl mx-auto">
        <slot/>
      </div>
    </main>

    <footer class="px-4 mb-8">
      <div class="max-w-2xl mx-auto">
        <div class="text-sm text-gray-600">&copy; {{ (new Date()).getFullYear() }} <a target="_blank" href="https://hitmarker.net" class="hover:text-brand">Hitmarker Ltd.</a></div>
      </div>
    </footer>
  </div>
</template>
