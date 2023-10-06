<template>
  <div class="d-flex justify-content-center my-5">
    <div>
      <b-button-group>
        <b-button
          v-if="prev"
          :disabled="!canPrev"
          @click="goPrev"
          variant="success"
          size="lg"
          ><b-icon icon="arrow-left-square-fill"></b-icon
        ></b-button>
        <b-button
          v-if="next"
          :disabled="!canNext"
          @click="goNext"
          variant="success"
          size="lg"
          ><b-icon icon="arrow-right-square-fill"></b-icon
        ></b-button>
      </b-button-group>
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
    canNext: {
      type: Boolean,
      default: true,
    },
    canPrev: {
      type: Boolean,
      default: true,
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
