<template>
  <div>
    <h1>Профессия:</h1>
    <pagination-component prev="/life" next="/stats"></pagination-component>
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
