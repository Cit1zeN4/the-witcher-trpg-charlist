import Vue from "vue";
import VueRouter from "vue-router";
import NameView from "@/views/NameView.vue";
import RaceView from "@/views/RaceView.vue";
import LifeView from "@/views/LifeView.vue";
import ProfessionView from "@/views/ProfessionView.vue";
import StatsView from "@/views/StatsView.vue";
import SkillsView from "@/views/SkillsView.vue";
import CapitalView from "@/views/CapitalView.vue";
import ShopView from "@/views/ShopView.vue";
import ResultView from "@/views/ResultView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "name",
    component: NameView,
  },
  {
    path: "/race",
    name: "race",
    component: RaceView,
  },
  {
    path: "/life",
    name: "life",
    component: LifeView,
  },
  {
    path: "/profession",
    name: "profession",
    component: ProfessionView,
  },
  {
    path: "/stats",
    name: "stats",
    component: StatsView,
  },
  {
    path: "/skills",
    name: "skills",
    component: SkillsView,
  },
  {
    path: "/capital",
    name: "capital",
    component: CapitalView,
  },
  {
    path: "/shop",
    name: "shop",
    component: ShopView,
  },
  {
    path: "/result",
    name: "result",
    component: ResultView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
