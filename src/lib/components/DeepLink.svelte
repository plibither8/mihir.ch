<script lang="ts">
  import Icon, { Link } from 'svelte-hero-icons';
  export let id: string;
  export let size = '20';
</script>

<div class="group flex items-center relative mb-5">
  <a
    class="group-hover:opacity-100 opacity-0 absolute right-full pr-2 transition-opacity"
    href="#{id}"
  >
    <Icon src={Link} {size} class="text-gray-300" />
  </a>
  <slot />
</div>
