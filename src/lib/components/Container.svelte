<script lang="ts">
  export let className = '';
  export let stretch = false;
</script>

<div class="{!stretch && 'px-5'} max-w-4xl mx-auto {className}">
  <slot />
</div>
