<!-- @format -->

<template>
  <main class="main">
    <div class="section">
      <ul class="section__list">
        <li class="section__element"><a href="#"></a> Overview</li>
        <li class="section__element"><a href="#"></a> My music</li>
        <li class="section__element"><a href="#"></a> Top charts</li>
        <li class="section__element"><a href="#"></a> Newest</li>
        <li class="section__element"><a href="#"></a> Artists</li>
      </ul>
    </div>
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

.section__list {
  font-size: 1.8rem;
  margin-top: 5vh;
  display: flex;
  list-style: none;
  width: 100%;
  border-bottom: 1px solid #535353;
}

.section__element {
  color: #535353;
  position: relative;
  top: 1px;
  display: flex;
  padding: 0 3rem 0 3rem;
  text-decoration: none;
  border-bottom: 1px solid #535353;
  transition: 0.5s;
}

.section__element:hover {
  border-color: #1db954;
  color: #b3b3b3;
}

@media screen and (max-width: 1140px) {
  * {
    font-size: 12px;
  }
}
</style>

<script>
// @ is an alias to /src
import tracksRecommends from "@/components/tracksRecommends.vue";
import artistRecommends from "@/components/artistRecommends.vue";

export default {
  name: "HomeView",
  components: {
    tracksRecommends,
    artistRecommends,
  },
};
</script>
