<template>
  <nav class="bg-white px-2 sm:px-4 py-4 bg-gray-900 border-b border-b-gray-600">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <router-link to="/" class="flex items-center">
        <span class="self-center text-xl font-semibold whitespace-nowrap text-white">R&M Gallery</span>
      </router-link>
      <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" @click="openAltMenu">
        <span class="sr-only">Открыть меню</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
      <div class="hidden w-full md:flex md:w-auto space-x-5" id="navbar-default">
        <router-link exact-active-class="active-link" to="/" class="block text-gray-400 font-semibold hover:text-white" aria-current="page">Персонажи</router-link>
        <a href="#" class="block text-gray-400 font-semibold hover:text-white" aria-current="page">Эпизоды</a>
        <a href="#" class="block text-gray-400 font-semibold hover:text-white" aria-current="page">Локации</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "TopNavbar",
  setup() {
    const openAltMenu = () => {
      alert('Пока что не реализовано ;)')
    }

    return {
      openAltMenu
    }
  }
}
</script>

<style scoped>
.active-link {
  @apply text-white;
}
</style>