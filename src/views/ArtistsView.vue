<!-- @format -->

<template>
  <main class="main">
    <homeNavigation></homeNavigation>
    <artists></artists>
  </main>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  width: 80%;
  margin: 0 auto;
}
</style>

<script>
// @ is an alias to /src
import homeNavigation from "@/components/homeNavigation.vue";
import artists from "@/components/artists.vue";

export default {
  name: "artistsView",
  components: {
    homeNavigation,
    artists,
  },
};
</script>
