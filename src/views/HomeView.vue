<!-- @format -->

<template>
  <main class="main">
    <homeNavigation></homeNavigation>
    <artistRecommends></artistRecommends>
    <tracksRecommends></tracksRecommends>
  </main>
  <footer></footer>
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
import artistRecommends from "@/components/artistRecommends.vue";
import tracksRecommends from "@/components/tracksRecommends.vue";

export default {
  name: "HomeView",
  components: {
    homeNavigation,
    artistRecommends,
    tracksRecommends,
  },
};
</script>
