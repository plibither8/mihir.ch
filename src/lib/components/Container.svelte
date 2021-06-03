<script lang="ts">
  export let className: string = "";
  export let stretch: boolean = false;
</script>

<div class="{!stretch && "px-5"} max-w-4xl mx-auto {className}">
  <slot />
</div>
