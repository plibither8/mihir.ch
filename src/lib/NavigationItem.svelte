<script lang="ts">
  export let text: string;
  export let href: string;
  export let active: boolean;
  export let external: boolean;
</script>

<li>
  <a
    {href}
    target={external && '_blank'}
    class="hover:underline py-4 px-2 block text-indigo-900 {active && 'font-bold'}"
  >
    {text}
  </a>
</li>
