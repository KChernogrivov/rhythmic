<!-- @format -->

<template>
  <main class="main">
    <homeNavigation></homeNavigation>
    <newTracks></newTracks>
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
import newTracks from "@/components/newTracks.vue";

export default {
  name: "newestView",
  components: {
    homeNavigation,
    newTracks,
  },
};
</script>
