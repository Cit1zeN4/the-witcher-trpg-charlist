import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    charlist: {
      common: {
        playerName: null,
        name: null,
        race: "Человек",
        sex: "Мужчина",
        age: null,
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
    other: {
      sexOptions: ["Мужчина", "Женщина"],
      raceOptions: ["Человек", "Эльфе", "Краснолюд", "Ведьмак"],
    },
  },
  getters: {},
  mutations: {
    saveNameViewData(state, data) {
      console.log(data);
      state.charlist.common.playerName = data.playerName;
      state.charlist.common.name = data.name;
      state.charlist.common.age = data.age;
      state.charlist.common.sex = data.sex;
    },
  },
  actions: {},
  modules: {},
});
