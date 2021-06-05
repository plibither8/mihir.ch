<script>
  import Container from "../Container.svelte";
  import NetworksItem from "$lib/components/Home/NetworksItem.svelte";
  import config from "$lib/data/config.json";
  import networks from "$lib/data/networks.json";

  import Github from "@icons-pack/svelte-simple-icons/lib/components/Github.svelte";
  import Twitter from "@icons-pack/svelte-simple-icons/lib/components/Twitter.svelte";
  import Linkedin from "@icons-pack/svelte-simple-icons/lib/components/Linkedin.svelte";
  import HackerNews from "@icons-pack/svelte-simple-icons/lib/components/Ycombinator.svelte";
  import Keybase from "@icons-pack/svelte-simple-icons/lib/components/Keybase.svelte";
  import Instagram from "@icons-pack/svelte-simple-icons/lib/components/Instagram.svelte";
  import LastDotFm from "@icons-pack/svelte-simple-icons/lib/components/LastDotFm.svelte";
  import Spotify from "@icons-pack/svelte-simple-icons/lib/components/Spotify.svelte";
  import Goodreads from "@icons-pack/svelte-simple-icons/lib/components/Goodreads.svelte";
  import Behance from "@icons-pack/svelte-simple-icons/lib/components/Behance.svelte";
  import Telegram from "@icons-pack/svelte-simple-icons/lib/components/Telegram.svelte";

  const icons = {
    "GitHub": Github,
    "Twitter": Twitter,
    "LinkedIn": Linkedin,
    "Hacker News": HackerNews,
    "Keybase": Keybase,
    "Instagram": Instagram,
    "Last.fm": LastDotFm,
    "Spotify": Spotify,
    "Goodreads": Goodreads,
    "Behance": Behance,
    "Telegram": Telegram,
  };
</script>

<Container className="space-y-5">
  <p class="text-gray-300 text-lg leading-normal">
    I am currently {config.availableForFreelance ? '' : 'not '}accepting new freelance projects.
    {#if config.availableForFreelance}
      Let's talk here: <a class="link" href="mailto:work@mihir.ch">work@mihir.ch</a>.
    {/if}
  </p>
  <p class="text-gray-300 leading-normal">
    The best way to get in touch with me is to email me at <a class="link" href="mailto:hi@mihir.ch">hi@mihir.ch</a>.<br/>
    For a more informal tête-à-tête, shoot me a message on <a class="link" href="https://t.me/plibither8" target="_blank" rel="noopener">Telegram</a>.
  </p>
  <p class="text-gray-300 leading-normal">
    You can also connect with or follow me on any of the following networks:
  </p>
  <div class="pt-5 flex flex-wrap">
    {#each networks as item}
      <NetworksItem {...item} icon={icons[item.name]} />
    {/each}
  </div>
</Container>
