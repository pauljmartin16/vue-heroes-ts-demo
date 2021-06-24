/* eslint-disable @typescript-eslint/no-inferrable-types */
<template>
  <div class="navbar-menu">
    <div class="navbar-end">
      <div class="navbar-item">
        <div class="buttons">
          <a :href="github" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a :href="twitter" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-twitter fa-2x" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({})
export default class HeaderBarLinks extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  public github: string = "https://github.com/johnpapa/vue-getting-started";

  // eslint-disable-next-line @typescript-eslint/no-inferrable-types
  public twitter: string = "https://twitter.com/john_papa";
}
</script>

<style scoped>
</style>
