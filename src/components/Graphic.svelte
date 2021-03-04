<script lang='ts'>
  import { randomFromArray } from '../utils';

  import TwoRectangles from './Graphics/TwoRectangles.svelte';
  import VerticalBars from './Graphics/VerticalBars.svelte';
  import HorizontalBars from './Graphics/HorizontalBars.svelte';

  const graphics = [
    TwoRectangles,
    VerticalBars,
    HorizontalBars,
  ];

  // const chosen = randomFromArray(graphics);
  const chosen = HorizontalBars;
</script>

<svelte:component this={chosen} />
