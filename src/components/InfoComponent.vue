<template>
  <div>{{ charlist }}</div>
</template>

<script>
export default {
  computed: {
    charlist() {
      return this.$store.state.charlist;
    },
  },
};
</script>

<style></style>
