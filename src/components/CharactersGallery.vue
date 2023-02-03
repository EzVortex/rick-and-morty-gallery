<template>
  <div class="container mx-auto flex flex-col pt-8">
    <h1 class="text-white font-semibold text-2xl mb-5">Галерея персонажей</h1>
    <div class="columns-5">
      <CharacterItem v-for="index in 20" :key="index" />
    </div>
  </div>
</template>

<script>
import CharacterItem from "@/components/CharacterItem";
export default {
  name: "CharactersGallery",
  components: {CharacterItem}
}
</script>

<style scoped>

</style>