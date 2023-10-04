<template>
  <div>
    <b-card class="mt-5 shadow">
      <h1>Имя:</h1>

      <b-form>
        <b-form-group
          class="mt-3"
          label="Введите ваше реальное имя"
          label-for="player-name"
          ><b-form-input
            id="player-name"
            placeholder="Введите ваше имя"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="mt-3"
          label="Введите имя персонажа"
          label-for="name"
          description="Поле может содержать имя и фамилию"
          ><b-form-input
            id="name"
            placeholder="Введите имя персонажа"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          class="mt-3"
          label="Введите возраст персонажа"
          label-for="age"
          ><b-form-input
            id="age"
            type="number"
            placeholder="Введите возраст вашего персонажа"
          ></b-form-input>
        </b-form-group>
      </b-form>
    </b-card>
    <pagination-component class="mt-4" next="/race"></pagination-component>
  </div>
</template>

<script>
import PaginationComponent from "@/components/PaginationComponent.vue";

export default {
  components: {
    PaginationComponent,
  },
};
</script>
