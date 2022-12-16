<template>
  <div class="section section__tracks">
    <h2 class="section__title">Newest tracks</h2>
    <div class="trackList">
      <div class="track trackList__track">
        <div class="track__cover"></div>
        <div class="track__about">
          <div class="track__title">Title</div>
          <div class="track__owner">artist</div>
        </div>
        <div class="track__time">2:31</div>
      </div>
      <div class="trackList__track"></div>
      <div class="trackList__track"></div>
      <div class="trackList__track"></div>
      <div class="trackList__track"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "newTracks",
};
</script>

<style scoped>
.trackList {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}

.trackList__track {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  height: 66px;
  margin-top: 20px;
  width: 100%;
  border-radius: 10px;
  background-color: #282828;
  transition: 0.2s;
  cursor: pointer;
}

.trackList__track:nth-child(1) {
  margin-top: 0;
}

.trackList__track:hover {
  outline: 2px solid #1db954;
}

.track__about {
  position: absolute;
  left: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.track__title {
  color: #b3b3b3;
  font-size: 1.5rem;
  line-height: 1.3rem;
}

.track__cover {
  height: 66px;
  width: 66px;
  border-radius: 10px 0 0 10px;
  position: absolute;
  background-color: #b3b3b3;
}

.track__owner {
  color: #535353;
  line-height: 1rem;
}

.track__time {
  position: absolute;
  right: 33px;
  color: #b3b3b3;
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
