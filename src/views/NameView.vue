<template>
  <div>
    <b-card title="Имя персонажа" class="mt-5 shadow">
      <b-form>
        <b-form-group
          class="mt-3"
          label="Ваше реальное имя"
          label-for="player-name"
          ><b-form-input
            id="player-name"
            placeholder="Введите ваше имя"
            v-model="playerName"
            :state="playerNameState"
            aria-describedby="player-name-feedback"
          ></b-form-input>

          <b-form-invalid-feedback id="player-name-feedback">
            Имя должно содержать хотя бы 2 символа
          </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          class="mt-3"
          label="Имя персонажа"
          label-for="name"
          description="Поле может содержать имя и фамилию"
          ><b-form-input
            id="name"
            placeholder="Введите имя персонажа"
            v-model="name"
            :state="nameState"
            aria-describedby="name-feedback"
          ></b-form-input>

          <b-form-invalid-feedback id="name-feedback">
            Имя персонажа должно содержать хотя бы 2 символа
          </b-form-invalid-feedback>
        </b-form-group>

        <div class="row mt-3">
          <div class="col-sm-12 col-md-6">
            <b-form-group label="Возраст персонажа" label-for="age"
              ><b-form-input
                id="age"
                type="number"
                placeholder="Введите возраст вашего персонажа"
                v-model="age"
                :state="ageState"
                aria-describedby="age-feedback"
              ></b-form-input>

              <b-form-invalid-feedback id="age-feedback">
                Возраст персонажа должен быть больше нуля
              </b-form-invalid-feedback>
            </b-form-group>
          </div>
          <div class="col-sm-12 col-md-6">
            <b-form-group label="Пол персонажа" label-for="sex"
              ><b-form-select
                v-model="sex"
                :options="sexOptions"
                plain
              ></b-form-select>
            </b-form-group>
          </div>
        </div>
      </b-form>
    </b-card>
    <pagination-component
      class="mt-4"
      next="/race"
      :can-next="dataState"
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
      playerName: null,
      name: null,
      age: null,
      sex: null,
      sexOptions: ["Мужчина", "Женщина"],
    };
  },
  computed: {
    playerNameState() {
      return this.playerName !== null && this.playerName.length >= 2;
    },
    nameState() {
      return this.name !== null && this.name.length >= 2;
    },
    ageState() {
      return this.age !== null && this.age > 0;
    },
    dataState() {
      return this.playerNameState && this.nameState && this.ageState;
    },
  },
  methods: {
    save() {
      var data = {
        playerName: this.playerName,
        name: this.name,
        age: this.age,
        sex: this.sex,
      };

      this.saveState(data);
    },
    ...mapMutations({ saveState: "saveNameViewData" }),
  },
  mounted() {
    var common = this.$store.state.charlist.common;
    var other = this.$store.state.other;

    console.log(common);

    this.playerName = common.playerName;
    this.name = common.name;
    this.age = common.age;
    this.sex = common.sex;
    this.sexOptions = other.sexOptions;
  },
};
</script>
