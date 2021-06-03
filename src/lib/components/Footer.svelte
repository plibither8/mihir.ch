<script>
  import Container from "./Container.svelte";
</script>

<footer class="bg-black-900 border-t border-black-500 py-6 w-full text-xs text-gray-500 leading-normal">
  <Container className="grid grid-cols-2 gap-x-5">
    <div class="flex flex-col space-y-3">
      <a href="#" class="text-sm">Thanks and attributions ❤️</a>
      <p>Good times, good times</p>
      <p>&copy; 2017&mdash;{new Date().getFullYear()} Mihir Chaturvedi</p>
    </div>
    <div class="flex flex-col space-y-3">
      <a href="#" class="text-sm">Source on GitHub (MIT licensed)</a>
      <a href="#">Version 3.0.0</a>
      <a href="">Last updated 3 days ago, <code>commit #434edc2</code></a>
    </div>
  </Container>
</footer>
