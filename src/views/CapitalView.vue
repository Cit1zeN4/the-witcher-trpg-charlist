<template>
  <div>
    <h1>Начальный капитал:</h1>
    <pagination-component
      class="mt-4"
      prev="/skills"
      next="/shop"
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
