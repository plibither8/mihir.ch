<script>
  import Container from "$lib/components/Container.svelte";
</script>

<footer class="bg-black-900 border-t border-black-500 py-6 w-full text-xs text-gray-500 leading-normal">
  <Container className="grid grid-cols-2 gap-x-5 gap-y-3">
    <a href="#" class="text-sm">Thanks! ❤️</a>
    <a href="#" class="text-sm">Source on GitHub (MIT licensed)</a>
    <p>Good times, good times</p>
    <a href="#">Version 3.0.0</a>
    <p>&copy; 2017&mdash;{new Date().getFullYear()} Mihir Chaturvedi</p>
    <a href="#">Last updated 3 days ago, <code>commit #434edc2</code></a>
  </Container>
</footer>
