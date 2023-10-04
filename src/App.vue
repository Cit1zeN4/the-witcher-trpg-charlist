<template>
  <div id="app">
    <nav-component></nav-component>
    <b-container>
      <transition name="fade">
        <router-view />
      </transition>
    </b-container>
  </div>
</template>

<script>
import NavComponent from "./components/NavComponent.vue";

export default {
  components: {
    NavComponent,
  },
};
</script>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.fade-enter-active,
.fade-leave-active {
  transition-property: opacity;
  transition-duration: 0.25s;
}

.fade-enter-active {
  transition-delay: 0.25s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
