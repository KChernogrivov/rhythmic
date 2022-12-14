<template>
  <div class="section section__tracks">
    <h2 class="section__title">Tracks</h2>
    <div class="trackList">
      <div class="trackList__track"></div>
      <div class="trackList__track"></div>
      <div class="trackList__track"></div>
      <div class="trackList__track"></div>
      <div class="trackList__track"></div>
      <div class="trackList__track"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "trackRecommends",
};
</script>

<style scoped>
.trackList {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
  justify-content: space-between;
  gap: 30px;
}

.trackList__track {
  height: 66px;
  border: 1px solid #b3b3b3;
  border-radius: 10px;
  background-color: #212121;
}

.section {
  margin-top: 2rem;
}

.section__title {
  font-size: 2rem;
  color: #b3b3b3;
  margin-bottom: 15px;
}

@media screen and (max-width: 1000px) {
  .trackList {
    grid-template-columns: repeat(auto-fill, 100%);
  }
}
</style>
