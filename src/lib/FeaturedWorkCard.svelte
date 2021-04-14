<script lang="ts">
  export let title: string;
  export let description: string;
</script>

<div class="text-black border-indigo-100 border p-5 space-y-2 rounded-lg" style="min-width: 300px;">
  <h3 class="text-base font-medium">{title}</h3>
  <p class="text-sm leading-relaxed text-gray-900">{description}</p>
</div>
