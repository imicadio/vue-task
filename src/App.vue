<template>
  <the-header />
  <base-container :customClass="'app-content'">
    <router-view />
  </base-container>
  <the-footer />
</template>

<script>
import TheHeader from "./components/TheHeader/TheHeader.vue";
import TheFooter from "./components/TheFooter/TheFooter.vue";
import BaseContainer from "./components/UI/BaseCoontainer/BaseContainer.vue";

export default {
  components: {
    TheHeader,
    TheFooter,
    BaseContainer,
  },
};
</script>

<style lang="scss">
@import "./App.scss";
@import "./style/main.scss";
</style>
