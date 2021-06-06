<script lang="ts">
  export let artist;
  export let activeArtist;
  export let span: { col: number; row: number };
  const activateArtist = () => ($activeArtist = artist);
</script>

<button
  class="
    group bg-black-500 rounded-md overflow-hidden
    filter saturate-0 hover:saturate-100 focus:saturate-100 transition-all
    cursor-default focus:outline-none
  "
  style="
    grid-row: span {span.row} / span {span.row};
    grid-column: span {span.col} / span {span.col};
  "
  on:focus={activateArtist}
  on:click={activateArtist}
  on:mouseover={activateArtist}
  on:mouseenter={activateArtist}
>
  <img
    class="h-full w-full object-cover transform group-hover:scale-105 group-focus:scale-105 transition-transform"
    src={artist.image}
    alt="{artist.name} cover image"
  />
</button>
