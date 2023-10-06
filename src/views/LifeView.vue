<template>
  <div>
    <h1>Жизненный путь:</h1>
    <pagination-component
      prev="/race"
      next="/profession"
    ></pagination-component>
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
