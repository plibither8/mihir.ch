<script lang="ts">
  export let type: 'primary' | 'secondary';
  export let label: string;
  export let href: string;
  export let description: string = '';
  export let external: boolean = false;
  export let strong: boolean = false;
</script>

{#if type === 'primary'}
  <a
    {href}
    target={external ? '_blank' : '_self'}
    rel={external && 'noopener'}
    class="text-gray-300 text-sm rounded py-2 px-2 md:px-4 flex items-center {strong
      ? 'font-black'
      : 'font-medium'}">{label}</a
  >
{:else}
  <a
    href="/"
    target={external ? '_blank' : '_self'}
    rel={external && 'noopener'}
    class="flex flex-col space-y-1 hover:text-purple-400 text-gray-300"
  >
    <span class="font-medium">{label}</span>
    <span class="text-xs text-gray-500">{description}</span>
  </a>
{/if}
