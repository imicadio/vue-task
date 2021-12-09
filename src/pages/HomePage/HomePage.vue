<template>
    <router-link :to="{ name: 'HomePage', hash: '#section2' }">Test 3</router-link>
    <router-link to="/#section2">Test 3</router-link>
  <navigation>
    <ul>
      <li></li>
      <li><a href="#section2">Second</a></li>
      <li><a href="#section3">Three</a></li>
      <li><a href="#section4">Four</a></li>
    </ul>
  </navigation>
  <router-view />
  <ul v-if="hasProducts">
    <li v-for="product in filteredProducts" :key="product.id">NAZWA PRODUKTU {{ product.name }}</li>
  </ul>
  <h2 v-else>BRAK PRODUKTÓW</h2>
  <ul>
    <li v-for="(box, index) in boxes" :id="'section' + index" :class="'section'" :key="index">{{ box.name }}</li>
  </ul>
  <!-- <div id="section1" class="section-1">
    <h2>Sekcja 1</h2>
  </div>
  <div id="section2" class="section-2">
    <h2>Sekcja 2</h2>
  </div>
  <div id="section3" class="section-3">
    <h2>Sekcja 3</h2>
    <ul>
      <list-product v-for="team in teams" :key="team.id" :team="team" />
    </ul>
  </div>
  <div id="section4" class="section-4">
    <h2>Sekcja 4</h2>
  </div> -->
</template>

<script>
// import ListProduct from "../../components/ListProduct/ListProduct.vue";

export default {
  //   components: { ListProduct },
  computed: {
    filteredProducts() {
      const products = this.$store.getters['products/products'];
      console.log(products);
      return products;
    },
    hasProducts() {
      return this.$store.getters['products/hasProducts'];
    }
  },
  data() {
    return {
      boxes: [
        { id: 0, name: "section-0" },
        { id: 1, name: "section-1" },
        { id: 2, name: "section-2" },
        { id: 3, name: "section-3" },
      ],
      teams: [
        { id: "t1", name: "Frontend Engineers", members: ["u1", "u2"] },
        { id: "t2", name: "Backend Engineers", members: ["u1", "u2", "u3"] },
        { id: "t3", name: "Client Consulting", members: ["u4", "u5"] },
      ],
      users: [
        { id: "u1", fullName: "Max Schwarz", role: "Engineer" },
        { id: "u2", fullName: "Praveen Kumar", role: "Engineer" },
        { id: "u3", fullName: "Julie Jones", role: "Engineer" },
        { id: "u4", fullName: "Alex Blackfield", role: "Consultant" },
        { id: "u5", fullName: "Marie Smith", role: "Consultant" },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "./HompePage.scss";
</style>
