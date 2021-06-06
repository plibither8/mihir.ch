<script lang="ts">
  export let name: string;
  export let href: string;
  export let color: string;
  export let icon: any;
</script>

<a
  class="text-gray-300 text-sm font-medium flex items-center space-x-2 p-2 mr-5 mb-5 relative"
  {href}
  target="_blank"
  rel="noopener"
  style="--hover-color: {color};"
>
  <div class="z-10">
    <svelte:component this={icon} size={18} />
  </div>
  <span class="z-10">{name}</span>
</a>

<style>
  a::before {
    @apply absolute top-0 left-0 w-full h-full opacity-0 rounded transition-opacity;
    content: '';
    background: var(--hover-color);
  }

  a:hover::before {
    @apply opacity-20;
  }
</style>
