<template>
  <HeaderBar msg="Welcome to Your Vue.js + TypeScript App" />
  <div class="main-section content-title-group">
    <h2 class="title">Heroes</h2>
    <HeroesDisplay></HeroesDisplay>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HeaderBar from './components/HeaderBar.vue';
import HeroesDisplay from './components/HeroesDisplay.vue';

@Options({
  components: {
    HeaderBar,
    HeroesDisplay,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '@/design/index.scss';
</style>
