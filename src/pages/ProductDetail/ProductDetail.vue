<template>
  <div class="product-detail">
    <div class="product-detail__image">
      <img :src="displayData.image" :alt="displayData.altText" />
    </div>
    <div class="product-detail__form">
      <h2>{{ displayData.name }}</h2>

      <form class="product-detail__form">
        <div class="form__buttons-up">
          <base-button
            v-for="btn in buttonsUp"
            :key="btn"
            :customClass="'btn'"
            :text="btn"
          />
        </div>
        <div class="form__icons">
          <base-tooltip
            v-for="tooltip in tooltipData"
            :key="tooltip.icon"
            :txt="tooltip.text"
            :icon="tooltip.icon"
            :customClassTooltip="tooltip.customClass"
          />
        </div>
        <div class="form__header">
          <h3 class="header__price">
            € {{ displayData.price }}
            <span class="header__price__span">Stuckpreis</span>
          </h3>
          <h4 class="header__person">
            zzgl. Mwst. zzgl. <span class="header__person__span">zzgl.</span>
          </h4>
        </div>
        <div class="form__content">
          <div
            class="content__select"
            v-for="data in selectData"
            :key="data.id"
          >
            <base-select
              :data="data"
              :customClassLabel="'select__label'"
              :customClassSelect="'select__select'"
            />
          </div>
          <base-button
            :customClass="'form__button'"
            :text="'Send form'"
            :icon="'cart-outline'"
            :customClassIcon="'btn__icon'"
          />
        </div>
        <div class="form__footer">
          <div class="footer__phone" v-for="data in formFooter" :key="data.icon">
            <base-icon :icon="data.icon" />
            <h5>{{ data.value }}</h5>
          </div>          
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import BaseButton from "../../components/UI/BaseButton/BaseButton.vue";
import BaseIcon from '../../components/UI/BaseIcon/BaseIcon.vue';
import BaseSelect from "../../components/UI/BaseSelect/BaseSelect.vue";
import BaseTooltip from "../../components/UI/BaseTooltip/BaseTooltip.vue";

export default {
  components: { BaseButton, BaseTooltip, BaseSelect, BaseIcon },  
  data() {
    return {
      displayData: null,
      buttonsUp: ["One", "Second", "Big Three", "Bi Big Four Button"],
      tooltipData: [
        { text: "qwert poiu", icon: "flame-outline", customClass: "icon" },
        { text: "qwert poiu", icon: "key-outline", customClass: "icon" },
        { text: "qwert poiu", icon: "lock-open-outline", customClass: "icon" },
        { text: "qwert poiu", icon: "copy-outline", customClass: "icon" },
        { text: "qwert poiu", icon: "color-wand-outline", customClass: "icon" },
        { text: "qwert poiu", icon: "rainy-outline", customClass: "icon" },
        { text: "qwert poiu", icon: "bag-handle-outline", customClass: "icon" },
        { text: "qwert poiu", icon: "construct-outline", customClass: "icon" },
        {
          text: "qwert poiu",
          icon: "ellipsis-vertical-outline",
          customClass: "icon",
        },
      ],
      formFooter: [
        { icon: "call-outline", value: "+43-6274-21909" },
        { icon: "star-outline", value: "Bewerten" },
        { icon: "heart-outline", value: "Auf Merklista" },
      ],
      selectData: [
        {
          id: "first",
          options: [
            { value: "123" },
            { value: "190" },
            { value: "112" },
            { value: "254" },
            { value: "456" },
            { value: "600" },
          ],
        },
        {
          id: "second",
          options: [
            { value: "123x123mm" },
            { value: "190x123mm" },
            { value: "112x908mm" },
            { value: "254x786mm" },
            { value: "456x625mm" },
            { value: "600x781mm" },
          ],
        },
        {
          id: "three",
          options: [
            { value: "1" },
            { value: "2" },
            { value: "3" },
            { value: "4" },
            { value: "5" },
            { value: "6" },
          ],
        },
      ],
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
