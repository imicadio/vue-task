<template>
  <button type="button" class="button" :class="customClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ["customClass"],
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./BaseButton.scss";
</style>
