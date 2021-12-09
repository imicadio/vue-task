import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage/HomePage.vue";
import NotFound from "../pages/NotFound/NotFound.vue";
import ProductDetail from "../pages/ProductDetail/ProductDetail.vue";

const routes = [
  {
    name: "HomePage",
    path: "/product", // http://localhost:8080/
    alias: '/',
    component: HomePage
  },
  {
    name: "ProductDetail",
    path: "/product/:productId",
    component: ProductDetail,
  },
  { path: "/:notFound(.*)", component: NotFound },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      const options = {
        top: document.querySelector(to.hash).offsetTop,
        behavior: "smooth",
      };

      window.scrollTo(options);
    } else {
      return { x: 0, y: 0 };
    }
  },
});

export default router;
