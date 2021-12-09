<template>
  <li class="list-homepage" :style="cssVars">
    <div class="list-homepage__img-wrapper">
      <img
        :src="product.image"
        :alt="product.imgText"
        class="img-wrapper__image"
      />
      <h2 class="img-wrapper__title">{{ product.company }}</h2>
    </div>
    <div class="swiper"></div>
    <!-- <router-link :to="{ name: 'ProductDetail', params: {productId: 123 }}">Push Page</router-link> -->
  </li>
</template>

<script>
export default {
  props: ["product"],
  computed: {
    cssVars() {
      return {
        "--color": this.product.color,
      };
    },
  },
};
</script>

<style lang="scss">
@import "./ListHomePage.scss";
// .img-wrapper__image {
//     &::after {
//         content: '';
//         width: 100%;
//         height: 100%;
//         position: absolute;
//         background-color: var(--color);
//     }
// }
</style>
