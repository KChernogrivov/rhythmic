<template>
  <div class="section section__tracks">
    <h2 class="section__title">Tracks</h2>
    <div class="trackList">
      <div class="trackList__column">
        <div class="trackList__track"></div>
        <div class="trackList__track"></div>
        <div class="trackList__track"></div>
        <div class="trackList__track"></div>
        <div class="trackList__track"></div>
      </div>
      <div class="trackList__column">
        <div class="trackList__track"></div>
        <div class="trackList__track"></div>
        <div class="trackList__track"></div>
        <div class="trackList__track"></div>
        <div class="trackList__track"></div>
      </div>
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
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}

.trackList__column {
  display: flex;
  flex-direction: column;
  width: 48%;
}

.trackList__track {
  height: 66px;
  margin-top: 20px;
  width: 100%;
  border-radius: 10px;
  background-color: #282828;
  transition: 0.2s;
}

.trackList__track:nth-child(1) {
  margin-top: 0;
}

.trackList__track:hover {
  outline: 2px solid #1db954;
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
