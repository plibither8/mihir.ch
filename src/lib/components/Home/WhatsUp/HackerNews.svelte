<script lang="ts">
  import Icon, { ExternalLink, Plus } from 'svelte-hero-icons';
  export let data: any;
  let loadCount = 5;
</script>
<!-- 
<p class="text-gray-400 leading-normal">
  <span class="text-gray-300 font-black">{data.length}</span>
  favourited stories and comments, in total.
</p> -->

<p class="text-sm text-gray-400 leading-normal">
  <span>View it on</span>
  <a
    class="link inline-flex items-center space-x-1"
    target="_blank"
    rel="noopener"
    href="https://news.ycombinator.com/user?id=plibither8"
  >
    <span>my HN profile</span>
    <Icon src={ExternalLink} size="16" class="text-gray-300" />
  </a>.
</p>

<div class="space-y-5" style="min-width: 25rem">
  {#each data.slice(0, loadCount) as { id, link, time, text, type, title }, i}
    <article class="space-y-2 relative">
      <span class="absolute top-0 right-full text-gray-500 mr-3">{data.length - i}.</span>
      {#if type === "story"}
        <a class="text-gray-300 link" href={link} target="_blank" rel="noopener">
          <h4 class="leading-normal">{title}</h4>
        </a>
      {:else}
        <p class="text-gray-300 leading-normal italic">{@html text}</p>
      {/if}
      <p class="text-sm text-gray-400">
        {new Date(time).toLocaleDateString("en-US", { dateStyle: "long" })}
        &middot;
        <a class="link" href="https://news.ycombinator.com/id?={id}" target="_blank" rel="noopener">
          show on hn
        </a>
      </p>
    </article>
  {/each}
  {#if loadCount < data.length}
    <button class="text-gray-300 flex items-center space-x-3" on:click={() => loadCount += 5}>
      <Icon src={Plus} size="16"/>
      <span>More</span>
    </button>
  {/if}
</div>
