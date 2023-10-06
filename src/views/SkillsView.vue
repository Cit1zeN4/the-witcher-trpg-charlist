<template>
  <div>
    <h1>Основные навыки:</h1>
    <pagination-component prev="/stats" next="/capital"></pagination-component>
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
