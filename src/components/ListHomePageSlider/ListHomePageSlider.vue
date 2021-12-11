<template>
  <Carousel
    :settings="settings"
    :breakpoints="breakpoints"
    :wrap-around="true"
    class="carousel"
  >
    <Slide v-for="slide in data" :key="slide._id">
      <router-link :to="{ name: 'ProductDetail', params: { productId: slide._id }, query: { sectionId: sectionId }}">
      <!-- <router-link :to="'/product/' + slide._id"> -->
        <img :src="slide.image" :alt="slide.imgText" class="carousel__image" />
        <div class="carousel__card">
          <h3 class="card__title">{{ slide.name }} <ion-icon class="card__arrow" name="chevron-forward-outline"></ion-icon></h3>
          <p class="card__description">{{ renderDescription(slide.description) }}</p>
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
  props: ["data", "sectionId"],
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

  methods: {
    renderDescription(text) {
      return text.substring(0, 100) + "...";
    },
  },
};
</script>

<style lang="scss">
@import "./ListHomePageSlider.scss";
</style>
