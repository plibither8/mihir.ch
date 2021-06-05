<script lang="ts">
  export let heading: string;
  export let description: string;
  export let data: any;
  export let component: any;
</script>

<div class="space-y-5">
  <h3 class="leading-normal text-gray-400">
    <span class="font-medium text-white text-lg">{heading}</span>
    <span class="mx-1">&mdash;</span>
    <span>{description}</span>
  </h3>
  <svelte:component this={component} {data} />
</div>
