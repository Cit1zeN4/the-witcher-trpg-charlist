<template>
  <div>
    <h1>Параметры:</h1>
    <pagination-component
      prev="/profession"
      next="/skills"
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
