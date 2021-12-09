import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          _id: "61b1d9266e8446d03a2df54c",
          company: "EXOBLUE",
          tags: "jordan",
          color: "#344CB7",
          image: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
          imgText: 'Lorem'
        },
        {
          _id: "61b1d926c7c1018c3055b536",
          company: "MACRONAUT",
          tags: "jordan",
          color: "#62A8AC",
          image: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
          imgText: 'Lorem'
        },
        {
          _id: "61b1d9260d3f996109eb654a",
          company: "MANTRIX",
          tags: "jordan",
          color: "#344CB7",
          image: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
          imgText: 'Lorem'
        },
        {
          _id: "61b1d92663fe5bd6dac24d19",
          company: "MEGALL",
          tags: "vapormax",
          color: "#FF00E4",
          image: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/y7v6sqkahxxflefbf5vx/nike-air-vapormax-pale-grey.jpg",
          imgText: 'Lorem'
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
