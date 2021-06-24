<template>
  <div>
    <div class="ctrl-buttons">
      <button @click="loadDisplay()">Click to load</button>
      <button @click="clearDisplay()">Clear</button>
    </div>
    <div class="hero-panel">
      <div v-for="hero in heroes" :key="hero.id">
        <HeroCard :hero="hero"></HeroCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Hero, HeroCollection } from "../shared/data-service";
import DataService from "../shared/data-service";
import HeroCard from "./HeroCard.vue";

@Options({
  components: {
    HeroCard,
  },
})
export default class HeroesDisplay extends Vue {
  public heroes: Hero[] = [];

  public loadDisplay(): void {
    // TODO - find out how Vue.js does DI, ideally shouldnt be newing-up here
    let ds = new DataService();
    ds.getHeroes((data: HeroCollection) => {
      this.heroes = data.heroes;
    });
  }

  public clearDisplay(): void {
    this.heroes.length = 0;
  }
}
</script>

<style scoped>
.hero-panel {
  display: flex;
  flex-wrap: wrap;
}
</style>
