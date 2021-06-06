<script lang="ts">
  import Icon, { ExternalLink } from 'svelte-hero-icons';
  export let data: any;
</script>

<p class="text-gray-400 leading-normal">
  <span class="text-gray-300 font-black">{data.total}</span>
  programmed this week, with an average of
  <span class="text-gray-300 font-black">{data.average}</span>
  every day.
</p>

<p class="text-sm text-gray-400 leading-normal">
  <span>View it on</span>
  <a
    class="link inline-flex items-center space-x-1"
    target="_blank"
    rel="noopener"
    href="https://wakatime.com/@plibither8"
  >
    <span>Wakatime</span>
    <Icon src={ExternalLink} size="16" class="text-gray-300" />
  </a>.
</p>

<div class="group space-y-3" style="min-width: 22rem">
  {#each data.languages as { name, time, percent, color }}
    <div class="relative w-full p-3">
      <div
        class="absolute top-0 left-0 h-full rounded transition-opacity opacity-40 group-hover:opacity-70"
        style="background: {color}; width: {(percent /
          data.languages[0].percent) *
          100}%"
      />
      <p
        class="flex items-baseline justify-between text-gray-300 transform translate-x-0"
      >
        <span class="font-medium">{name}</span>
        <span>{time}</span>
      </p>
    </div>
  {/each}
</div>
