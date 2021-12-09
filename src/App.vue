<template>
  <the-header />
  <div class="app-content">
    <router-view />
  </div>
  <the-footer />
</template>

<script>
import TheHeader from "./components/TheHeader/TheHeader.vue";
import TheFooter from "./components/TheFooter/TheFooter.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style lang="scss">
  @import "./App.scss";
  @import "./style/main.scss";
</style>
