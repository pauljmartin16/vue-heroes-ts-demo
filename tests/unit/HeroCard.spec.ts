import { shallowMount, mount } from '@vue/test-utils';
import { Hero } from '@/shared/data-service';
import HeroCard from '@/components/HeroCard.vue';
import { render } from 'vue';

// Spec file normally in-line with the HeroCard component
describe('When a hero card is loaded', () => {

  let hero: Hero;

  beforeEach(async() => {
    hero = new Hero();
    hero.firstName="Cat";
    hero.lastName="Woman";
    hero.id=1;
    hero.description="Enemy of Batman"
  });

  it('should match the snapshot', () => {

      const wrapper = mount(HeroCard, {
        props: { hero },
    });
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should display hero properties', () => {

    const wrapper = shallowMount(HeroCard, {
        props: { hero },
    });

    // validate properties in HeroCard
    // suggest bypassing HTML - test TS directly

  });
});

