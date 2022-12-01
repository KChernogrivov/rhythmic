<!-- @format -->

<template>
  <h1>{{ msg }}</h1>
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
  </main>
  <footer></footer>
</template>

<script>
export default {
  name: "/homePage",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Righteous";
}

.header {
  width: 100%;
}

body {
  background: #1e1e1e;
}

.header__wrapper {
  width: 80%;
  padding: 1rem 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__list {
  display: flex;
  list-style: none;
  gap: 30px;
}

.nav__link {
  text-decoration: none;
  color: #b3b3b3;
  font-weight: 400;
  font-size: 1rem;
  line-height: 30px;
  color: #b3b3b3;
}

.header__logo {
  font-family: "Righteous";
  font-style: normal;
  font-weight: 400;
  font-size: 2rem;
  line-height: 60px;
  color: #1db954;
  text-transform: uppercase;
}

.header__account {
  font-family: "Righteous";
  font-style: normal;
  font-size: 1rem;
  line-height: 30px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  color: #d9d9d9;
  border: 1px solid #b3b3b3;
  border-radius: 10px;
}

.header__account > a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem 2rem;
  text-decoration: none;
  color: #d9d9d9;
  font-family: "Righteous";
  font-size: 1rem;
  line-height: 29.8px;
}

.header__searchField {
  font-size: 1.2rem;
  background-color: inherit;
  color: #b3b3b3;
  border: 0;
  border-bottom: 1px solid #535353;
  outline: 0 !important;
}

.form__submit {
  background-color: inherit;
  outline: 0 !important;
  border: 0;
  cursor: pointer;
}

/* main start */

.main {
  width: 80%;
  margin: 0 auto;
}

.section {
  margin-top: 2rem;
}

.section__title {
  font-size: 2rem;
  color: #b3b3b3;
  margin-bottom: 15px;
}

.form__header {
  display: flex;
  align-items: center;
  justify-content: center;
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

@media screen and (max-width: 1140px) {
  * {
    font-size: 12px;
  }
}

@media screen and (max-width: 1000px) {
  .trackList {
    grid-template-columns: repeat(auto-fill, 100%);
  }
}

@media screen and (max-width: 770px) {
  .header__nav,
  .header__search {
    display: none;
  }
}
</style>
