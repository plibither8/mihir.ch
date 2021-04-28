<script lang="ts">
  export let title: string;
  export let specialWidth: boolean;
  const id = title && title.toLowerCase().replace(/\s/g, '-');
</script>

<section class="my-5 mx-auto {!specialWidth && 'md:w-full w-11/12'}" {id}>
  {#if title}
    <h2
      class="text-indigo-900 mb-5 text-xl font-serif font-bold mx-auto {specialWidth &&
        'md:w-full w-11/12'}"
    >
      {title}
    </h2>
  {/if}
  <slot />
</section>
