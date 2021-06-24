<template>
  <div class="navbar-brand">
    <a
      class="navbar-item"
      href="https://vuejs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i class="fab js-logo fa-vuejs fa-2x" aria-hidden="true" />
    </a>
    <div class="navbar-item nav-home">
      <img class="logo" src="../assets/logo.png" />
      <span class="tour">TOUR</span>
      <span class="of">OF</span>
      <span class="heroes">HEROES</span>
    </div>
    <button
      class="link navbar-burger burger"
      aria-label="menu"
      aria-expanded="false"
      data-target="navbarBasicExample"
    >
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HeaderBarBrand extends Vue {}
</script>

<style scoped>
.tour {
  color: darkgreen;
}
.logo {
  width: 28px;
  height: 28px;
}
.navbar-item {
  background: slategrey;
}
</style>
