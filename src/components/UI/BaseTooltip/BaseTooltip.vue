<template>
  <a href="#" :data-tooltip="txt"
    ><base-icon :icon="icon" :customClassIcon="customClassTooltip"
  /></a>
</template>

<script>
import BaseIcon from "../BaseIcon/BaseIcon.vue";

export default {
  components: { BaseIcon },
  props: ["txt", "icon", "customClassTooltip"],
};
</script>

<style lang="scss">
@import './BaseTooltip.scss';
</style>
