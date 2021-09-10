<script lang="ts">
  import { normalizeForId } from "$lib/utils";
  import DeepLink from "./DeepLink.svelte";

  export let className: string = "";
  export let heading: string = "";
  export let id: string = normalizeForId(heading);
</script>

<div id="{id}" class="max-w-3xl mx-auto w-11/12 {className}">
  {#if heading}
    <DeepLink id="{id}">
      <h2 class="text-3xl font-black text-gray-100">{heading}</h2>
    </DeepLink>
  {/if}
  <slot />
</div>
