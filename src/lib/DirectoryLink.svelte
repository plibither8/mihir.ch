<script lang="ts">
  export let href: string;
  export let text: string;
  export let description: string;
</script>

<div>
  <p class="flex flex-col space-y-2 md:block leading-relaxed">
    <a class="font-medium underline md:mr-3 text-black" {href}>{text}</a>
    <span class="text-gray-900">{description}</span>
  </p>
</div>
