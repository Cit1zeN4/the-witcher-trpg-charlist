<template>
  <div>
    <b-card title="Раса" class="mt-5 p-3 shadow">
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
        <h4>Социальный статус</h4>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-3 my-2 p-2">
            <b-card title="Север">
              <p>{{ raceData.socialStatus?.north }}</p>
            </b-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3 my-2 p-2">
            <b-card title="Нильфгард">
              <p>{{ raceData.socialStatus?.nilfgaard }}</p>
            </b-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3 my-2 p-2">
            <b-card title="Скеллиге">
              <p>{{ raceData.socialStatus?.skellige }}</p>
            </b-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3 my-2 p-2">
            <b-card title="Дол Блатанна">
              <p>{{ raceData.socialStatus?.dolBlatanna }}</p>
            </b-card>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3 my-2 p-2">
            <b-card title="Махакам">
              <p>{{ raceData.socialStatus?.mahakam }}</p>
            </b-card>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <b-button v-b-toggle.info variant="primary"
            ><b-icon
              class="mr-2"
              icon="question-circle-fill"
              aria-label="Help"
            ></b-icon>
            Подробнее о социальных статусах
          </b-button>
        </div>
        <b-collapse id="info" class="mt-3">
          <b-card class="px-3">
            <div class="row">
              <div class="col-sm-12 col-md-6 col-lg-3 my-2 p-2">
                <h5>Равенство:</h5>
                <p>{{ equalitySocialStatusDescription }}</p>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-3 my-2 p-2">
                <h5>Терпимость:</h5>
                <p>{{ toleranceSocialStatusDescription }}</p>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-3 my-2 p-2">
                <h5>Опасение:</h5>
                <p>{{ fearSocialStatusDescription }}</p>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-3 my-2 p-2">
                <h5>Ненависть:</h5>
                <p>{{ hateSocialStatusDescription }}</p>
              </div>
            </div>
            <div class="mt-3">
              <p class="fst-italic">{{ sameRaceDescription }}</p>
              <p class="fst-italic">{{ friendshipDescription }}</p>
            </div>
          </b-card>
        </b-collapse>
      </div>
      <div class="mt-4">
        <h4>Черты расы</h4>
        <div class="row">
          <div
            class="col-sm-12 col-md-6 col-lg my-2"
            :key="index"
            v-for="(feature, index) in raceData.features"
          >
            <b-card class="h-100" :title="feature.name">
              <p>{{ feature.description }}</p></b-card
            >
          </div>
        </div>
      </div>
    </b-card>
    <pagination-component
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
      equalitySocialStatusDescription: null,
      toleranceSocialStatusDescription: null,
      fearSocialStatusDescription: null,
      hateSocialStatusDescription: null,
      sameRaceDescription: null,
      friendshipDescription: null,
    };
  },
  computed: {
    raceData() {
      if (this.race === "Человек") return this.getHumanData();
      if (this.race === "Эльф") return this.getElfData();
      if (this.race === "Краснолюд") return this.getDwarfData();
      if (this.race === "Ведьмак") return this.getWitcherData();

      return [];
    },
  },
  methods: {
    getHumanData() {
      return {
        features: this.$store.state.other.humanFeatures,
        socialStatus: this.$store.state.other.humanSocialStatus,
      };
    },
    getElfData() {
      return {
        features: this.$store.state.other.elfFeatures,
        socialStatus: this.$store.state.other.elfSocialStatus,
      };
    },
    getDwarfData() {
      return {
        features: this.$store.state.other.dwarfFeatures,
        socialStatus: this.$store.state.other.dwarfSocialStatus,
      };
    },
    getWitcherData() {
      return {
        features: this.$store.state.other.witcherFeatures,
        socialStatus: this.$store.state.other.witcherSocialStatus,
      };
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

    this.equalitySocialStatusDescription =
      other.equalitySocialStatusDescription;
    this.toleranceSocialStatusDescription =
      other.toleranceSocialStatusDescription;
    this.fearSocialStatusDescription = other.fearSocialStatusDescription;
    this.hateSocialStatusDescription = other.hateSocialStatusDescription;
    this.sameRaceDescription = other.sameRaceDescription;
    this.friendshipDescription = other.friendshipDescription;
  },
};
</script>
