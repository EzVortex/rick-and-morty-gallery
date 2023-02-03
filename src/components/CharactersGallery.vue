<template>
  <div class="container mx-auto flex flex-col py-8">
    <h1 class="text-white font-semibold text-2xl mb-5">Галерея персонажей</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 items-start">
      <CharacterItem v-for="character in characters" :key="character.id" :character="character" />
    </div>
    <GalleryLoader :active="isLoadingActive" ref="loader" />
  </div>
</template>

<script>
import {inject, onMounted, ref} from "vue";
import CharacterItem from "@/components/CharacterItem";
import GalleryLoader from "@/components/GalleryLoader.vue";
export default {
  name: "CharactersGallery",
  components: {GalleryLoader, CharacterItem},
  setup() {
    const axios = inject('axios')

    let currentPage = 1
    let totalPages = 1
    const characters = ref([])
    const isLoadingActive = ref(false)
    const loader = ref(null)

    onMounted(async () => {
      await fetchCharacters(currentPage)
      observer.observe(loader.value.$el)
    })

    const fetchCharacters = async (page) => {
      isLoadingActive.value = true
      try {
        if (currentPage > totalPages) currentPage = 1

        const response = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
        characters.value.push(...response.data['results'])
        totalPages = response.data['info']['pages']
        currentPage++
      } catch (e) {
        console.log('Failed to load data.', e)
      }
      isLoadingActive.value = false
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting && !isLoadingActive.value) {
        fetchCharacters(currentPage)
      }
    }, { threshold: 0 });

    return {
      characters,
      isLoadingActive,
      loader
    }
  }
}
</script>

<style scoped>

</style>