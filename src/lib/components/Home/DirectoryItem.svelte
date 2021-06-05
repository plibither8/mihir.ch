<script lang="ts">
  import Icon, { ExternalLink } from "svelte-hero-icons";
  export let name: string;
  export let href: string;
  export let description: string;
</script>

<div class="group bg-black-500 hover:bg-black-900 transition-colors border border-black-900 p-5 space-y-2 rounded-lg w-full">
  <a {href} target="_blank" rel="noopener" class="flex items-center space-x-2 text-gray-300 group-hover:text-purple-400 transition-colors">
    <h3 class="font-medium">{name}</h3>
    <Icon src={ExternalLink} size="16" />
  </a>
  <p class="text-gray-400 text-sm">{description}</p>
</div>

<style>
  div {
    min-width: 20rem;
  }
</style>
