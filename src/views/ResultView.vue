<template>
  <div>
    <h1>Result</h1>
    <info-component></info-component>
    <pagination-component class="mt-4" prev="/shop"></pagination-component>
  </div>
</template>

<script>
import InfoComponent from "@/components/InfoComponent.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";

export default {
  components: {
    InfoComponent,
    PaginationComponent,
  },
};
</script>

<style></style>
