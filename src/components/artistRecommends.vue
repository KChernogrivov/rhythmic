<template>
  <div class="section">
    <h2 class="section__title">Artists</h2>
    <div class="slider-container">
      <div class="arrow-left">
        <div class="arrow-bg">
          <div class="arrow"></div>
        </div>
      </div>
      <div class="arrow-right">
        <div class="arrow-bg">
          <div class="arrow"></div>
        </div>
      </div>
      <div class="slider-track">
        <div class="slider-item">
          <div class="card section__card"></div>
          <div class="card__title">
            НазваниеНазваниеНазваниеНазвание какого то автора автора автора
            автора автора
          </div>
        </div>
        <div class="slider-item">
          <div class="section__card"></div>
        </div>
        <div class="slider-item">
          <div class="section__card"></div>
        </div>
        <div class="slider-item">
          <div class="section__card"></div>
        </div>
        <div class="slider-item">
          <div class="section__card"></div>
        </div>
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
.section__cards {
  display: block;
  width: 100%;
}
.section__card {
  display: inline-block;
  position: relative;
  border-radius: 10px;
  background-color: #fff;
  height: 15rem;
  width: 14rem;
}
.card__title {
  color: #b3b3b3;
  font-size: 1rem;
  width: 14rem;
  height: 1.2rem;
  overflow-wrap: break-word;
}
.slider-item {
  margin-right: 5vw;
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
