<template>
  <TopNavbar />
  <router-view />
</template>

<script>

import TopNavbar from "@/components/TopNavbar";
export default {
  name: 'App',
  components: {
    TopNavbar,
  }
}
</script>

<style>
body {
  @apply bg-gray-900;
}
</style>
