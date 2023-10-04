<template>
  <div class="d-flex justify-content-center">
    <div>
      <b-button v-if="prev" @click="goPrev" class="mx-2" variant="primary"
        >Предыдущая страница</b-button
      >
      <b-button v-if="next" @click="goNext" class="mx-2" variant="success"
        >Следующая страница</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: String,
      default: undefined,
    },
    next: {
      type: String,
      default: undefined,
    },
  },
  methods: {
    goPrev() {
      this.$emit("goPrev");
      this.$router.push(this.prev);
    },
    goNext() {
      this.$emit("goNext");
      this.$router.push(this.next);
    },
  },
};
</script>

<style></style>
