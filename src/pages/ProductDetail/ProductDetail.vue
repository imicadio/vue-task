<template>
  <div class="product-detail">
    <div class="product-detail__image">
      <img :src="displayData.image" :alt="displayData.altText" />
    </div>
    <div class="product-detail__form">
      <h2>{{ displayData.name }}</h2>

      <form class="product-detail__form">
        <div class="form__buttons-up">
          <button type="button" class="btn">One</button>
          <button type="button" class="btn">Second</button>
          <button type="button" class="btn">Big Three</button>
          <button type="button" class="btn">Bi Big Four Button</button>
        </div>
        <div class="form__icons">
          <a href="#" :data-tooltip="displayData.price"><ion-icon name="flame-outline" class="icon"></ion-icon></a>
          <a href="#" :data-tooltip="displayData.price"><ion-icon name="key-outline" class="icon"></ion-icon></a>
          <a href="#" :data-tooltip="displayData.price"><ion-icon name="lock-open-outline" class="icon"></ion-icon></a>
          <a href="#" :data-tooltip="displayData.price"><ion-icon name="copy-outline" class="icon"></ion-icon></a>
          <a href="#" :data-tooltip="displayData.price"><ion-icon name="color-wand-outline" class="icon"></ion-icon></a>
          <a href="#" :data-tooltip="displayData.price"><ion-icon name="rainy-outline" class="icon"></ion-icon></a>
          <a href="#" :data-tooltip="displayData.price"><ion-icon name="bag-handle-outline" class="icon"></ion-icon></a>
          <a href="#" :data-tooltip="displayData.price"><ion-icon name="construct-outline" class="icon"></ion-icon></a>
          <a href="#" :data-tooltip="displayData.price"><ion-icon name="ellipsis-vertical-outline" class="icon"></ion-icon></a>
        </div>
        <div class="form__header">
          <h3 class="header__price">
            € {{ displayData.price }}
            <span class="header__price__span">Stuckpreis</span>
          </h3>
          <h4 class="header__person">
            zzgl. Mwst. zzgl. <span class="header__person__span">TESTE</span>
          </h4>
        </div>
        <div class="form__content">
          <div class="content__select">
            <label for="pet-select" class="select__label">Stuck:</label>
            <select name="pets" id="pet-select" class="select__select">
              <option value="">iks</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
            </select>
          </div>
          <div class="content__select">
            <label for="pet-select" class="select__label">Groba:</label>
            <select name="pets" id="pet-select" class="select__select">
              <option value="">iks</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
            </select>
          </div>
          <div class="content__select">
            <label for="pet-select" class="select__label">Verpackungseinheit 10stk.</label>
            <select name="pets" id="pet-select" class="select__select">
              <option value="">iks</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="hamster">Hamster</option>
              <option value="parrot">Parrot</option>
              <option value="spider">Spider</option>
              <option value="goldfish">Goldfish</option>
            </select>
          </div>
          <button type="button" class="form__button">Send form <ion-icon class="btn__icon" name="cart-outline"></ion-icon></button>
        </div>
        <div class="form__footer">
          <div class="footer__phone">
            <ion-icon name="call-outline"></ion-icon><h5>+43-6274-21909</h5>
          </div>
          <div class="footer__phone">
            <ion-icon name="star-outline"></ion-icon><h5>Bewerten</h5>
          </div>
          <div class="footer__phone">
            <ion-icon name="heart-outline"></ion-icon><h5>Auf Merklista</h5>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    console: () => {
      console.log("TEST");
    },
  },
  data() {
    return {
      displayData: null,
    };
  },
  methods: {
    loadProduct(products, productsId, productId) {
      if (!products && !productsId && !productId) return;
      this.displayData = products
        .find((item) => item._id === productsId)
        .slider.find((item) => item._id === productId);
    },
  },
  created() {
    const products = this.$store.getters["products/products"];
    const productsId = this.$route.query.sectionId;
    const productId = this.$route.params.productId;
    this.loadProduct(products, productsId, productId);
  },
};
</script>

<style lang="scss">
@import "./ProductDetail.scss";
</style>
