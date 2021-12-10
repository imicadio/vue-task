<template>
  <navigation class="homepage__navigation">
  </navigation>
  <ul class="homepage__components">
    <list-home-page v-for="(product, index)  in filteredProducts" :id="'section' + index" :key="product._id" :product="product" />
  </ul>
  <!-- <router-link :to="{ name: 'HomePage', hash: '#section2' }">Test 3</router-link>
    <router-link to="/#section2">Test 3</router-link> -->
  <!-- <ul>
    <li v-for="(box, index) in boxes" :id="'section' + index" :class="'section'" :key="index">{{ box.name }}</li>
  </ul> -->
</template>

<script>
import ListHomePage from "../../components/ListHomePage/ListHomePage.vue";

export default {
  components: { ListHomePage },
  computed: {
    filteredProducts() {
      const products = this.$store.getters["products/products"];
      console.log(products);
      return products;
    },
    hasProducts() {
      return this.$store.getters["products/hasProducts"];
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./HompePage.scss";
</style>
