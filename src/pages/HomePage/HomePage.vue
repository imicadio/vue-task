<template>
  <navigation class="homepage__navigation">
    <h2>Home Navigation</h2>
    <ul class="navigation__ul">
      <the-navigation-home v-for="(product, index)  in filteredProducts" :key="product._id+index" :dataUrl="product" :sectionId="'#section' + index" />        
    </ul>
  </navigation>
  <ul class="homepage__components">
    <list-home-page v-for="(product, index)  in filteredProducts" :id="'section' + index" :key="product._id" :product="product" />
  </ul>
</template>

<script>
import ListHomePage from "../../components/ListHomePage/ListHomePage.vue";
import TheNavigationHome from '../../components/TheNavigationHome/TheNavigationHome.vue';

export default {
  components: { ListHomePage, TheNavigationHome },
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
