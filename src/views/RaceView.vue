<template>
  <div>
    <h1>Раса:</h1>
    <pagination-component
      class="mt-4"
      prev="/"
      next="/life"
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
