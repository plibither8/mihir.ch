<script lang="ts">
  import { normalizeForId } from "$lib/utils";
  import Container from "./Container.svelte";
  import DeepLink from "./DeepLink.svelte";

  export let heading: string;
  export let className: string = "";
  const id = normalizeForId(heading);
</script>

<section class="my-10 {className}" {id}>
  <Container>
    <DeepLink {id}>
      <h2 class="text-gray-300 text-2xl font-black">{heading}</h2>
    </DeepLink>
  </Container>
  <slot/>
</section>
