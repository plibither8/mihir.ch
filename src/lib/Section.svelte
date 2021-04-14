<script lang="ts">
  export let title: string;
  export let specialWidth: boolean;
  const id = title.toLowerCase().replace(/\s/g, '-');
</script>

<section class="my-10 mx-auto {!specialWidth && 'md:w-full w-11/12'}" {id}>
  <h2
    class="text-indigo-900 mb-5 text-xl font-serif font-bold mx-auto {specialWidth &&
      'md:w-full w-11/12'}"
  >
    {title}
  </h2>
  <slot />
</section>
