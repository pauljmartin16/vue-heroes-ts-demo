<template>
  <div class="hero-card">
    <div class="card-content">
      <div class="content">
        <div :key="hero.name" class="name">
          {{ hero.firstName }} {{ hero.lastName }}
        </div>
        <div class="description">{{ hero.description }}</div>
      </div>
    </div>
    <footer class="card-footer">
      <button class="link card-footer-item" @click="selectHero()">
        <i class="fas fa-check"></i>
        <span>Select</span>
      </button>
    </footer>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Hero } from '../shared/data-service';

@Options({
  props: {
    hero: Hero,
  },
})
export default class HeroCard extends Vue {
  public hero!: Hero;

  public selectedText!: string; // added for unit testing poc

  public selectHero(): void {
    // eslint-disable-next-line no-alert
    alert(`Selected ${this.hero.firstName} ${this.hero.lastName} - ${this.hero.description}`);
    this.selectedText = `Selected ${this.hero.firstName} ${this.hero.lastName}`;
  }
}
</script>

<style scoped>
.hero-card {
  padding: 5px;
  border-width: 2.5px;
  border-color: darkgreen;
  border-style: solid;
  margin: 5px;
  border-radius: 10px;
  min-width: 175px;
}
.crtl-buttons {
  display: flex;
  flex-wrap: wrap;
}
footer {
  background: slategrey;
}
</style>
