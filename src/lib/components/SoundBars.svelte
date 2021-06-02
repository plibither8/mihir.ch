<script lang="ts">
  export let barColors: string[] = ["#74007a", "#a53faa", "#da70dc"];
  export let width: string = "20";
  export let height: string = "20";
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 100 100"
  {width}
  {height}
  class="transform rotate-180"
>
  {#each barColors as color, index}
    <rect
      fill="{color}"
      x="{12.5 + 25 * index}"
      y="24.5"
      width="25"
      height="40"
    >
      <animate
        attributeName="height"
        calcMode="spline"
        values="34; 51; 6.8; 34"
        dur="0.625s"
        keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
        repeatCount="indefinite"
        begin="{-index * 0.2}s"
      />
    </rect>
  {/each}
</svg>
