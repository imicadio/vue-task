<template>
  <a href="#" :data-tooltip="txt"><slot></slot></a>
</template>

<script>
export default {
  props: ["txt"],
};
</script>

<style lang="scss">
@import "./BaseTooltip.scss";
</style>
