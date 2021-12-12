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
    <div class="carousel-wrapper">
      <list-home-page-slider :data="product.slider" :sectionId="product._id" />
    </div>
    <!-- <router-link :to="{ name: 'ProductDetail', params: {productId: 123 }}">Push Page</router-link> -->
  </li>
</template>

<script>
import ListHomePageSlider from '../ListHomePageSlider/ListHomePageSlider.vue';

export default {
  props: ["product"],
  components: {
      ListHomePageSlider
  },
  data() {
    return {
      slickOptions: {
        arows: false,
        slidesToShow: 3,
      },
    };
  },
  computed: {
    isEmptySlider() {
      return this.product.slider && this.product.slider.length > 0;
    },
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
</style>
