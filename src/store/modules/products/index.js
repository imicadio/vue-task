import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      products: [
        {
          id: "c1",
          firstName: 'Max',
          lastName: 'Johnnson',
          areas: ['front', 'back', 'fullstack']
        },
        {
          id: "c2",
          firstName: 'Mariola',
          lastName: 'Tupolewa',
          areas: ['front']
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
