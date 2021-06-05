<script lang="ts">
  export let artist;
</script>

<div
  class="bg-black-500 col-span-3 row-span-3 rounded-md overflow-hidden"
  on:touchstart="{() => console.log("hello")}"
>
  <img
    class="h-full w-full object-cover hover:saturate-100 hover:contrast-100 transition-all"
    src="" alt=""
  />
</div>
