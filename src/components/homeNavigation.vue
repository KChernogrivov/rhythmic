<template>
  <div class="section">
    <ul class="section__list">
      <li class="section__element">
        <router-link to="/">Overview</router-link>
      </li>
      <li class="section__element">
        <router-link to="mymusic">My Music</router-link>
      </li>
      <li class="section__element">
        <router-link to="topcharts">Top charts</router-link>
      </li>
      <li class="section__element">
        <router-link to="newest">Newest</router-link>
      </li>
      <li class="section__element">
        <router-link to="artists">Artists</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
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
export default {
  name: "homeNavigation",
};
</script>
