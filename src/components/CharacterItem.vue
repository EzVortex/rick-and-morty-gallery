<template>
  <div class="flex flex-col h-full bg-gray-800 rounded-md overflow-hidden p-2">
    <img :src="character.image" class="w-full mb-1.5" alt="Character Image">
    <div class="text-white text-lg text-center font-semibold mb-2">{{ character.name }}</div>
    <div class="flex flex-col">
      <div class="text-white">Локация: <span class="font-semibold">{{ character.location.name }}</span></div>
      <div class="text-white">Статус: <span class="font-semibold" :class="character.status === 'Alive' ? 'text-green-400' : character.status === 'Dead' ? 'text-red-400' : 'text-orange-400'">{{ character.status }}</span></div>
    </div>
    <div class="w-full mt-auto text-end text-white">Создан: <span class="font-semibold">{{ new Date(character.created).toLocaleDateString() }}</span></div>
  </div>
</template>

<script>
export default {
  name: "CharacterItem",
  props: {
    character: Object
  }
}
</script>

<style scoped>

</style>