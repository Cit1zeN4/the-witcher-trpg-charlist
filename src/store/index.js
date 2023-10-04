import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    charlist: {
      common: {
        playerName: "Игрок",
        name: "Персонаж",
        race: "человек",
        sex: "мужчина",
        age: 20,
      },
      socialStatus: {
        north: "equal",
        nilfgaard: "equal",
        skellige: "equal",
        dolBlatanna: "equal",
        mahakam: "equal",
      },
      features: [],
      stats: {
        intelligence: {
          value: 0,
        },
        reaction: {
          value: 0,
        },
        agility: {
          value: 0,
        },
        physique: {
          value: 0,
        },
        speed: {
          value: 0,
        },
        empathy: {
          value: 0,
        },
        craft: {
          value: 0,
        },
        will: {
          value: 0,
        },
        luck: {
          value: 0,
        },
      },
    },
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
