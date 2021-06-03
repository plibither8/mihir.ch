<script lang="ts" context="module">
  export interface HeaderInfo {
    element: HTMLElement;
    height: number;
    width: number;
  }
</script>

<script lang="ts">
  import Container from "./Container.svelte";
  import SoundBars from "./SoundBars.svelte";
  import Circles from "./Graphics/Circles.svelte";

  const header: HeaderInfo = {
    element: undefined,
    height: 0,
    width: 0,
  };
</script>

<header
  bind:this={header.element}
  bind:clientWidth={header.width}
  bind:clientHeight={header.height}
  class="relative bg-black-900 py-10 overflow-hidden"
>
  <Circles {header} />
  <Container className="transform translate-x-0">
    <div class="space-y-20">
      <div class="space-y-4 pt-10">
        <h1 class="text-gray-100 text-4xl leading-normal font-medium">
          Mihir Chaturvedi, <span class="text-gray-600">(plibither8)</span>
        </h1>
        <div class="flex items-baseline relative space-x-4">
          <h2 class="text-gray-300 text-xl leading-normal font-black">frontend &amp; user experience</h2>
          <div class="flex-grow h-px bg-accent-900 bg-opacity-30"></div>
        </div>
      </div>
      <div class="space-y-4 max-w-xl">
        <p class="text-gray-400">Namaste! _/\_</p>
        <p class="text-gray-400">
          I build for the web, and like to automate stuff for fun.
          Sometimes when I'm bored, I try to redesign this website.
        </p>
        <p class="text-gray-400">Currently, I'm working @
          <a
            href="https://pabio.com" target="_blank" rel="noopener"
            class="underline hover:text-orange-600"
          >
            Pabio
          </a>
          as a JavaScript engineer.
        </p>
      </div>
      <div class="flex items-center space-x-3">
        <SoundBars />
        <p class="text-gray-300">
          Psst. I'm listening to
          <span class="font-medium text-white">The Modern Age</span>
          by
          <span class="font-medium text-white">The Strokes</span> right now.
        </p>
      </div>
    </div>
  </Container>
</header>
