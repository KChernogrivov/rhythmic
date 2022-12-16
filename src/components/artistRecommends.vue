<template>
  <div class="section">
    <h2 class="section__title">Artists</h2>
    <div class="slider-container">
      <div class="arrow-left">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 49.656 49.656"
          style="enable-background: new 0 0 49.656 49.656"
          xml:space="preserve"
        >
          <g>
            <polygon
              style="fill: #b3b3b3"
              points="14.535,48.242 11.707,45.414 32.292,24.828 11.707,4.242 14.535,1.414 37.949,24.828 	"
            />
            <path
              style="fill: #b3b3b3"
              d="M14.535,49.656l-4.242-4.242l20.585-20.586L10.293,4.242L14.535,0l24.829,24.828L14.535,49.656z
		 M13.121,45.414l1.414,1.414l22-22l-22-22l-1.414,1.414l20.585,20.586L13.121,45.414z"
            />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </div>
      <div class="arrow-right">
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 49.656 49.656"
          style="enable-background: new 0 0 49.656 49.656"
          xml:space="preserve"
        >
          <g>
            <polygon
              style="fill: #b3b3b3"
              points="14.535,48.242 11.707,45.414 32.292,24.828 11.707,4.242 14.535,1.414 37.949,24.828 	"
            />
            <path
              style="fill: #b3b3b3"
              d="M14.535,49.656l-4.242-4.242l20.585-20.586L10.293,4.242L14.535,0l24.829,24.828L14.535,49.656z
		 M13.121,45.414l1.414,1.414l22-22l-22-22l-1.414,1.414l20.585,20.586L13.121,45.414z"
            />
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </div>
      <div class="slider-track">
        <div class="slider-item">
          <div class="card section__card"></div>
          <div class="card__title">NameNameNameNameNameNameNameName</div>
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

.section__card:hover {
  border: 2px solid #1db954;
}

.card__title {
  color: #b3b3b3;
  font-size: 1.5rem;
  width: 14rem;
  height: 2rem;
  overflow-wrap: break-word;
}
.slider-container {
  width: 100%;
  position: relative;
  overflow: hidden;
}
.slider-track {
  display: flex;
  gap: 45px;
  transition-duration: 0.5s;
}
.arrow {
  width: 7px;
  height: 7px;
  border-top: #cacaca 3px solid;
  border-right: #cacaca 3px solid;
  position: absolute;
}

.arrow-left,
.arrow-right {
  width: 50px;
  height: 50px;
  position: absolute;
  top: 50%;
  z-index: 2;
}
.arrow-left {
  left: 10px;
  transform: translateY(-50%) rotate(180deg);
}
.arrow-right {
  right: 10px;
  transform: translateY(-50%);
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
