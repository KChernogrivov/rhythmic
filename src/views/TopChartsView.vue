<!-- @format -->

<template>
  <main class="main">
    <homeNavigation></homeNavigation>
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

export default {
  name: "topChartsView",
  components: {
    homeNavigation,
  },
};
</script>
