<script lang="ts">
  export let label: string;
  export let href: string;
  export let strong = false;
</script>

<a
  {href}
  class="text-gray-300 text-sm rounded py-2 px-2 md:px-4 flex items-center {strong
    ? 'font-black'
    : 'font-medium'}">{label}</a
>
