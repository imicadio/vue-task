<template>
  <router-link
    :to="{ name: 'HomePage', hash: sectionId }"
    class="homepage-navigation"
    :style="cssVar"
  >
    <div class="homepage-navigation__color"></div>
    <span>{{ dataUrl.company }}</span>
  </router-link>
</template>

<script>
export default {
  props: ["dataUrl", "sectionId"],
  computed: {
    cssVar() {
      return {
        "--bg-square": this.dataUrl.color,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./TheNavigationHome.scss";
</style>
