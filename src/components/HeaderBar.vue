<template>
  <header>
    <nav
      class="navbar has-background-dark is-dark"
      role="navigation"
      aria-label="main navigation">
      <HeaderBarBrand></HeaderBarBrand>
      <HeaderBarLinks></HeaderBarLinks>
    </nav>
  </header>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HeaderBarBrand from "./HeaderBarBrand.vue";

@Options({
  props: {
    msg: String,
  },
  components: {
    HeaderBarBrand,
  },
})
export default class HeaderBar extends Vue {
  msg!: string;
}
</script>

<style scoped>
</style>
