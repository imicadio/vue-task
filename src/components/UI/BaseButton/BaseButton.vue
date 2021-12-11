<template>
  <button v-if="!icon" type="button" class="button" :class="customClass">
    {{ text }}
  </button>
  <button v-else type="button" class="button" :class="customClass">
    {{ text }}<base-icon :icon="icon" :customClassIcon="customClassIcon" />
  </button>
</template>

<script>
import BaseIcon from "../BaseIcon/BaseIcon.vue";
export default {
  components: { BaseIcon },
  props: ["text", "customClass", "icon", "customClassIcon"],
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./BaseButton.scss";
</style>
