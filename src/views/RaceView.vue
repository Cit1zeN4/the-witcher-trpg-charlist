<template>
  <div>
    <b-card title="Раса" class="mt-5 shadow">
      <b-form>
        <b-form-group label="Раса персонажа" label-for="race"
          ><b-form-select
            id="race"
            v-model="race"
            :options="raceOptions"
            plain
          ></b-form-select>
        </b-form-group>
      </b-form>
      <div class="mt-4">
        <h4>Черты расы</h4>
        <div class="row">
          <div
            class="col-sm-12 col-md-6 col-lg my-1"
            :key="index"
            v-for="(feature, index) in features"
          >
            <b-card class="h-100" :title="feature.name">
              <p>{{ feature.description }}</p></b-card
            >
          </div>
        </div>
      </div>
    </b-card>
    <pagination-component
      class="mt-4"
      prev="/"
      next="/life"
      @goPrev="save"
      @goNext="save"
    ></pagination-component>
  </div>
</template>

<script>
import PaginationComponent from "@/components/PaginationComponent.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    PaginationComponent,
  },
  data() {
    return {
      race: null,
      raceOptions: null,
    };
  },
  computed: {
    features() {
      if (this.race === "Человек") return this.getHumanFeatures();
      if (this.race === "Эльф") return this.getElfFeatures();
      if (this.race === "Краснолюд") return this.getDwarfFeatures();
      if (this.race === "Ведьмак") return this.getWitcherFeatures();

      return [];
    },
  },
  methods: {
    getHumanFeatures() {
      return this.$store.state.other.humanFeatures;
    },
    getElfFeatures() {
      return this.$store.state.other.elfFeatures;
    },
    getDwarfFeatures() {
      return this.$store.state.other.dwarfFeatures;
    },
    getWitcherFeatures() {
      return this.$store.state.other.witcherFeatures;
    },
    save() {
      var data = {
        race: this.race,
        features: this.features,
      };
      this.saveState(data);
    },
    ...mapMutations({ saveState: "saveRaceViewData" }),
  },
  beforeRouteLeave(to, from, next) {
    this.save();
    next();
  },
  mounted() {
    var common = this.$store.state.charlist.common;
    var other = this.$store.state.other;
    this.race = common.race;
    this.raceOptions = other.raceOptions;
  },
};
</script>
