<template>
  <div class="section">
    <h2 class="section__title">Popular Artists</h2>
    <div class="cardList">
      <div class="card cardList_card">
        <div class="card__cover"></div>
        <div class="card__title">New artist</div>
      </div>
      <div class="card cardList_card">
        <div class="card__cover"></div>
        <div class="card__title">New artist</div>
      </div>
      <div class="card cardList_card">
        <div class="card__cover"></div>
        <div class="card__title">New artist</div>
      </div>
      <div class="card cardList_card">
        <div class="card__cover"></div>
        <div class="card__title">New artist</div>
      </div>
      <div class="card cardList_card">
        <div class="card__cover"></div>
        <div class="card__title">New artist</div>
      </div>
      <div class="card cardList_card">
        <div class="card__cover"></div>
        <div class="card__title">New artist</div>
      </div>
      <div class="card cardList_card">
        <div class="card__cover"></div>
        <div class="card__title">New artist</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "artistsList",
};
</script>

<style scoped>
.section__cards {
  display: block;
  width: 100%;
}
.card__cover {
  display: flex;
  position: relative;
  border-radius: 10px;
  background-color: #282828;
  height: 15rem;
  width: 14rem;
  color: #535353;
  font-size: 10rem;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
}

.cardList {
  display: flex;
  flex-wrap: wrap;
  gap: 45px;
}

.card__cover:hover {
  border: 2px solid #1db954;
}

.card__title {
  color: #b3b3b3;
  font-size: 1.5rem;
  width: 14rem;
  height: 2rem;
  overflow-wrap: break-word;
  overflow: hidden;
}
.slider-container {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.slider-track {
  display: flex;
  transition-duration: 0.5s;
}
.arrow {
  width: 7px;
  height: 7px;
  border-top: #cacaca 3px solid;
  border-right: #cacaca 3px solid;
  position: absolute;
}
.arrow-bg {
  width: 30px;
  height: 30px;
  background: #fff;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  position: relative;
  opacity: 0.8;
  cursor: pointer;
}
.arrow-left .arrow {
  transform: rotate(-135deg);
  top: 11px;
  left: 11px;
}
.arrow-right .arrow {
  transform: rotate(45deg);
  top: 11px;
  left: 10px;
}
.arrow-left {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  z-index: 2;
}
.arrow-right {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  z-index: 2;
}

.section {
  margin-top: 2rem;
}

.section__title {
  font-size: 2rem;
  color: #b3b3b3;
  margin-bottom: 15px;
}
</style>
