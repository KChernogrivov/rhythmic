<!-- @format -->

<template>
  <main class="main">
    <homeNavigation></homeNavigation>
    <FollowArtist></FollowArtist>
    <TracksRecommends></TracksRecommends>
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
import FollowArtist from "@/components/followArtist.vue";
import homeNavigation from "@/components/homeNavigation.vue";
import TracksRecommends from "@/components/tracksRecommends.vue";

export default {
  name: "MyMusicView",
  components: {
    homeNavigation,
    FollowArtist,
    TracksRecommends,
  },
};
</script>
