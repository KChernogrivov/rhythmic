<template>
  <div class="home">
    <HelloWorld msg="" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/home.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>
