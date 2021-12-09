<template>
  <Carousel
    :settings="settings"
    :breakpoints="breakpoints"
    :wrap-around="true"
    class="carousel"
  >
    <Slide v-for="slide in data" :key="slide._id">
      <router-link to="/product/1">
        <img :src="slide.image" :alt="slide.imgText" class="carousel__image" />
        <div class="carousel__text">
          <h3>{{ slide.name }}</h3>
        </div>
      </router-link>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { Carousel, Navigation, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default {
  props: ["data"],
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: "center",
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      768: {
        itemsToShow: 2,
        snapAlign: "start",
      },
      // 1024 and up
      1000: {
        itemsToShow: 2,
        snapAlign: "start",
      },
      1320: {
        itemsToShow: 3,
        snapAlign: "start",
      },
    },
  }),
};
</script>

<style lang="scss">
@import "./ListHomePageSlider.scss";
</style>
